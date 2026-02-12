import { onCall, HttpsOptions } from 'firebase-functions/v2/https';

import { generate } from '@genkit-ai/ai';
import { geminiPro } from '@genkit-ai/googleai';
import { initGenkit } from './genkit';

import { retrieveContext } from './rag/corporateMemory';
import { MissionResponseSchema } from './missionSchema';

// Initialize Genkit
initGenkit();

const FUNCTION_OPTS: HttpsOptions = {
    region: 'europe-west1',
    memory: '1GiB',
    timeoutSeconds: 60,
    cors: true, // Allow Client Access
};

/**
 * START MISSION: The Core Activa/SquadLeader Endpoint.
 * Receives a task, context, and agent profile.
 * Returns a structured plan of action.
 */
export const startMission = onCall(FUNCTION_OPTS, async (request) => {
    const { task, agent, context } = request.data;

    if (!request.auth) {
        throw new Error("Unauthorized: Activa Identity Required.");
    }

    console.log(`[SquadLeader] Mission Received: ${task.text} -> ${agent.role}`);

    try {
        // 1. Retrieve Corporate Memory (RAG)
        const knowledgeSnippets = await retrieveContext(task.text, context.title);
        const contextString = knowledgeSnippets.map(k => `- [${k.category.toUpperCase()}] ${k.content}`).join('\n');

        console.log(`[SquadLeader] Knowledge Injected: ${knowledgeSnippets.length} snippets`);

        // 2. Construct the Meta-Prompt
        const prompt = `
      ROLE: You are ${agent.role} (${agent.agent}), a top-tier corporate AI agent at Activa SL.
      CONTEXT: The CEO has assigned a mission in the ${context.title} sector.
      OBJECTIVE: ${context.ceoObjective}
      
      CORPORATE MEMORY (Use these SOPs if relevant):
      ${contextString}

      MISSION: "${task.text}"
      
      INSTRUCTIONS:
      1. Analyze the mission parameters against the Corporate Memory.
      2. If an SOP is relevant, explicitly mention it in the 'sopUsed' field.
      3. Generate a HIGH-PRECISION execution plan.
      4. Assign a confidence score based on information completeness.
      5. Output MUST be valid JSON matching the schema.
    `;

        // 3. Generate Response via Genkit (Gemini Pro)
        const llmResponse = await generate({
            model: geminiPro,
            prompt: prompt,
            output: { schema: MissionResponseSchema }, // STRONG TYPING
            config: {
                temperature: 0.4, // Lower temperature for structured data
            },
        });

        // 4. Return Structured Data
        const structuredOutput = llmResponse.output();

        if (!structuredOutput) {
            throw new Error("Genkit failed to generate structured output.");
        }

        return {
            status: 'success',
            agent: agent.role,
            data: structuredOutput, // Typed Object
            timestamp: Date.now()
        };



    } catch (error) {
        console.error("Mission Failed:", error);
        throw new Error("Squad Leader System Failure");
    }
});

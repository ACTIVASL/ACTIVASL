
import { functions } from '../config/firebase';
import { httpsCallable } from 'firebase/functions';
import { SquadMember, Insight, SectionConfig } from '../data/CorporateModel';

export interface MissionContext {
    agent: SquadMember;
    task: Insight;
    section: SectionConfig;
    timestamp: number;
}

export interface MissionResult {
    status: 'optimized' | 'pending_review' | 'failed';
    feedback: string;
    notebookUrl?: string;
    actions?: string[];
}

/**
 * SquadLeader: The Orchestrator of the Hybrid Workforce.
 * This service handles the delegation of tasks from the CEO (User) to the AI Agents.
 */
class SquadLeaderService {



    /**
     * Delegates a mission to an agent via the Cloud Brain.
     */
    async delegateMission(mission: MissionContext): Promise<MissionResult> {

        console.log(`[SquadLeader] Initializing Mission: ${mission.task.id} -> ${mission.agent.role}`);

        try {
            // 1. Call Cloud Function (The Brain)
            const startMissionFn = httpsCallable(functions, 'startMission');
            const result = await startMissionFn({
                task: mission.task,
                agent: mission.agent,
                context: {
                    title: mission.section.title,
                    ceoObjective: mission.section.ceoObjective
                }
            });

            // 2. Parse Response (Typed)
            const responseData = result.data as {
                status: string;
                data: {
                    rationale: string;
                    steps: Array<{ id: number; action: string; tool?: string }>;
                    confidence: number;
                    sopUsed?: string;
                };
            };

            const { rationale, steps, confidence, sopUsed } = responseData.data;

            // 3. Format "Rich Report" for Clipboard
            const clipboardText = `
### 🧠 STRATEGY REPORT (${mission.agent.role})
**Confidence:** ${confidence}% 
${sopUsed ? `**SOP Reference:** ${sopUsed}` : ''}

**Rationale:**
_${rationale}_

**Execution Plan:**
${steps.map(s => `${s.id}. **${s.action}** ${s.tool ? `(Tool: \`${s.tool}\`)` : ''}`).join('\n')}
            `.trim();

            await navigator.clipboard.writeText(clipboardText);

            // 4. Return Success
            return {
                status: 'optimized',
                feedback: `Strategy Received (${confidence}% confidence). Report copied to clipboard.`,
                notebookUrl: mission.agent.notebookUrl || 'https://notebooklm.google.com',
                actions: ['Brain Activated', 'Strategy Generated', 'Report Formatted']
            };

        } catch (error) {
            console.error("[SquadLeader] Mission Failed:", error);
            return {
                status: 'failed',
                feedback: "Error connecting to Corporate Brain. Check console.",
            };
        }
    }
}

export const SquadLeader = new SquadLeaderService();

import { z } from 'zod';

export const MissionResponseSchema = z.object({
    rationale: z.string().describe("The strategic reasoning behind the plan."),
    steps: z.array(z.object({
        id: z.number(),
        action: z.string().describe("The specific executable action."),
        tool: z.string().optional().describe("Recommended tool or software.")
    })).describe("A 3-step execution plan."),
    confidence: z.number().min(0).max(100).describe("Confidence score (0-100)."),
    sopUsed: z.string().optional().describe("Citation of the Corporate Memory SOP used.")
});

export type MissionResponse = z.infer<typeof MissionResponseSchema>;

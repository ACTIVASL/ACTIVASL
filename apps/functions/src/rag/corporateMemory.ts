
/**
 * CORPORATE MEMORY (Simulated Vector Database)
 * In a real scenario, this would connect to Pinecone, Weaviate, or Firestore Vector Search.
 * For now, we return "Standard Operating Procedures" based on the sector.
 */

export interface KnowledgeSnippet {
    id: string;
    category: string;
    content: string;
    relevance: number;
}

const CORPORATE_KNOWLEDGE_BASE: Record<string, string[]> = {
    'management': [
        "SOP-101: All strategic decisions must align with Q3 OKRs.",
        "PROTOCOL: Executive summaries must be less than 200 words.",
        "RULE: Approval required for budgets over $10k."
    ],
    'sales': [
        "SCRIPT: Emphasize 'ROI' and 'Time-to-Value' in all pitches.",
        "TACTIC: The 'Columbo Method' is approved for closing leads.",
        "METRIC: Target CAC is <$500."
    ],
    'marketing': [
        "BRAND: Use 'Titanium' (#0F172A) and 'Neon Cyan' (#06b6d4) only.",
        "VOICE: Professional, futuristic, authoritative.",
        "CHANNEL: LinkedIn B2B is the primary focus."
    ],
    'engineering': [
        "STACK: React, Firebase, Node.js (Monorepo Standard).",
        "QUALITY: 100% Type Safety. No 'any'.",
        "DEPLOY: Green CI/CD pipeline required before merge."
    ],
    'default': [
        "CULTURE: 'Activa First' - Client success is paramount.",
        "SECURITY: Zero Trust architecture is mandatory."
    ]
};

export const retrieveContext = async (query: string, sector: string): Promise<KnowledgeSnippet[]> => {
    console.log(`[RAG] Searching Corporate Memory for: "${query}" in sector: ${sector}`);

    // Simulate Network Latency (The "Thinking" Pause)
    await new Promise(resolve => setTimeout(resolve, 500));

    const sectorDocs = CORPORATE_KNOWLEDGE_BASE[sector.toLowerCase()] || CORPORATE_KNOWLEDGE_BASE['default'];
    const generalDocs = CORPORATE_KNOWLEDGE_BASE['default'];

    // Combine and map to snippets
    const results = [...sectorDocs, ...generalDocs].map((doc, index) => ({
        id: `doc-${sector}-${index}`,
        category: sector,
        content: doc,
        relevance: 0.95 - (index * 0.1) // Fake relevance decay
    }));

    return results.slice(0, 3); // Return top 3 'relevant' docs
};

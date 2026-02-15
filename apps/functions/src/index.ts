import { onCall, HttpsOptions } from 'firebase-functions/v2/https';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

import { generate } from '@genkit-ai/ai';
import { embed } from '@genkit-ai/ai/embedder';
import { geminiPro, textEmbeddingGecko001 } from '@genkit-ai/googleai'; // Fallback to gecko if 004 missing
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

// ... startMission ...

/**
 * TRIGGER: Vector Embedding Generation
 * Automatic Neural Lace: Listens for new/updated Daily Notes and generates an embedding.
 */
export const embedNote = onDocumentCreated({
    document: "daily_notes/{noteId}",
    region: "europe-west1",
    // We want this to be fast/background
}, async (event) => {
    if (!event.data) return; // Deletion

    const note = event.data.data();
    const content = note.content;

    // Avoid infinite loops if we are just updating the embedding
    if (!content || (note.embedding && !event.data.before.data())) {
        return;
    }
    // Simple check: if content hasn't changed, skip.
    if (event.data.before.data() && event.data.before.data().content === content && note.embedding) {
        return;
    }

    console.log(`[Neural Lace] Embedding note: ${event.params.noteId}`);

    try {
        const embedding = await embed({
            embedder: textEmbeddingGecko001,
            content: content,
        });

        // Update with vector
        await event.data.ref.update({
            embedding: FieldValue.vector(embedding)
        });

        console.log(`[Neural Lace] Success. Vector generated.`);
    } catch (e) {
        console.error("[Neural Lace] Embedding failed", e);
    }
});

/**
 * CALLABLE: Semantic Search
 * Allows the frontend to search notes by meaning.
 */
export const searchNotes = onCall(FUNCTION_OPTS, async (request) => {
    const { query, limit = 5 } = request.data;

    if (!request.auth) {
        throw new Error("Unauthorized");
    }

    console.log(`[Neural Search] Query: ${query}`);

    try {
        // 1. Embed the query
        const queryEmbedding = await embed({
            embedder: textEmbeddingGecko001,
            content: query,
        });

        // 2. Perform Vector Search (Firestore Native)
        const db = getFirestore();
        const coll = db.collection('daily_notes');

        // Filter by user! Important for multi-tenant privacy.
        // Vector search with filters requires a composite vector index.
        const vectorQuery = coll
            .where('userId', '==', request.auth.uid)
            .findNearest('embedding', queryEmbedding, {
                limit: limit,
                distanceMeasure: 'COSINE'
            });

        const snapshot = await vectorQuery.get();

        const results = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            embedding: undefined // Don't send the vector back to client, it's heavy
        }));

        console.log(`[Neural Search] Found ${results.length} matches.`);
        return { results };

    } catch (error) {
        console.error("Search failed:", error);
        throw new Error("Neural Search System Failure");
    }
});



import { configureGenkit } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/googleai';
import { firebase } from '@genkit-ai/firebase';

export const initGenkit = () => {
    configureGenkit({
        plugins: [
            googleAI(), // Uses Vertex AI / Gemini
            firebase(), // Telemetry & Tracing
        ],
        logLevel: 'debug',
        enableTracingAndMetrics: true,
    });
};

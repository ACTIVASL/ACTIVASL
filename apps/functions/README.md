# Activa OS - Cloud Functions (The Brain)

This workspace (`apps/functions`) contains the backend logic for Activa OS, powered by **Firebase Cloud Functions (2nd Gen)** and **Firebase Genkit**.

## Architecture
- **Runtime**: Node.js 18
- **Framework**: Firebase Genkit + Google Vertex AI (Gemini Pro)
- **Triggers**: HTTPS Callable (`onCall`)

## Key Endpoints
1.  **`startMission`**: The primary entry point. Receives a high-level task from the UI and returns a structured execution plan.

## Setup
1.  Navigate to this directory: `cd apps/functions`
2.  Install dependencies: `npm install`
3.  Set Secrets: `firebase functions:secrets:set VERTEX_API_KEY`

## Deployment
```bash
firebase deploy --only functions
```

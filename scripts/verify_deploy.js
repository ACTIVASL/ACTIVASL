const { execSync } = require('child_process');

console.log("🛡️ SECURITY CHECK: Verifying Deployment Target...");

try {
    // 1. Get current firebase project
    const projectList = execSync('npx firebase use').toString();
    console.log("Current Project Selection:", projectList);

    // 2. Define FORBIDDEN keywords
    const FORBIDDEN_PROJECTS = ['webycrm-activa', 'app-activamusicoterapia', 'clinical'];

    // 3. Check for violations
    const isViolation = FORBIDDEN_PROJECTS.some(forbidden => projectList.includes(forbidden));

    if (isViolation) {
        console.error("\n\n❌ CRITICAL SECURITY ERROR: CROSS-CONTAMINATION DETECTED");
        console.error("-----------------------------------------------------");
        console.error("You are trying to deploy the TECH repo to the CLINICAL project.");
        console.error(`Detected forbidden project ID in: ${projectList.trim()}`);
        console.error("This operation has been BLOCKED to protect production.");
        console.error("-----------------------------------------------------\n");
        console.error("SOLUTION: Run 'npx firebase use activa-sl-digital' (or create it)");
        process.exit(1); // Force failure
    }

    console.log("✅ SECURITY PASS: Deployment target is safe.\n");
    process.exit(0);

} catch (error) {
    // If no project is selected, that's also safe (deploy will fail anyway)
    console.log("⚠️ No active project found or error checking. Proceeding with caution (Firebase will likely ask for target).");
}

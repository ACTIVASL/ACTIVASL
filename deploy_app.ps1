$ErrorActionPreference = "Stop"

Write-Host "🚀 DESPLEGANDO APP WEB / CRM (TARGET: crm-activa...)" -ForegroundColor Cyan
Write-Host "----------------------------------------------------" -ForegroundColor Gray

$ProjectRoot = "$PSScriptRoot"
$FirebaseBin = "$ProjectRoot\apps\landing-web\node_modules\.bin\firebase.cmd"

if (-not (Test-Path $FirebaseBin)) {
    Write-Error "❌ Error: No encuentro el binario de Firebase."
    exit 1
}

# Usar el proyecto APP (CRM)
& $FirebaseBin use app

# Build (Titanium Standard)
Write-Host "🚧 Compilando App (Build)..." -ForegroundColor Yellow
pnpm --filter crm-client build
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌ Error en el Build. Abortando despliegue."
    exit 1
}

# Desplegar SOLO App
& $FirebaseBin deploy --only hosting:crm-client

Write-Host "`n✅ APP WEB DESPLEGADA CORRECTAMENTE." -ForegroundColor Green


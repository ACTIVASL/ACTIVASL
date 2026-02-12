$ErrorActionPreference = "Stop"

Write-Host "🚀 DESPLEGANDO LANDING WEB (TARGET: activa-sl-corporate...)" -ForegroundColor Cyan
Write-Host "--------------------------------------------------------" -ForegroundColor Gray

$ProjectRoot = "$PSScriptRoot"
$FirebaseBin = "$ProjectRoot\apps\landing-web\node_modules\.bin\firebase.cmd"

if (-not (Test-Path $FirebaseBin)) {
    Write-Error "❌ Error: No encuentro el binario de Firebase."
    exit 1
}

# Usar el proyecto DEFAULT (Activa SL Digital)
& $FirebaseBin use default

# Build (Landing)
Write-Host "🚧 Compilando Landing (Build)..." -ForegroundColor Yellow
pnpm --filter landing-web build
if ($LASTEXITCODE -ne 0) {
    Write-Error "❌ Error en el Build. Abortando despliegue."
    exit 1
}

# Desplegar SOLO Landing
& $FirebaseBin deploy --only hosting:landing-web

Write-Host "`n✅ LANDING DESPLEGADA CORRECTAMENTE." -ForegroundColor Green


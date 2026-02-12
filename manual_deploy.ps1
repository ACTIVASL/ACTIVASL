$ErrorActionPreference = "Stop"

Write-Host "INICIANDO PROTOCOLO DE DESPLIEGUE MANUAL (ACTIVA SL DIGITAL)" -ForegroundColor Cyan
Write-Host "----------------------------------------------------------------" -ForegroundColor Gray

# 1. Definir rutas
$ProjectRoot = "$PSScriptRoot"
$FirebaseBin = "$ProjectRoot\apps\landing-web\node_modules\.bin\firebase.cmd"

# 2. Verificar binario
if (-not (Test-Path $FirebaseBin)) {
    Write-Error "No encuentro el binario de Firebase en: $FirebaseBin"
    Write-Host "Si falla, intenta instalar firebase-tools en la carpeta apps\landing-web" -ForegroundColor Yellow
    exit 1
}

# 3. Limpiar sesiones previas (Zombie killer)
Write-Host "Eliminando sesiones zombies..." -ForegroundColor Yellow
try {
    & $FirebaseBin logout
}
catch {
    Write-Host "   (No había sesión activa o falló el logout, continuamos)" -ForegroundColor Gray
}

# 4. Login Interactivo (El usuario debe autorizar)
Write-Host " "
Write-Host "AUTENTICACIÓN REQUERIDA" -ForegroundColor Yellow
Write-Host "   Se abrirá una ventana. Si falla, copia el enlace manualmente." -ForegroundColor Gray
Write-Host "   IMPORTANTE: Usa la cuenta 'info@activamusicoterapia.com'" -ForegroundColor White

& $FirebaseBin login --no-localhost

# 5. Despliegue
Write-Host " "
Write-Host "DESPLEGANDO A PRODUCCIÓN (Target: landing-web)..." -ForegroundColor Green
& $FirebaseBin deploy --only hosting:landing-web

Write-Host " "
Write-Host "PROCESO FINALIZADO." -ForegroundColor Cyan
Write-Host "   Si ves [Deploy complete!], todo ha salido bien."

Read-Host "Presiona ENTER para salir"

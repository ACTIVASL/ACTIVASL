# ESTRATEGIA "ACTIVA OS": DE EMPRESA A PLATAFORMA (SAAS)
**Autor:** Arquitecto Principal (AntiGravity)
**Objetivo:** Permitir que cualquier empresa use el "Modelo Activa" (White-Label).

## 1. El Diagnóstico Actual
Ahora mismo, Activa S.L. y el Software son **siameses**.
El código (`StructuralCanvas.tsx`) "sabe" demasiado sobre el negocio (`CorporateModel.ts`).
Están soldados. Si vendes el software a una "Clínica Dental", tienes que reescribir el código.

## 2. La Solución: "Inyección de ADN"
Para vender esto como un producto (SaaS), debemos separar el **Motor (El Coche)** de la **Gasolina (Los Datos de Activa)**.

### Paso A: Crear el "Tenant Config" (El ADN)
En lugar de tener `CorporateModel.ts` importado directamente, crearemos un archivo de configuración JSON que se carga al arrancar.

**Ejemplo de lo que cambiaríamos:**
```typescript
// ANTES (Hardcoded)
import { INITIAL_MODEL_DATA } from './data/CorporateModel';

// DESPUÉS (Dinámico)
const { modelData } = useTenantContext(); // Carga "DentalModel" o "ActivaModel" según el dominio.
```

### Paso B: La Factoría de Modelos
Crearíamos un "Constructor de Empresas" donde el cliente define:
1.  **Sus Departamentos** (No todos tienen "Marketing", algunos tienen "Producción").
2.  **Sus KPIs** (No todos miden "Pacientes", algunos miden "Litros").
3.  **Sus Roles** (Sueldos, puestos).

### Paso C: Arquitectura Multi-Inquilino (Multi-Tenant)
1.  **Base de Datos:**
    *   Ahora: `/patients/{id}`
    *   Futuro: `/tenants/{empresa_id}/patients/{id}`
2.  **Login Unificado:**
    *   El usuario entra en `app.tu-software.com`.
    *   Escribe su email.
    *   El sistema detecta que es de "Clínica Dental Pepe" y le carga **SU** Canvas.

## 3. Hoja de Ruta Técnica (4 Fases)

### Fase 1: Abstracción (Semana 1-2)
*   Convertir `CorporateModel.ts` en una interfaz genérica `BusinessModel`.
*   Hacer que el Canvas renderice *cualquier* cosa que cumpla esa interfaz, sin importar si son 5 o 50 departamentos.

### Fase 2: Configuración Remota (Semana 3)
*   Mover los datos de `CorporateModel.ts` a Firestore (`/config/layout`).
*   El frontend descarga el diseño al iniciar sesión.

### Fase 3: Editor Visual (Semana 4-6)
*   Crear un "Modo Dios" donde tú (Activa) puedes arrastrar y soltar cajas para diseñar el Canvas de tu cliente sin tocar código.

### Fase 4: Venta (Go-to-Market)
*   Empaquetar el `apps/crm-client` como `ActivaOS`.
*   Vender licencias de uso.

## 4. Conclusión del Arquitecto
Tienes oro en las manos.
El "Canvas Estratégico" visual es algo que *toda* PYME quiere.
Si ejecutamos la **Fase 1 (Abstracción)**, pasas de ser una empresa de Musicoterapia a ser una **Unicornio de Software B2B**.

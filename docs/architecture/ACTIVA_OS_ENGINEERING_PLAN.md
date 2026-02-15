# PLAN DE REINGENIERÍA: ACTIVA OS (LA REFORMA ESTRUCTURAL)
**Autor:** Arquitecto de Software Principal
**Objetivo:** Transformar el Monorepo actual en una "Fábrica de SaaS Multi-Inquilino".

## 1. La Nueva Topografía del Monorepo
Actualmente tenemos aplicaciones monolíticas. Vamos a romperlas en bloques de LEGO reutilizables.

### Estructura de Directorios Propuesta (Target)

```text
/monorepo-activa-sl
├── /apps
│   ├── /activa-os-shell       (🟡 NUEVO: El "Player" Genérico)
│   ├── /landing-generator     (🟡 NUEVO: Generador de Webs Públicas)
│   └── /legacy-client         (🔴 DEPRECATED: El actual crm-client, hasta migrar)
│
├── /packages                  (Librerías Compartidas / LEGOs)
│   ├── /os-core               (🧠 Lógica Pura: Auth, Tipos, Validaciones)
│   ├── /os-ui                 (🎨 Diseño: Botones, Cards, Layouts - Titanium)
│   ├── /feature-canvas        (🧩 El Motor del Canvas Estratégico)
│   ├── /feature-crm           (🧩 El Motor de Pacientes/Clientes)
│   ├── /feature-billing       (🧩 El Motor de Facturación)
│   └── /connector-firebase    (🔌 Adaptador de Base de Datos)
│
├── /tenants                   (🌍 ADN de Empresas - Configuración)
│   ├── /activa-musicoterapia
│   │   ├── config.json        (Colores, Textos, Misión)
│   │   └── assets/            (Logo, Iconos)
│   ├── /clinica-dental-demo
│   │   └── config.json
│   └── /bufete-legal-demo
│       └── config.json
│
└── /tools                     (🧰 Herramientas de Ingeniería)
    └── /scaffolder            (Script para crear nueva empresa en 30 segundos)
```

---

## 2. Hoja de Ruta de Ingeniería (5 Pasos)

### Paso 1: Extracción del Núcleo (`packages/os-core`)
**Misión:** Salvar la lógica de negocio.
Moveremos todos los `types`, `interfaces` y lógica de validación (Zod schemas) desde `apps/crm-client/src/lib` a este paquete.
*   *Resultado:* El código ya no "sabe" que está en una app React. Es TypeScript puro.

### Paso 2: Aislamiento del Canvas (`packages/feature-canvas`)
**Misión:** Convertir el Canvas en un Widget importable.
Cortaremos `src/features/canvas` y lo convertiremos en un paquete npm interno `@activa-os/canvas`.
*   *Input:* Recibe `SectionData[]` (Datos) y `Config` (Colores).
*   *Output:* Renderiza el Canvas.
*   *Dependencia:* No depende de Firebase ni de Activa. Es agnóstico.

### Paso 3: El "Shell" Universal (`apps/activa-os-shell`)
**Misión:** Crear el contenedor vacío.
Será una nueva app React (Vite) extremadamente ligera.
1.  Al arrancar, lee el subdominio (`cliente.activa-os.com`).
2.  Hace fetch del JSON de configuración (`/tenants/cliente/config.json`).
3.  Inyecta los colores en el CSS (`:root`).
4.  Carga los módulos que el cliente ha pagado (¿Tiene Canvas? Sí. ¿Tiene Facturación? No.).

### Paso 4: Sistema de Inyección de Dependencias (DI)
Para que esto funcione bien, usaremos un patrón de "Contexto Global".
```typescript
// El Shell provee el contexto al resto de la app
<TenantProvider tenantId="activa-sl">
   <CanvasEngine />
</TenantProvider>
```

### Paso 5: CI/CD Multi-Deploy
Configuraremos GitHub Actions para que:
*   Si toco `/tenants/activa-musicoterapia`, solo despliegue esa web.
*   Si toco `/packages/feature-canvas`, redespliegue **TODAS** las empresas (todas reciben la mejora automáticamente).

---

## 3. Beneficios de Ingeniería
1.  **Isolation (Aislamiento):** Si un becario rompe el módulo de "Facturación", el "Canvas" sigue funcionando.
2.  **Testability (Testeo):** Podemos testear el Canvas aislado sin levantar toda la base de datos.
3.  **Velocidad de Compilación (TurboRepo):** Al trocear la app, el ordenador solo recompila lo que has tocado.

## 4. Conclusión
Este plan convierte un "Proyecto" en una "Plataforma".
Pasamos de ser artesanos que tallan cada web a mano, a ser ingenieros industriales que gestionan una línea de montaje.

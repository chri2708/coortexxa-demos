# COORTEXXA — Demos comerciales

Monorepo de demos comerciales premium de **COORTEXXA**, plataforma SaaS modular para operaciones
comerciales de banca, seguros, Isapre, AFP, salud y fuerzas de venta en terreno.

Este repo es exclusivamente para demos de venta: **sin backend real, sin Firebase, sin datos
reales**. Todo el contenido (empresas, ejecutivos, ventas, solicitudes) es ficticio.

## Estructura

```
landing/           Landing comercial (puerto 5174)
command-center/     Dashboard ejecutivo genérico (puerto 5173)
demo-bank/          Demo navegable COORTEXXA Bank (puerto 5175)
demo-sales/         Demo navegable COORTEXXA Sales (puerto 5176)
demo-health/        Demo navegable COORTEXXA Health (puerto 5177)
packages/theme/     Identidad visual: colores, tipografía, logo
packages/ui-kit/    Componentes compartidos (Button, Card, Table, DashboardShell, DemoVerticalShell, etc.)
packages/mock-data/ Datos ficticios compartidos (empresas, ejecutivos, KPIs)
```

## Levantar los demos

Cada app corre en un puerto fijo para que los links entre demos (ej. el botón "Ver Command Center"
de la landing) siempre apunten al mismo lugar.

```bash
npm install                # una sola vez, instala todo el workspace

npm run dev:landing        # http://localhost:5174
npm run dev:command-center # http://localhost:5173
npm run dev:bank           # http://localhost:5175
npm run dev:sales          # http://localhost:5176
npm run dev:health         # http://localhost:5177

npm run dev:all            # levanta los cinco a la vez (sin dependencias nuevas, ver nota abajo)
```

`dev:all` usa backgrounding nativo de shell (`&` + `wait`), sin ninguna dependencia adicional.
Si más adelante se necesita salida más ordenada por proceso (logs con prefijo y color), la
alternativa es agregar `concurrently` — ver la sección de decisiones de Fase 3.5 en la memoria del
proyecto para la evaluación completa (por qué, riesgo, alternativa, cómo desinstalar).

## Build de producción

```bash
npm run build:all          # compila command-center, landing, demo-bank, demo-sales y demo-health en orden
```

## Orden recomendado para presentar a un gerente

1. **Landing** (`localhost:5174`) — contexto comercial: problema, plataforma, verticales, y la
   sección "Demos disponibles ahora" con acceso directo a los demos reales.
2. **Command Center** (`localhost:5173`, se abre desde la landing) — el "wow" ejecutivo: KPIs,
   pipeline, ranking, todo en una sola pantalla. También enlaza a Bank/Sales/Health desde su
   sección "Otros demos".
3. **Demo Bank** (`localhost:5175`, se abre desde la landing) — el flujo operativo regulado:
   pipeline → nueva solicitud → detalle (documentos, firma simulada, workflow Ejecutivo →
   Supervisor → BackOffice) → simulador de ahorro POS. Usar el selector de rol para mostrar las
   distintas vistas (Ejecutivo/Supervisor/Gerente).
4. **Demo Sales** (`localhost:5176`, se abre desde la landing) — el caso de fuerza de venta en
   terreno: agenda de visitas → check-in simulado → formulario de visita → fotos simuladas →
   pedido → ranking y bonos → cobertura territorial. Usar el selector de rol para mostrar
   Vendedor/Supervisor/Gerente.
5. **Demo Health** (`localhost:5177`, se abre desde la landing) — afiliaciones y convenios de
   salud: bandeja de solicitudes → nueva solicitud → detalle (timeline, documentos, revisión) →
   operaciones (validación de documentos y activación). Usar el selector de rol para mostrar
   Ejecutivo/Supervisor/Operaciones/Gerente.

Bank, Sales y Health juntos cubren tres grandes casos de venta: regulado/documental,
operativo/terreno y afiliación/salud, todos sobre la misma base de plataforma.

## COORTEXXA Brand System

Logo, isotipo, favicon y guía de uso completos en [`docs/brand-guide.md`](docs/brand-guide.md).
Preview visual en vivo: sección "Sistema de marca COORTEXXA" al final de la landing
(`localhost:5174`). Componente reutilizable: `<Logo />` desde `@coortexxa/ui-kit`.

## Reglas del proyecto

- No se toca el repo productivo (`crm-axis-banco-web`, cliente BCI real).
- No hay backend, Firebase, ni persistencia — todo el estado interactivo vive en memoria de React
  y se reinicia al recargar la página.
- No se usan datos, marcas, logos ni nombres de bancos/aseguradoras reales.
- MCPs: solo fuentes oficiales verificadas. Ver memoria del proyecto para el detalle de qué está
  instalado, pendiente, o descartado por riesgo.

# COORTEXXA — Brand System

Guía de marca para el sistema de demos comerciales de COORTEXXA. Todos los assets son propios del
proyecto — sin bancos de íconos, sin plantillas, sin ningún elemento derivado de una marca real.

## Concepto del logo definitivo: "Nexus Inteligente"

El isotipo son cuatro brazos redondeados en gradiente azul→violeta que se cruzan en un punto
central, formando una **X**:

- Referencia directa a la doble **X** de **COORTEXXA** — el mismo hilo conductor de marca desde
  Fase 1, ahora resuelto con una forma más dinámica y con color.
- Los cuatro brazos que convergen en un punto representan **conexión**: datos, procesos e
  infraestructura que se integran en un solo lugar — coherente con el posicionamiento de "Nexus
  Inteligente" (conexiones que integran inteligencia, datos e infraestructura).
- El gradiente azul eléctrico → violeta enterprise transmite tecnología y valor premium sin caer en
  degradados excesivos: es un gradiente de dos puntos, simple y controlado.
- Orientación diagonal (no como una cruz recta) deliberada: una versión "derecha" del mismo mark se
  probó primero y se descartó por parecer una cruz médica — la orientación en X la diferencia con
  claridad de ese símbolo prohibido.

**Origen de esta decisión:** en la Fase 6 se formalizó un mark temporal (cruce de dos barras
blancas sobre badge morado sólido) para tener una identidad funcional mientras se definía el logo
real. En la Fase 6.5 se generaron 5 propuestas adicionales por código (SVG a mano) que no
alcanzaron el nivel profesional necesario. El usuario aprobó una exploración visual externa
("Nexus Inteligente", opción 1 de un board de 3 conceptos) y esta fase (6.6) la adopta como
identidad **definitiva**, reemplazando el mark temporal en todo el monorepo.

**Nota técnica importante:** el archivo de referencia aprobado es una imagen (mockup/board), no un
archivo vectorial. Los SVG de esta fase son una **vectorización aproximada, hecha a mano dentro del
repo**, del concepto visual de esa referencia — reproducen la idea (cuatro brazos redondeados en
gradiente azul-violeta formando una X) pero no son un trazado pixel-perfecto del archivo original.
Si se necesita fidelidad exacta a la referencia, se recomienda vectorizarlo con una herramienta de
diseño real (Figma/Illustrator) a partir de la imagen fuente.

## Variantes disponibles

| Archivo | Uso |
|---|---|
| `packages/theme/src/assets/coortexxa-mark.svg` | Isotipo solo (gradiente, sin fondo) — sidebar, tarjetas, avatar de producto |
| `packages/theme/src/assets/coortexxa-mark-dark.svg` | Mismo isotipo — el gradiente funciona igual sobre fondo claro u oscuro, se mantiene el archivo separado por convención de nombres del sistema |
| `packages/theme/src/assets/coortexxa-logo-horizontal.svg` | Isotipo + wordmark, texto oscuro (`COORTE` navy + `XXA` acento violeta) — fondo claro |
| `packages/theme/src/assets/coortexxa-logo-horizontal-dark.svg` | Isotipo + wordmark, texto blanco (`COORTE` blanco + `XXA` violeta claro) — fondo oscuro |
| `packages/theme/src/assets/favicon.svg` | Isotipo sobre badge navy profundo (`#0B1020`) redondeado — para favicon, copiado a `public/favicon.svg` de cada app |
| `packages/theme/src/assets/app-icon.svg` | = `favicon.svg`, usado como `apple-touch-icon` |

Para uso dentro de las apps React del monorepo, no se importan estos archivos como `<img>` — se usa
el componente `<Logo />` de `@coortexxa/ui-kit`, que dibuja el mismo isotipo como SVG inline con la
misma geometría y gradiente (permite controlar tono/tamaño con props sin depender de un archivo
externo). Los SVG estáticos existen para uso fuera del código (documentación, kit comercial,
favicon/app-icon de cada app).

## Componente `Logo`

```tsx
import { Logo } from '@coortexxa/ui-kit'

<Logo variant="horizontal" tone="default" size="md" />   // isotipo + wordmark, fondo claro
<Logo variant="horizontal" tone="light" size="md" />     // isotipo + wordmark, fondo oscuro
<Logo variant="mark" size="sm" aria-label="COORTEXXA" /> // solo isotipo
```

- `variant`: `"horizontal"` (isotipo + wordmark) o `"mark"` (solo isotipo).
- `tone`: `"default"` (wordmark en navy `#0b1020`, fondo claro) o `"light"` (wordmark en blanco,
  fondo oscuro). El isotipo en sí no cambia con `tone` — su gradiente funciona en ambos fondos.
- `size`: `"sm"` (20px) / `"md"` (24px) / `"lg"` (32px) — tamaño del isotipo.
- `showWordmark`: fuerza mostrar/ocultar el wordmark aunque `variant` sea `"horizontal"`.
- No depende de `react-router-dom` ni de ninguna app vertical — vive en `packages/ui-kit`, 100%
  agnóstico de router, igual que el resto de `ui-kit`.
- El gradiente se define con un `id` único por instancia (`useId` de React) para que renderizar el
  logo varias veces en la misma página (ej. header + footer) no genere colisiones de `id` en el DOM.

## Cuándo usar horizontal vs. isotipo

- **Horizontal** (`variant="horizontal"`): headers, sidebars, footers — cualquier lugar donde el
  nombre completo "COORTEXXA" deba ser legible junto al isotipo. Es la versión por defecto.
- **Isotipo solo** (`variant="mark"`): favicon, app icon, avatar, espacios muy angostos (ej. una
  celda de tabla), o cuando el nombre ya aparece en otro lugar visible de la misma pantalla.

## Tamaño mínimo legible

El isotipo se mantiene legible desde **16px** (tamaño típico de favicon en pestaña de navegador) —
verificado visualmente en esta fase. No usar el isotipo por debajo de ese tamaño. El wordmark no
debería usarse por debajo del tamaño `"sm"` (20px de isotipo / texto ~14px).

## Uso en fondo claro y oscuro

- Fondo claro (`--color-surface`, blanco): usar `tone="default"` — wordmark `COORTE` en `#0b1020`,
  `XXA` en `#6d5ce0`.
- Fondo oscuro (`--color-surface-sidebar`, navy): usar `tone="light"` — wordmark `COORTE` en
  blanco, `XXA` en `#a996ff` (violeta más claro, para mantener contraste sobre navy).
- El isotipo (gradiente azul→violeta) no necesita variante de color propia: se probó visualmente
  sobre fondo blanco y sobre navy oscuro y en ambos casos mantiene buen contraste.

## Usos incorrectos

- No enderezar los brazos del isotipo a una orientación de cruz recta (0°/90°/180°/270°) — se
  probó explícitamente y se descartó por parecer una cruz médica. La orientación en X (45°) es la
  correcta y la única aprobada.
- No aplicar más de un gradiente o colores adicionales al isotipo — mantener exactamente los dos
  tonos aprobados (azul `#2f6bff` → violeta `#8b5cf6`).
- No estirar ni deformar el isotipo (debe mantenerse dentro de un contenedor cuadrado 1:1).
- No usar el isotipo solo cuando el contexto exige claridad total del nombre (ej. primer contacto
  con un cliente nuevo, portada de una presentación) — ahí siempre usar la versión horizontal.
- No recrear el isotipo a mano en otra herramienta partiendo de una captura de pantalla — usar
  siempre los archivos fuente de `packages/theme/src/assets/`.
- No agregar el tagline "Intelligent Software Infrastructure" al lockup principal del producto —
  queda como posible lockup secundario/documental, no como parte obligatoria del logo de uso diario.

## Paleta

| Color | Valor | Uso |
|---|---|---|
| Azul eléctrico | `#2f6bff` | Extremo inicial del gradiente del isotipo |
| Violeta enterprise | `#8b5cf6` | Extremo final del gradiente del isotipo |
| Navy profundo | `#0b1020` | Badge de favicon/app-icon, wordmark sobre fondo claro |
| Acento violeta (wordmark) | `#6d5ce0` (claro) / `#a996ff` (sobre fondo oscuro) | Porción "XXA" del wordmark |
| Blanco | `#ffffff` | Wordmark sobre fondo oscuro |

Los tokens de UI existentes en `packages/theme/src/tokens.css` (`--color-brand-500/600` morado
sólido, usado en botones primarios y estados activos de navegación en toda la app) **no se
modificaron** en esta fase — el gradiente del logo es una paleta propia del isotipo, deliberadamente
separada de los colores planos de la interfaz, para no arriesgar una recoloración de toda la app
fuera del alcance de esta fase.

## Tipografía

Inter (autohospedada vía `@fontsource/inter`, ver Fase 1). El wordmark usa Inter Bold (700) con
`letter-spacing` ajustado.

## Limitación conocida (documentada, aceptada)

1. Los archivos SVG estáticos (`coortexxa-logo-horizontal*.svg`) usan un elemento `<text>` para el
   wordmark, no un trazo vectorizado (paths) — igual limitación que en Fase 6, aceptada por la
   misma razón (no instalar herramientas solo para convertir texto a curvas).
2. El isotipo es una **vectorización aproximada** de una referencia visual (imagen/mockup), hecha a
   mano en SVG dentro del repo — no una copia exacta del archivo de diseño original. La geometría
   (curvas de los cuatro brazos, ángulo exacto, proporciones) es una interpretación razonable, no un
   trazado milimétrico.

## Nota de origen

El concepto "Nexus Inteligente" fue aprobado por el usuario a partir de un board visual generado
fuera de este flujo de código. La vectorización a SVG e integración en el monorepo fue realizada
dentro de este proyecto. No se usó ninguna marca, logo, plantilla ni activo de terceros como base.

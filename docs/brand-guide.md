# COORTEXXA — Brand System

Guía básica de marca para el sistema de demos comerciales de COORTEXXA. Todos los assets son
propios del proyecto, creados en SVG a mano dentro del repo — sin herramientas de diseño externas,
sin bancos de íconos, sin ningún elemento derivado de una marca real.

## Concepto del logo

El isotipo es el cruce de dos barras redondeadas dentro de un cuadrado con esquinas suaves:

- Referencia directa a la doble **X** de **COORTEXXA**.
- El cruce también se lee como flujos que se cruzan y se conectan dentro de una plataforma
  modular — coherente con el posicionamiento de producto (formularios, workflow, documentos y
  KPI que atraviesan distintos roles y verticales).
- Geometría simple y monograma abstracto, deliberadamente sin gradientes ni detalles finos, para
  que se mantenga nítido en tamaños chicos (favicon, ícono de sidebar).

**Decisión de esta fase:** se formalizó el mark que ya estaba en uso desde Fase 1 (no se rediseñó
desde cero) — ya cumplía los criterios de geometría simple/monograma abstracto y ya estaba validado
visualmente en cinco demos en producción de venta. Rediseñarlo sin necesidad real habría arriesgado
consistencia de marca sin un beneficio claro.

**Evaluación honesta:** el mark es limpio, profesional y funciona bien a cualquier tamaño, en la
línea visual de monogramas geométricos simples (Stripe, Linear, Notion). No es un signo
extremadamente distintivo o memorable por sí solo — es un cuadrado morado con una cruz blanca, un
recurso común en el espacio SaaS/tech — pero cumple el objetivo de esta fase: una identidad
consistente, legible y de aspecto enterprise para vender la plataforma. Si más adelante se necesita
un mark con más personalidad, ese es un proyecto de diseño aparte (ver "Próximos pasos" en el README).

## Variantes disponibles

| Archivo | Uso |
|---|---|
| `packages/theme/src/assets/coortexxa-mark.svg` | Isotipo solo, badge cuadrado — favicon, app icon, avatar de producto, ícono en sidebar/tarjetas |
| `packages/theme/src/assets/coortexxa-mark-dark.svg` | Isotipo monocromático blanco, sin fondo — para superficies oscuras o de color donde el badge morado no tenga contraste |
| `packages/theme/src/assets/coortexxa-logo-horizontal.svg` | Isotipo + wordmark, texto oscuro — fondo claro |
| `packages/theme/src/assets/coortexxa-logo-horizontal-dark.svg` | Isotipo + wordmark, texto blanco — fondo oscuro |
| `packages/theme/src/assets/favicon.svg` | = `coortexxa-mark.svg`, copiado a `public/favicon.svg` de cada app |
| `packages/theme/src/assets/app-icon.svg` | = `coortexxa-mark.svg`, usado como `apple-touch-icon` |

Para uso dentro de las apps React del monorepo, no se importan estos archivos como `<img>` — se usa
el componente `<Logo />` de `@coortexxa/ui-kit`, que dibuja el mismo mark como SVG inline (permite
controlar color/tamaño con props sin depender de un archivo externo). Los SVG estáticos existen para
uso fuera del código (documentación, kit comercial, herramientas de diseño externas si se necesitan
más adelante).

## Componente `Logo`

```tsx
import { Logo } from '@coortexxa/ui-kit'

<Logo variant="horizontal" tone="default" size="md" />   // isotipo + wordmark, fondo claro
<Logo variant="horizontal" tone="light" size="md" />     // isotipo + wordmark, fondo oscuro
<Logo variant="mark" size="sm" aria-label="COORTEXXA" /> // solo isotipo
```

- `variant`: `"horizontal"` (isotipo + wordmark) o `"mark"` (solo isotipo).
- `tone`: `"default"` (texto oscuro, fondo claro) o `"light"` (texto blanco, fondo oscuro).
- `size`: `"sm"` (20px) / `"md"` (24px) / `"lg"` (32px) — tamaño del isotipo.
- `showWordmark`: fuerza mostrar/ocultar el wordmark aunque `variant` sea `"horizontal"`.
- No depende de `react-router-dom` ni de ninguna app vertical — vive en `packages/ui-kit`, 100%
  agnóstico de router, igual que el resto de `ui-kit`.

## Cuándo usar horizontal vs. isotipo

- **Horizontal** (`variant="horizontal"`): headers, sidebars, footers — cualquier lugar donde el
  nombre completo "COORTEXXA" deba ser legible junto al isotipo. Es la versión por defecto.
- **Isotipo solo** (`variant="mark"`): favicon, app icon, avatar, espacios muy angostos (ej. una
  celda de tabla o un badge), o cuando el nombre ya aparece en otro lugar visible de la misma
  pantalla y repetirlo sería redundante.

## Tamaño mínimo legible

El isotipo se mantiene legible desde **16px** (tamaño típico de favicon en pestaña de navegador).
No usar el isotipo por debajo de ese tamaño. El wordmark no debería usarse por debajo del tamaño
`"sm"` (20px de isotipo / texto ~14px) porque el tracking ajustado del texto pierde legibilidad.

## Uso en fondo claro y oscuro

- Fondo claro (`--color-surface`, blanco): usar `tone="default"` — wordmark en `#10121a` (ink-900).
- Fondo oscuro (`--color-surface-sidebar`, navy): usar `tone="light"` — wordmark en blanco.
- El isotipo (badge morado + cruz blanca) funciona igual en ambos casos porque es un badge sólido
  con su propio fondo — no requiere variante de color propia salvo el caso especial de
  `coortexxa-mark-dark.svg` (monocromático, sin badge) para superficies de color o texturizadas.

## Usos incorrectos

- No aplicar gradientes, sombras duras, o efectos 3D sobre el isotipo.
- No estirar ni deformar el isotipo (debe mantenerse cuadrado, proporción 1:1).
- No cambiar el color del badge morado (`#4a3dd1`) por otro color de marca.
- No usar el isotipo solo cuando el contexto exige claridad total del nombre (ej. primer contacto
  con un cliente nuevo, portada de una presentación) — ahí siempre usar la versión horizontal.
- No recrear el isotipo a mano en otra herramienta partiendo de una captura de pantalla — usar
  siempre los archivos fuente de `packages/theme/src/assets/`.

## Paleta base

Tokens definidos en `packages/theme/src/tokens.css` (sin cambios en esta fase):

| Token | Valor | Uso |
|---|---|---|
| `--color-brand-500` / `600` | `#5b4fe0` / `#4a3dd1` | Color de marca — botones primarios, isotipo |
| `--color-ink-900` | `#10121a` | Texto principal, wordmark en fondo claro |
| `--color-surface-sidebar` | `#14152b` | Fondo oscuro (sidebar), donde va el wordmark blanco |
| `--color-success/warning/danger/info-500` | ver tokens | Estados (badges), no se usan en el logo |

## Tipografía

Inter (autohospedada vía `@fontsource/inter`, ver Fase 1). El wordmark usa Inter Semibold (600)
con `letter-spacing` ajustado (`tracking-tight` / `-0.3` en los SVG estáticos).

## Limitación conocida (documentada, aceptada)

Los archivos SVG estáticos (`coortexxa-logo-horizontal*.svg`) usan un elemento `<text>` para el
wordmark, no un trazo vectorizado (paths). Esto significa que si se abren fuera de un navegador —
por ejemplo en una herramienta de diseño que no tenga Inter instalada — el texto puede caer a la
tipografía del sistema en vez de Inter. Dentro de las apps del monorepo esto no es un problema
porque Inter ya está cargada. Se aceptó esta limitación para no instalar ninguna herramienta nueva
solo para convertir texto a curvas; si se necesita un archivo 100% portable para imprenta o un
tercero, conviene vectorizar el texto con una herramienta de diseño en una fase futura.

## Nota de origen

Todos los assets de esta guía son creados específicamente para el demo comercial de COORTEXXA. No
se usó ninguna marca, logo, plantilla ni activo de terceros como base.

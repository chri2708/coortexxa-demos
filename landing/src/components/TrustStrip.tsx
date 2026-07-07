const badges = [
  'Pensado para fuerzas de venta B2B',
  'Multi vertical',
  'Diseño modular',
  'Preparado para operación en terreno',
  'Dashboards y ranking por rol',
  'Flujos adaptables por industria',
]

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface-subtle py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {badges.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-700"
            >
              {label}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink-300">
          Datos y flujos de demostración — arquitectura pensada para operación real, sin backend
          productivo activo todavía.
        </p>
      </div>
    </section>
  )
}

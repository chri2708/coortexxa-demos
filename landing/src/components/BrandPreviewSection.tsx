import { Logo } from '@coortexxa/ui-kit'

const sizes = ['sm', 'md', 'lg'] as const

export function BrandPreviewSection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Sistema de marca COORTEXXA
          </h2>
          <p className="mt-4 text-ink-500">
            Isotipo y wordmark propios, en SVG, listos para usarse en cualquier superficie del
            producto. Detalle completo en <code className="rounded bg-surface-subtle px-1.5 py-0.5 text-sm">docs/brand-guide.md</code>.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-wide text-ink-500">Fondo claro</p>
            <Logo variant="horizontal" tone="default" size="lg" />
          </div>
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface-sidebar p-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-wide text-ink-300">Fondo oscuro</p>
            <Logo variant="horizontal" tone="light" size="lg" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-wide text-ink-500">Isotipo solo</p>
            <div className="flex items-center gap-6">
              <Logo variant="mark" size="lg" aria-label="Isotipo COORTEXXA" />
              <Logo variant="mark" size="md" aria-label="Isotipo COORTEXXA" />
              <Logo variant="mark" size="sm" aria-label="Isotipo COORTEXXA" />
            </div>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-wide text-ink-500">Escalas horizontal (sm / md / lg)</p>
            <div className="flex flex-col items-start gap-4">
              {sizes.map((size) => (
                <Logo key={size} variant="horizontal" tone="default" size={size} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

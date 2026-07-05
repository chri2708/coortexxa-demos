import { ArrowRight } from 'lucide-react'
import { Button } from '@coortexxa/ui-kit'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-brand-100)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-10">
        <span className="inline-flex items-center rounded-full border border-border bg-surface-subtle px-3 py-1 text-xs font-medium text-ink-500">
          Plataforma SaaS enterprise · Modular por vertical
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
          La plataforma modular para operaciones comerciales inteligentes
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-ink-500">
          COORTEXXA centraliza formularios inteligentes, documentos, firma, workflow, KPI y
          dashboards por rol para equipos comerciales regulados y fuerzas de venta en terreno.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contacto">
            <Button size="lg" className="gap-2">
              Solicitar demo <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#demos">
            <Button variant="secondary" size="lg">
              Ver demo ejecutiva
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

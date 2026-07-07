import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@coortexxa/ui-kit'
import { demoLinks } from '@/config/demoLinks'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-brand-100)_0%,transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-10">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-border bg-surface-subtle px-3 py-1 text-xs font-medium text-ink-500">
            Plataforma SaaS enterprise · Modular por vertical
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Diseñada desde terreno para equipos que venden en movimiento.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg text-ink-500 lg:mx-0 mx-auto">
            COORTEXXA transforma cada visita comercial en gestión, simulación, evidencia, ranking y
            resultado medible.
          </p>

          <p className="mt-4 text-sm font-medium italic text-brand-600">
            "Hecha para la calle. Diseñada para vender."
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#contacto">
              <Button size="lg" className="gap-2">
                Solicitar demo <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href={demoLinks.commandCenter} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="gap-2">
                Ingresar a plataforma <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

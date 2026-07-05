import { Clock3, EyeOff, FileWarning, Gauge, MessagesSquare, Route } from 'lucide-react'

const pains = [
  {
    icon: MessagesSquare,
    title: 'Ventas dispersas',
    description: 'Cotizaciones y ventas repartidas entre WhatsApp, correo y planillas Excel sueltas.',
  },
  {
    icon: FileWarning,
    title: 'Documentos incompletos',
    description: 'Formularios y respaldos que llegan incompletos o con errores desde terreno.',
  },
  {
    icon: Route,
    title: 'Falta de trazabilidad',
    description: 'Nadie puede reconstruir con certeza qué pasó con una venta ni cuándo.',
  },
  {
    icon: EyeOff,
    title: 'Supervisores sin visibilidad',
    description: 'Los supervisores se enteran de los problemas cuando ya es tarde para actuar.',
  },
  {
    icon: Gauge,
    title: 'Gerentes sin control operativo',
    description: 'Las decisiones se toman con reportes armados a mano, siempre atrasados.',
  },
  {
    icon: Clock3,
    title: 'Aprobación y firma lentas',
    description: 'Procesos de revisión y firma que dependen de cadenas de correos y esperas.',
  },
]

export function ProblemSection() {
  return (
    <section className="border-b border-border bg-surface-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            La operación comercial regulada no debería verse así
          </h2>
          <p className="mt-4 text-ink-500">
            Estos son los síntomas que vemos una y otra vez en bancos, aseguradoras, Isapres, AFP y
            equipos de venta en terreno.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-danger-100 text-danger-500">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

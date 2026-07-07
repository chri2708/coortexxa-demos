import { Calculator, FileCheck2, MapPin, Send, Trophy, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Visita al comercio',
    description: 'El ejecutivo llega a terreno con toda la operación comercial en el bolsillo.',
  },
  {
    icon: Calculator,
    title: 'Simula ahorro',
    description: 'Compara costo actual vs. propuesta COORTEXXA frente al cliente, en segundos.',
  },
  {
    icon: FileCheck2,
    title: 'Registra datos y documentos',
    description: 'Formulario, firma y evidencia quedan adjuntos a la venta desde el primer momento.',
  },
  {
    icon: Send,
    title: 'Envía la venta',
    description: 'La solicitud entra al workflow de aprobación sin pasar por correo ni planillas.',
  },
  {
    icon: TrendingUp,
    title: 'Sube en el ranking',
    description: 'Cada venta aprobada impacta la meta, el ranking y la competencia del equipo.',
  },
  {
    icon: Trophy,
    title: 'Cierra el mes con reconocimiento',
    description: 'El cierre mensual muestra resultados, ranking final y al ejecutivo destacado.',
  },
]

export function JourneySection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Cada visita comercial se convierte en una oportunidad medible
          </h2>
          <p className="mt-4 text-ink-500">
            Simula, registra, adjunta, envía y compite por la meta — todo dentro del mismo flujo.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="relative rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
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

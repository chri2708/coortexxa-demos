import { Calculator, CloudOff, FileCheck2, MapPin, RefreshCw, Send, Trophy, TrendingUp } from 'lucide-react'

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
    description:
      'Formulario, firma y evidencia quedan adjuntos a la venta desde el primer momento — incluso sin señal.',
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

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-brand-500 bg-brand-50 p-6 text-center sm:flex-row sm:text-left">
          <div className="flex shrink-0 items-center gap-1.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600">
              <CloudOff className="h-5 w-5" />
            </div>
            <RefreshCw className="h-4 w-4 text-brand-500" />
          </div>
          <div>
            <p className="font-semibold text-brand-700">Venta en terreno, incluso sin conexión.</p>
            <p className="mt-1 text-sm text-brand-700/80">
              Si el ejecutivo queda sin internet, COORTEXXA sigue trabajando: completa el formulario,
              guarda la venta pendiente y sincroniza automáticamente cuando vuelve la señal. Menos
              ventas perdidas, menos reproceso, menos dependencia de la cobertura del sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

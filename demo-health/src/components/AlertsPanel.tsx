import { generarAlertas } from '@/data/alertas'
import type { SolicitudHealth } from '@/data/solicitudes'

const dotClasses = {
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
} as const

export function AlertsPanel({ solicitudes }: { solicitudes: SolicitudHealth[] }) {
  const alertas = generarAlertas(solicitudes)

  if (alertas.length === 0) {
    return <p className="text-sm text-ink-500">Sin alertas operativas en este momento.</p>
  }

  return (
    <ul className="flex flex-col gap-3">
      {alertas.map((alerta) => (
        <li key={alerta.id} className="flex items-start gap-2.5">
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotClasses[alerta.severidad]}`} />
          <span className="text-sm text-ink-700">{alerta.texto}</span>
        </li>
      ))}
    </ul>
  )
}

import { Check } from 'lucide-react'
import type { EtapaWorkflow, EventoWorkflow } from '@/data/solicitudes'

const etapas: { value: EtapaWorkflow; label: string }[] = [
  { value: 'EJECUTIVO', label: 'Ejecutivo' },
  { value: 'SUPERVISOR', label: 'Supervisor' },
  { value: 'BACKOFFICE', label: 'BackOffice' },
]

const etapaLabel: Record<EtapaWorkflow, string> = {
  EJECUTIVO: 'Ejecutivo',
  SUPERVISOR: 'Supervisor',
  BACKOFFICE: 'BackOffice',
}

export function WorkflowStepper({
  etapaActual,
  historial,
}: {
  etapaActual: EtapaWorkflow
  historial: EventoWorkflow[]
}) {
  const indiceActual = etapas.findIndex((e) => e.value === etapaActual)

  return (
    <div>
      <div className="flex items-center">
        {etapas.map((etapa, index) => {
          const completada = index < indiceActual
          const activa = index === indiceActual
          return (
            <div key={etapa.value} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                    completada
                      ? 'bg-success-500 text-white'
                      : activa
                        ? 'bg-brand-500 text-white'
                        : 'bg-surface-subtle text-ink-300'
                  }`}
                >
                  {completada ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                <span className={`text-xs font-medium ${activa ? 'text-ink-900' : 'text-ink-500'}`}>
                  {etapa.label}
                </span>
              </div>
              {index < etapas.length - 1 && (
                <div className={`mx-2 h-0.5 flex-1 ${completada ? 'bg-success-500' : 'bg-border'}`} />
              )}
            </div>
          )
        })}
      </div>

      <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
        {historial.map((evento, index) => (
          <li key={index} className="flex items-start justify-between gap-3 text-sm">
            <span className="text-ink-700">
              <span className="font-medium text-ink-900">{etapaLabel[evento.etapa]}:</span> {evento.nota}
            </span>
            <span className="shrink-0 text-xs text-ink-500">{evento.fecha}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

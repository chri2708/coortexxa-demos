import { Stepper } from '@coortexxa/ui-kit'
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
      <Stepper steps={etapas.map((e) => ({ label: e.label }))} currentIndex={indiceActual} />

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

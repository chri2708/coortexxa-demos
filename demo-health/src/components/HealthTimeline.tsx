import { Stepper } from '@coortexxa/ui-kit'
import type { EstadoSolicitudHealth, EventoHistorialHealth } from '@/data/solicitudes'

const etapas = ['Ingresada', 'En revisión', 'Aprobada', 'Activada']

const indiceByEstado: Record<EstadoSolicitudHealth, number> = {
  BORRADOR: -1,
  INGRESADA: 0,
  EN_REVISION: 1,
  OBSERVADA: 1,
  APROBADA: 2,
  RECHAZADA: 1,
  ACTIVADA: 3,
}

export function HealthTimeline({
  estado,
  historial,
}: {
  estado: EstadoSolicitudHealth
  historial: EventoHistorialHealth[]
}) {
  return (
    <div>
      <Stepper steps={etapas.map((label) => ({ label }))} currentIndex={indiceByEstado[estado]} />

      <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
        {historial.map((evento, index) => (
          <li key={index} className="flex flex-col gap-0.5 text-sm sm:flex-row sm:items-start sm:justify-between sm:gap-3">
            <span className="text-ink-700">
              <span className="font-medium text-ink-900">{evento.etapa}:</span> {evento.nota}
            </span>
            <span className="shrink-0 text-xs text-ink-500">{evento.fecha}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

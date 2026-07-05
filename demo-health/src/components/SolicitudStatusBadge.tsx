import { StatusBadge } from '@coortexxa/ui-kit'
import type { EstadoSolicitudHealth } from '@/data/solicitudes'
import { estadoSolicitudLabel, estadoSolicitudTone } from '@/lib/format'

export function SolicitudStatusBadge({ estado }: { estado: EstadoSolicitudHealth }) {
  return <StatusBadge tone={estadoSolicitudTone[estado]}>{estadoSolicitudLabel[estado]}</StatusBadge>
}

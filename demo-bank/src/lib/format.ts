import type { StatusTone } from '@coortexxa/ui-kit'
import type { EstadoSolicitud } from '@/data/solicitudes'

export const estadoTone: Record<EstadoSolicitud, StatusTone> = {
  PENDIENTE: 'warning',
  EN_REVISION: 'info',
  APROBADA: 'success',
  RECHAZADA: 'danger',
}

export const estadoLabel: Record<EstadoSolicitud, string> = {
  PENDIENTE: 'Pendiente',
  EN_REVISION: 'En revisión',
  APROBADA: 'Aprobada',
  RECHAZADA: 'Rechazada',
}

export const money = (n: number) =>
  n === 0
    ? '—'
    : new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n)

import type { StatusTone } from '@coortexxa/ui-kit'
import type { EstadoSolicitudHealth, PrioridadSolicitud } from '@/data/solicitudes'
import type { EstadoDocumentoHealth } from '@/data/documentos'

export const estadoSolicitudTone: Record<EstadoSolicitudHealth, StatusTone> = {
  BORRADOR: 'neutral',
  INGRESADA: 'info',
  EN_REVISION: 'info',
  OBSERVADA: 'warning',
  APROBADA: 'success',
  RECHAZADA: 'danger',
  ACTIVADA: 'success',
}

export const estadoSolicitudLabel: Record<EstadoSolicitudHealth, string> = {
  BORRADOR: 'Borrador',
  INGRESADA: 'Ingresada',
  EN_REVISION: 'En revisión',
  OBSERVADA: 'Observada',
  APROBADA: 'Aprobada',
  RECHAZADA: 'Rechazada',
  ACTIVADA: 'Activada',
}

export const prioridadTone: Record<PrioridadSolicitud, StatusTone> = {
  ALTA: 'danger',
  MEDIA: 'warning',
  BAJA: 'neutral',
}

export const documentoEstadoTone: Record<EstadoDocumentoHealth, StatusTone> = {
  PENDIENTE: 'neutral',
  RECIBIDO: 'info',
  OBSERVADO: 'warning',
  VALIDADO: 'success',
}

export const documentoEstadoLabel: Record<EstadoDocumentoHealth, string> = {
  PENDIENTE: 'Pendiente',
  RECIBIDO: 'Recibido',
  OBSERVADO: 'Observado',
  VALIDADO: 'Validado',
}

export const money = (n: number) =>
  n === 0
    ? '—'
    : new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n)

import type { SolicitudHealth } from './solicitudes'

export interface AlertaHealth {
  id: string
  texto: string
  severidad: 'warning' | 'danger'
}

/** Alertas calculadas en vivo desde el estado de las solicitudes — no es una lista fija. */
export function generarAlertas(solicitudes: SolicitudHealth[]): AlertaHealth[] {
  const alertas: AlertaHealth[] = []

  const observadas = solicitudes.filter((s) => s.estado === 'OBSERVADA')
  if (observadas.length > 0) {
    alertas.push({
      id: 'observadas',
      texto: `${observadas.length} solicitud(es) observada(s) requieren corrección`,
      severidad: 'warning',
    })
  }

  const borradores = solicitudes.filter((s) => s.estado === 'BORRADOR')
  if (borradores.length > 0) {
    alertas.push({
      id: 'folios-pendientes',
      texto: `${borradores.length} folio(s) en borrador sin ingresar`,
      severidad: 'warning',
    })
  }

  const proximasActivar = solicitudes.filter((s) => s.estado === 'APROBADA')
  if (proximasActivar.length > 0) {
    alertas.push({
      id: 'proximas-activar',
      texto: `${proximasActivar.length} afiliación(es) aprobada(s) próxima(s) a activar`,
      severidad: 'warning',
    })
  }

  const slaExcedido = solicitudes.filter((s) => s.slaExcedido)
  if (slaExcedido.length > 0) {
    alertas.push({
      id: 'sla-excedido',
      texto: `${slaExcedido.length} solicitud(es) con SLA de revisión excedido`,
      severidad: 'danger',
    })
  }

  const documentosVencidos = solicitudes.filter((s) =>
    s.documentos.some((d) => d.fechaVencimiento && d.fechaVencimiento < '2026-07-05'),
  )
  if (documentosVencidos.length > 0) {
    alertas.push({
      id: 'documentos-vencidos',
      texto: `${documentosVencidos.length} solicitud(es) con documentos vencidos`,
      severidad: 'danger',
    })
  }

  return alertas
}

import type { StatusTone } from '@coortexxa/ui-kit'
import type { EstadoVisita } from '@/data/visitas'
import type { EstadoPedido } from '@/data/pedidos'

export const estadoVisitaTone: Record<EstadoVisita, StatusTone> = {
  PENDIENTE: 'neutral',
  EN_RUTA: 'info',
  CHECKIN: 'info',
  PEDIDO_ENVIADO: 'success',
  OBSERVADA: 'warning',
  CUMPLIDA: 'success',
}

export const estadoVisitaLabel: Record<EstadoVisita, string> = {
  PENDIENTE: 'Pendiente',
  EN_RUTA: 'En ruta',
  CHECKIN: 'Check-in realizado',
  PEDIDO_ENVIADO: 'Pedido enviado',
  OBSERVADA: 'Visita observada',
  CUMPLIDA: 'Cumplida',
}

export const estadoPedidoTone: Record<EstadoPedido, StatusTone> = {
  BORRADOR: 'neutral',
  ENVIADO: 'info',
  CONFIRMADO: 'success',
}

export const estadoPedidoLabel: Record<EstadoPedido, string> = {
  BORRADOR: 'Borrador',
  ENVIADO: 'Enviado',
  CONFIRMADO: 'Confirmado',
}

export const money = (n: number) =>
  n === 0
    ? '—'
    : new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n)

export type EstadoVenta = 'PENDIENTE' | 'EN_REVISION' | 'APROBADA' | 'RECHAZADA'

export interface Venta {
  id: string
  folio: string
  ejecutivoId: string
  empresaId: string
  producto: string
  monto: number
  estado: EstadoVenta
  fecha: string
}

export const ventas: Venta[] = [
  { id: 'v-1001', folio: 'F-100234', ejecutivoId: 'eje-1', empresaId: 'emp-1', producto: 'Tarjeta Platinum', monto: 1200000, estado: 'APROBADA', fecha: '2026-07-01' },
  { id: 'v-1002', folio: 'F-100235', ejecutivoId: 'eje-1', empresaId: 'emp-1', producto: 'Crédito Consumo', monto: 3500000, estado: 'EN_REVISION', fecha: '2026-07-02' },
  { id: 'v-1003', folio: 'F-100236', ejecutivoId: 'eje-2', empresaId: 'emp-1', producto: 'Cuenta Corriente', monto: 0, estado: 'PENDIENTE', fecha: '2026-07-02' },
  { id: 'v-1004', folio: 'F-100237', ejecutivoId: 'eje-3', empresaId: 'emp-2', producto: 'Seguro Vida', monto: 480000, estado: 'APROBADA', fecha: '2026-07-03' },
  { id: 'v-1005', folio: 'F-100238', ejecutivoId: 'eje-4', empresaId: 'emp-3', producto: 'Plan Salud Plus', monto: 210000, estado: 'RECHAZADA', fecha: '2026-07-03' },
  { id: 'v-1006', folio: 'F-100239', ejecutivoId: 'eje-5', empresaId: 'emp-4', producto: 'Ahorro Voluntario', monto: 950000, estado: 'EN_REVISION', fecha: '2026-07-04' },
]

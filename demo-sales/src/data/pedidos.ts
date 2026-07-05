export type EstadoPedido = 'BORRADOR' | 'ENVIADO' | 'CONFIRMADO'

export interface ItemPedido {
  productoId: string
  cantidad: number
}

export interface Pedido {
  id: string
  visitaId: string
  clienteId: string
  vendedorId: string
  items: ItemPedido[]
  montoTotal: number
  estado: EstadoPedido
  fecha: string
}

export const pedidosIniciales: Pedido[] = [
  {
    id: 'ped-1',
    visitaId: 'vis-1',
    clienteId: 'cli-1',
    vendedorId: 'eje-1',
    items: [
      { productoId: 'prod-1', cantidad: 24 },
      { productoId: 'prod-3', cantidad: 12 },
    ],
    montoTotal: 24 * 690 + 12 * 990,
    estado: 'CONFIRMADO',
    fecha: '2026-07-05',
  },
  {
    id: 'ped-2',
    visitaId: 'vis-2',
    clienteId: 'cli-2',
    vendedorId: 'eje-1',
    items: [{ productoId: 'prod-1', cantidad: 36 }],
    montoTotal: 36 * 690,
    estado: 'ENVIADO',
    fecha: '2026-07-05',
  },
  {
    id: 'ped-3',
    visitaId: 'vis-7',
    clienteId: 'cli-7',
    vendedorId: 'eje-4',
    items: [
      { productoId: 'prod-2', cantidad: 48 },
      { productoId: 'prod-5', cantidad: 12 },
    ],
    montoTotal: 48 * 490 + 12 * 1290,
    estado: 'CONFIRMADO',
    fecha: '2026-07-05',
  },
]

export interface MetaVendedor {
  vendedorId: string
  metaMensual: number
  ventasActuales: number
  bonoEstimado: number
  aceleradorFicticio: string
}

export const metasVendedores: MetaVendedor[] = [
  { vendedorId: 'eje-1', metaMensual: 12_000_000, ventasActuales: 13_400_000, bonoEstimado: 320_000, aceleradorFicticio: '1.4x sobre la meta' },
  { vendedorId: 'eje-2', metaMensual: 10_000_000, ventasActuales: 8_600_000, bonoEstimado: 120_000, aceleradorFicticio: 'Sin acelerador aún' },
  { vendedorId: 'eje-3', metaMensual: 9_000_000, ventasActuales: 9_450_000, bonoEstimado: 180_000, aceleradorFicticio: '1.1x sobre la meta' },
  { vendedorId: 'eje-4', metaMensual: 11_000_000, ventasActuales: 11_900_000, bonoEstimado: 250_000, aceleradorFicticio: '1.2x sobre la meta' },
  { vendedorId: 'eje-5', metaMensual: 8_000_000, ventasActuales: 5_200_000, bonoEstimado: 0, aceleradorFicticio: 'Sin acelerador aún' },
]

export interface KpiMensual {
  mes: string
  ventasTotales: number
  montoTotal: number
  tasaAprobacion: number
  ejecutivosActivos: number
}

export const kpisMensuales: KpiMensual[] = [
  { mes: 'Feb', ventasTotales: 812, montoTotal: 612_000_000, tasaAprobacion: 0.81, ejecutivosActivos: 320 },
  { mes: 'Mar', ventasTotales: 940, montoTotal: 705_000_000, tasaAprobacion: 0.83, ejecutivosActivos: 328 },
  { mes: 'Abr', ventasTotales: 887, montoTotal: 668_000_000, tasaAprobacion: 0.79, ejecutivosActivos: 331 },
  { mes: 'May', ventasTotales: 1024, montoTotal: 788_000_000, tasaAprobacion: 0.85, ejecutivosActivos: 340 },
  { mes: 'Jun', ventasTotales: 1180, montoTotal: 912_000_000, tasaAprobacion: 0.87, ejecutivosActivos: 358 },
  { mes: 'Jul', ventasTotales: 640, montoTotal: 498_000_000, tasaAprobacion: 0.88, ejecutivosActivos: 362 },
]

export const kpiActual = {
  ventasHoy: 47,
  montoHoy: 38_400_000,
  pendientesRevision: 12,
  slaPromedioHoras: 3.4,
}

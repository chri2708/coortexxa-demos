export interface MetaEjecutivoHealth {
  ejecutivoId: string
  metaMensual: number
  ingresadasMes: number
  bonoEstimado: number
}

/** Metas y bonos ficticios de ejemplo. */
export const metasEjecutivosHealth: MetaEjecutivoHealth[] = [
  { ejecutivoId: 'eje-1', metaMensual: 10, ingresadasMes: 9, bonoEstimado: 210000 },
  { ejecutivoId: 'eje-2', metaMensual: 8, ingresadasMes: 7, bonoEstimado: 150000 },
  { ejecutivoId: 'eje-3', metaMensual: 9, ingresadasMes: 6, bonoEstimado: 90000 },
  { ejecutivoId: 'eje-4', metaMensual: 7, ingresadasMes: 5, bonoEstimado: 60000 },
  { ejecutivoId: 'eje-5', metaMensual: 8, ingresadasMes: 4, bonoEstimado: 0 },
]

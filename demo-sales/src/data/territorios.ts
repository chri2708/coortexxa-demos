export interface Territorio {
  id: string
  nombre: string
  coberturaPorcentaje: number
  visitasPendientes: number
}

/** Zonas ficticias — no corresponden a una división territorial real. */
export const territorios: Territorio[] = [
  { id: 'zona-1', nombre: 'Zona Norte (demo)', coberturaPorcentaje: 82, visitasPendientes: 3 },
  { id: 'zona-2', nombre: 'Zona Centro (demo)', coberturaPorcentaje: 64, visitasPendientes: 5 },
  { id: 'zona-3', nombre: 'Zona Sur (demo)', coberturaPorcentaje: 91, visitasPendientes: 1 },
  { id: 'zona-4', nombre: 'Zona Poniente (demo)', coberturaPorcentaje: 47, visitasPendientes: 6 },
  { id: 'zona-5', nombre: 'Zona Oriente (demo)', coberturaPorcentaje: 73, visitasPendientes: 2 },
  { id: 'zona-6', nombre: 'Zona Cordillera (demo)', coberturaPorcentaje: 38, visitasPendientes: 7 },
]

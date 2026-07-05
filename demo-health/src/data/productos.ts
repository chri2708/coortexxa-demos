export type TipoProductoHealth = 'ISAPRE' | 'SEGURO_COMPLEMENTARIO' | 'CONVENIO_MEDICO' | 'AFP_SALUD'

export interface ProductoHealth {
  id: string
  nombre: string
  tipo: TipoProductoHealth
  descripcion: string
}

/** Planes y productos ficticios — sin relación con ISAPRE, aseguradoras o AFP reales. */
export const productosHealth: ProductoHealth[] = [
  { id: 'prod-h1', nombre: 'Plan Salud Esencial (demo)', tipo: 'ISAPRE', descripcion: 'Plan base de salud con cobertura ambulatoria y hospitalaria.' },
  { id: 'prod-h2', nombre: 'Plan Salud Plus (demo)', tipo: 'ISAPRE', descripcion: 'Plan con cobertura ampliada y red de prestadores extendida.' },
  { id: 'prod-h3', nombre: 'Seguro Complementario Familiar (demo)', tipo: 'SEGURO_COMPLEMENTARIO', descripcion: 'Cobertura complementaria para el grupo familiar.' },
  { id: 'prod-h4', nombre: 'Convenio Médico Preferente (demo)', tipo: 'CONVENIO_MEDICO', descripcion: 'Convenio con red de prestadores preferentes.' },
  { id: 'prod-h5', nombre: 'Plan Previsional Salud (demo)', tipo: 'AFP_SALUD', descripcion: 'Producto previsional asociado a salud.' },
]

export interface Ejecutivo {
  id: string
  nombre: string
  empresaId: string
  ventasMes: number
  metaMes: number
  region: string
}

export const ejecutivos: Ejecutivo[] = [
  { id: 'eje-1', nombre: 'Camila Rojas', empresaId: 'emp-1', ventasMes: 42, metaMes: 40, region: 'Metropolitana' },
  { id: 'eje-2', nombre: 'Ignacio Peña', empresaId: 'emp-1', ventasMes: 31, metaMes: 40, region: 'Valparaíso' },
  { id: 'eje-3', nombre: 'Fernanda Soto', empresaId: 'emp-2', ventasMes: 28, metaMes: 25, region: 'Biobío' },
  { id: 'eje-4', nombre: 'Matías Herrera', empresaId: 'emp-3', ventasMes: 19, metaMes: 22, region: 'Metropolitana' },
  { id: 'eje-5', nombre: 'Valentina Cruz', empresaId: 'emp-4', ventasMes: 24, metaMes: 20, region: 'Maule' },
]

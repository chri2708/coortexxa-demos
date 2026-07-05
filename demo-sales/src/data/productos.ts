export interface Producto {
  id: string
  nombre: string
  categoria: string
  precioUnitario: number
}

/** Catálogo ficticio de consumo masivo, sin marcas reales. */
export const productos: Producto[] = [
  { id: 'prod-1', nombre: 'Bebida Cítrica 350ml (demo)', categoria: 'Bebidas', precioUnitario: 690 },
  { id: 'prod-2', nombre: 'Agua Mineral 500ml (demo)', categoria: 'Bebidas', precioUnitario: 490 },
  { id: 'prod-3', nombre: 'Snack Salado 120g (demo)', categoria: 'Snacks', precioUnitario: 990 },
  { id: 'prod-4', nombre: 'Galleta Rellena 180g (demo)', categoria: 'Snacks', precioUnitario: 850 },
  { id: 'prod-5', nombre: 'Jugo Néctar 1L (demo)', categoria: 'Bebidas', precioUnitario: 1290 },
  { id: 'prod-6', nombre: 'Barra de Cereal (demo)', categoria: 'Snacks', precioUnitario: 590 },
]

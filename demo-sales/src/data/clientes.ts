export interface Cliente {
  id: string
  nombreFicticio: string
  direccionFicticia: string
  zonaId: string
  canal: 'Minimarket' | 'Almacén' | 'Distribuidor' | 'Restaurante'
}

/** Comercios 100% ficticios, sin relación con negocios reales. */
export const clientes: Cliente[] = [
  { id: 'cli-1', nombreFicticio: 'Minimarket Los Aromos (demo)', direccionFicticia: 'Av. Ficticia 123, Zona Norte', zonaId: 'zona-1', canal: 'Minimarket' },
  { id: 'cli-2', nombreFicticio: 'Almacén Doña Rosa (demo)', direccionFicticia: 'Pasaje Inventado 456, Zona Norte', zonaId: 'zona-1', canal: 'Almacén' },
  { id: 'cli-3', nombreFicticio: 'Distribuidora Cordillera (demo)', direccionFicticia: 'Camino Demo 789, Zona Centro', zonaId: 'zona-2', canal: 'Distribuidor' },
  { id: 'cli-4', nombreFicticio: 'Restaurante El Fogón (demo)', direccionFicticia: 'Calle Ejemplo 321, Zona Centro', zonaId: 'zona-2', canal: 'Restaurante' },
  { id: 'cli-5', nombreFicticio: 'Minimarket Alameda (demo)', direccionFicticia: 'Av. Ficticia 654, Zona Sur', zonaId: 'zona-3', canal: 'Minimarket' },
  { id: 'cli-6', nombreFicticio: 'Almacén San Pedro (demo)', direccionFicticia: 'Pasaje Inventado 987, Zona Poniente', zonaId: 'zona-4', canal: 'Almacén' },
  { id: 'cli-7', nombreFicticio: 'Distribuidora Andina (demo)', direccionFicticia: 'Camino Demo 159, Zona Oriente', zonaId: 'zona-5', canal: 'Distribuidor' },
  { id: 'cli-8', nombreFicticio: 'Minimarket Cordillera (demo)', direccionFicticia: 'Calle Ejemplo 753, Zona Cordillera', zonaId: 'zona-6', canal: 'Minimarket' },
]

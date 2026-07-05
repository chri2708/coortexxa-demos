export interface ClienteHealth {
  id: string
  nombreCompleto: string
  rutFicticio: string
  email: string
  telefono: string
  direccionFicticia: string
}

/** Personas 100% ficticias — ningún dato corresponde a un paciente o cliente real. */
export const clientesHealth: ClienteHealth[] = [
  { id: 'pac-1', nombreCompleto: 'Javiera Contreras (demo)', rutFicticio: '11.111.111-1', email: 'javiera.contreras.demo@ejemplo.cl', telefono: '+56 9 1111 1111', direccionFicticia: 'Av. Ficticia 100, Santiago' },
  { id: 'pac-2', nombreCompleto: 'Rodrigo Fuentes (demo)', rutFicticio: '22.222.222-2', email: 'rodrigo.fuentes.demo@ejemplo.cl', telefono: '+56 9 2222 2222', direccionFicticia: 'Pasaje Inventado 200, Santiago' },
  { id: 'pac-3', nombreCompleto: 'Constanza Bravo (demo)', rutFicticio: '33.333.333-3', email: 'constanza.bravo.demo@ejemplo.cl', telefono: '+56 9 3333 3333', direccionFicticia: 'Camino Demo 300, Valparaíso' },
  { id: 'pac-4', nombreCompleto: 'Felipe Muñoz (demo)', rutFicticio: '44.444.444-4', email: 'felipe.munoz.demo@ejemplo.cl', telefono: '+56 9 4444 4444', direccionFicticia: 'Calle Ejemplo 400, Concepción' },
  { id: 'pac-5', nombreCompleto: 'Antonia Reyes (demo)', rutFicticio: '55.555.555-5', email: 'antonia.reyes.demo@ejemplo.cl', telefono: '+56 9 5555 5555', direccionFicticia: 'Av. Ficticia 500, Santiago' },
  { id: 'pac-6', nombreCompleto: 'Tomás Espinoza (demo)', rutFicticio: '66.666.666-6', email: 'tomas.espinoza.demo@ejemplo.cl', telefono: '+56 9 6666 6666', direccionFicticia: 'Pasaje Inventado 600, La Serena' },
  { id: 'pac-7', nombreCompleto: 'Josefa Vidal (demo)', rutFicticio: '77.777.777-7', email: 'josefa.vidal.demo@ejemplo.cl', telefono: '+56 9 7777 7777', direccionFicticia: 'Camino Demo 700, Rancagua' },
  { id: 'pac-8', nombreCompleto: 'Diego Salinas (demo)', rutFicticio: '88.888.888-8', email: 'diego.salinas.demo@ejemplo.cl', telefono: '+56 9 8888 8888', direccionFicticia: 'Calle Ejemplo 800, Santiago' },
]

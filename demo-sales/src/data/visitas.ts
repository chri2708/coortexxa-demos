export type EstadoVisita = 'PENDIENTE' | 'EN_RUTA' | 'CHECKIN' | 'PEDIDO_ENVIADO' | 'OBSERVADA' | 'CUMPLIDA'
export type TipoFoto = 'FACHADA' | 'GONDOLA' | 'EXHIBICION' | 'REFRIGERADOR'

export interface FotoSimulada {
  tipo: TipoFoto
  cargada: boolean
}

export interface FormularioVisita {
  stockDisponible: string
  exhibicion: string
  competencia: string
  observaciones: string
  oportunidades: string
}

export interface CheckInInfo {
  horaEntrada?: string
  horaSalida?: string
  /** Coordenadas simuladas — no se usa geolocalización real del navegador. */
  geolocalizacionSimulada: { lat: number; lng: number }
}

export interface Visita {
  id: string
  clienteId: string
  vendedorId: string
  fecha: string
  horaProgramada: string
  estado: EstadoVisita
  checkIn: CheckInInfo
  formulario?: FormularioVisita
  fotos: FotoSimulada[]
  pedidoId?: string
}

const fotosBase = (cargadas: boolean): FotoSimulada[] => [
  { tipo: 'FACHADA', cargada: cargadas },
  { tipo: 'GONDOLA', cargada: cargadas },
  { tipo: 'EXHIBICION', cargada: cargadas },
  { tipo: 'REFRIGERADOR', cargada: cargadas },
]

export const visitasIniciales: Visita[] = [
  {
    id: 'vis-1',
    clienteId: 'cli-1',
    vendedorId: 'eje-1',
    fecha: '2026-07-05',
    horaProgramada: '09:00',
    estado: 'CUMPLIDA',
    checkIn: { horaEntrada: '09:05', horaSalida: '09:32', geolocalizacionSimulada: { lat: -33.42, lng: -70.61 } },
    formulario: {
      stockDisponible: 'Stock completo en las 6 referencias principales.',
      exhibicion: 'Exhibición en punta de góndola, buen frente de marca.',
      competencia: 'Presencia moderada de un competidor local.',
      observaciones: 'Cliente conforme, sin incidencias.',
      oportunidades: 'Espacio disponible para exhibición adicional en caja.',
    },
    fotos: fotosBase(true),
    pedidoId: 'ped-1',
  },
  {
    id: 'vis-2',
    clienteId: 'cli-2',
    vendedorId: 'eje-1',
    fecha: '2026-07-05',
    horaProgramada: '10:30',
    estado: 'PEDIDO_ENVIADO',
    checkIn: { horaEntrada: '10:35', geolocalizacionSimulada: { lat: -33.41, lng: -70.62 } },
    formulario: {
      stockDisponible: 'Quiebre parcial de bebidas 350ml.',
      exhibicion: 'Exhibición estándar en estante bajo.',
      competencia: 'Sin competencia relevante.',
      observaciones: 'Cliente solicita reposición urgente.',
      oportunidades: 'Ampliar línea de snacks.',
    },
    fotos: fotosBase(true),
    pedidoId: 'ped-2',
  },
  {
    id: 'vis-3',
    clienteId: 'cli-3',
    vendedorId: 'eje-2',
    fecha: '2026-07-05',
    horaProgramada: '11:00',
    estado: 'CHECKIN',
    checkIn: { horaEntrada: '11:04', geolocalizacionSimulada: { lat: -33.45, lng: -70.65 } },
    fotos: fotosBase(false),
  },
  {
    id: 'vis-4',
    clienteId: 'cli-4',
    vendedorId: 'eje-2',
    fecha: '2026-07-05',
    horaProgramada: '12:30',
    estado: 'EN_RUTA',
    checkIn: { geolocalizacionSimulada: { lat: -33.46, lng: -70.66 } },
    fotos: fotosBase(false),
  },
  {
    id: 'vis-5',
    clienteId: 'cli-5',
    vendedorId: 'eje-3',
    fecha: '2026-07-05',
    horaProgramada: '09:30',
    estado: 'OBSERVADA',
    checkIn: { horaEntrada: '09:33', horaSalida: '09:50', geolocalizacionSimulada: { lat: -33.51, lng: -70.6 } },
    formulario: {
      stockDisponible: 'Quiebre total de la línea de jugos.',
      exhibicion: 'Exhibición retirada por remodelación del local.',
      competencia: 'Competidor con exhibición doble.',
      observaciones: 'Local en remodelación, seguimiento en próxima visita.',
      oportunidades: 'Renegociar espacio una vez terminada la remodelación.',
    },
    fotos: fotosBase(true),
  },
  {
    id: 'vis-6',
    clienteId: 'cli-6',
    vendedorId: 'eje-3',
    fecha: '2026-07-05',
    horaProgramada: '15:00',
    estado: 'PENDIENTE',
    checkIn: { geolocalizacionSimulada: { lat: -33.44, lng: -70.7 } },
    fotos: fotosBase(false),
  },
  {
    id: 'vis-7',
    clienteId: 'cli-7',
    vendedorId: 'eje-4',
    fecha: '2026-07-05',
    horaProgramada: '10:00',
    estado: 'CUMPLIDA',
    checkIn: { horaEntrada: '10:02', horaSalida: '10:20', geolocalizacionSimulada: { lat: -33.43, lng: -70.55 } },
    formulario: {
      stockDisponible: 'Stock completo.',
      exhibicion: 'Exhibición adecuada.',
      competencia: 'Sin novedades.',
      observaciones: 'Visita sin incidencias.',
      oportunidades: 'Ninguna detectada en esta visita.',
    },
    fotos: fotosBase(true),
    pedidoId: 'ped-3',
  },
  {
    id: 'vis-8',
    clienteId: 'cli-8',
    vendedorId: 'eje-5',
    fecha: '2026-07-05',
    horaProgramada: '13:00',
    estado: 'PENDIENTE',
    checkIn: { geolocalizacionSimulada: { lat: -33.48, lng: -70.68 } },
    fotos: fotosBase(false),
  },
  {
    id: 'vis-9',
    clienteId: 'cli-1',
    vendedorId: 'eje-5',
    fecha: '2026-07-06',
    horaProgramada: '09:00',
    estado: 'PENDIENTE',
    checkIn: { geolocalizacionSimulada: { lat: -33.42, lng: -70.61 } },
    fotos: fotosBase(false),
  },
  {
    id: 'vis-10',
    clienteId: 'cli-3',
    vendedorId: 'eje-4',
    fecha: '2026-07-06',
    horaProgramada: '11:30',
    estado: 'EN_RUTA',
    checkIn: { geolocalizacionSimulada: { lat: -33.45, lng: -70.65 } },
    fotos: fotosBase(false),
  },
]

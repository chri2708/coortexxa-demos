import { tiposDocumentoHealth, type DocumentoHealth } from './documentos'

export type EstadoSolicitudHealth =
  | 'BORRADOR'
  | 'INGRESADA'
  | 'EN_REVISION'
  | 'OBSERVADA'
  | 'APROBADA'
  | 'RECHAZADA'
  | 'ACTIVADA'

export type PrioridadSolicitud = 'ALTA' | 'MEDIA' | 'BAJA'

export interface EventoHistorialHealth {
  etapa: string
  fecha: string
  nota: string
}

export interface SolicitudHealth {
  id: string
  /** Folio ficticio de demostración — formato HLTH-2026-000X, no conectado a ningún sistema real. */
  folio: string
  clienteId: string
  productoId: string
  ejecutivoId: string
  estado: EstadoSolicitudHealth
  prioridad: PrioridadSolicitud
  fechaIngreso: string
  rentaDeclaradaFicticia: number
  numeroCargas: number
  fechaInicioSolicitada: string
  declaracionSalud: string
  observacionesComerciales: string
  documentos: DocumentoHealth[]
  historial: EventoHistorialHealth[]
  slaExcedido?: boolean
}

const documentosCompletos = (estado: DocumentoHealth['estado']): DocumentoHealth[] =>
  tiposDocumentoHealth.map((tipo) => ({ tipo, estado }))

export const solicitudesIniciales: SolicitudHealth[] = [
  {
    id: 'sol-h1',
    folio: 'HLTH-2026-0001',
    clienteId: 'pac-1',
    productoId: 'prod-h1',
    ejecutivoId: 'eje-1',
    estado: 'ACTIVADA',
    prioridad: 'MEDIA',
    fechaIngreso: '2026-06-20',
    rentaDeclaradaFicticia: 950000,
    numeroCargas: 1,
    fechaInicioSolicitada: '2026-07-01',
    declaracionSalud: 'Sin antecedentes relevantes declarados.',
    observacionesComerciales: 'Cliente derivado por convenio de empresa.',
    documentos: documentosCompletos('VALIDADO'),
    historial: [
      { etapa: 'Ingresada', fecha: '2026-06-20', nota: 'Solicitud creada por ejecutivo.' },
      { etapa: 'En revisión', fecha: '2026-06-21', nota: 'Documentos completos, en revisión de supervisor.' },
      { etapa: 'Aprobada', fecha: '2026-06-23', nota: 'Aprobada por supervisor.' },
      { etapa: 'Activada', fecha: '2026-06-25', nota: 'Afiliación activada por Operaciones.' },
    ],
  },
  {
    id: 'sol-h2',
    folio: 'HLTH-2026-0002',
    clienteId: 'pac-2',
    productoId: 'prod-h3',
    ejecutivoId: 'eje-1',
    estado: 'EN_REVISION',
    prioridad: 'ALTA',
    fechaIngreso: '2026-07-02',
    rentaDeclaradaFicticia: 1200000,
    numeroCargas: 2,
    fechaInicioSolicitada: '2026-07-15',
    declaracionSalud: 'Declara tratamiento médico en curso, en evaluación.',
    observacionesComerciales: 'Cliente solicita inicio antes de fin de mes.',
    documentos: [
      { tipo: 'CEDULA', estado: 'VALIDADO' },
      { tipo: 'LIQUIDACION_SUELDO', estado: 'VALIDADO' },
      { tipo: 'CERTIFICADO_AFILIACION_ANTERIOR', estado: 'RECIBIDO' },
      { tipo: 'DECLARACION_SALUD', estado: 'RECIBIDO' },
      { tipo: 'MANDATO_AUTORIZACION', estado: 'PENDIENTE' },
      { tipo: 'COMPROBANTE_DOMICILIO', estado: 'PENDIENTE' },
    ],
    historial: [
      { etapa: 'Ingresada', fecha: '2026-07-02', nota: 'Solicitud creada por ejecutivo.' },
      { etapa: 'En revisión', fecha: '2026-07-03', nota: 'En revisión, documentación parcial.' },
    ],
    slaExcedido: true,
  },
  {
    id: 'sol-h3',
    folio: 'HLTH-2026-0003',
    clienteId: 'pac-3',
    productoId: 'prod-h2',
    ejecutivoId: 'eje-2',
    estado: 'OBSERVADA',
    prioridad: 'ALTA',
    fechaIngreso: '2026-06-28',
    rentaDeclaradaFicticia: 1450000,
    numeroCargas: 0,
    fechaInicioSolicitada: '2026-07-10',
    declaracionSalud: 'Declaración incompleta, falta detalle de tratamiento.',
    observacionesComerciales: 'Cliente de alto valor, prioridad de seguimiento.',
    documentos: [
      { tipo: 'CEDULA', estado: 'VALIDADO' },
      { tipo: 'LIQUIDACION_SUELDO', estado: 'OBSERVADO' },
      { tipo: 'CERTIFICADO_AFILIACION_ANTERIOR', estado: 'VALIDADO' },
      { tipo: 'DECLARACION_SALUD', estado: 'OBSERVADO' },
      { tipo: 'MANDATO_AUTORIZACION', estado: 'VALIDADO' },
      { tipo: 'COMPROBANTE_DOMICILIO', estado: 'VALIDADO', fechaVencimiento: '2026-06-30' },
    ],
    historial: [
      { etapa: 'Ingresada', fecha: '2026-06-28', nota: 'Solicitud creada por ejecutivo.' },
      { etapa: 'En revisión', fecha: '2026-06-29', nota: 'En revisión de supervisor.' },
      { etapa: 'Observada', fecha: '2026-06-30', nota: 'Falta completar declaración de salud y liquidación vigente.' },
    ],
  },
  {
    id: 'sol-h4',
    folio: 'HLTH-2026-0004',
    clienteId: 'pac-4',
    productoId: 'prod-h4',
    ejecutivoId: 'eje-2',
    estado: 'INGRESADA',
    prioridad: 'MEDIA',
    fechaIngreso: '2026-07-04',
    rentaDeclaradaFicticia: 800000,
    numeroCargas: 1,
    fechaInicioSolicitada: '2026-07-20',
    declaracionSalud: 'Sin antecedentes relevantes declarados.',
    observacionesComerciales: '',
    documentos: documentosCompletos('RECIBIDO'),
    historial: [{ etapa: 'Ingresada', fecha: '2026-07-04', nota: 'Solicitud creada por ejecutivo.' }],
  },
  {
    id: 'sol-h5',
    folio: 'HLTH-2026-0005',
    clienteId: 'pac-5',
    productoId: 'prod-h1',
    ejecutivoId: 'eje-3',
    estado: 'APROBADA',
    prioridad: 'BAJA',
    fechaIngreso: '2026-06-25',
    rentaDeclaradaFicticia: 1000000,
    numeroCargas: 2,
    fechaInicioSolicitada: '2026-07-05',
    declaracionSalud: 'Sin antecedentes relevantes declarados.',
    observacionesComerciales: 'Lista para activación.',
    documentos: documentosCompletos('VALIDADO'),
    historial: [
      { etapa: 'Ingresada', fecha: '2026-06-25', nota: 'Solicitud creada por ejecutivo.' },
      { etapa: 'En revisión', fecha: '2026-06-26', nota: 'Revisión sin observaciones.' },
      { etapa: 'Aprobada', fecha: '2026-06-27', nota: 'Aprobada por supervisor, pendiente activación.' },
    ],
  },
  {
    id: 'sol-h6',
    folio: 'HLTH-2026-0006',
    clienteId: 'pac-6',
    productoId: 'prod-h5',
    ejecutivoId: 'eje-3',
    estado: 'BORRADOR',
    prioridad: 'BAJA',
    fechaIngreso: '2026-07-05',
    rentaDeclaradaFicticia: 700000,
    numeroCargas: 0,
    fechaInicioSolicitada: '2026-07-25',
    declaracionSalud: '',
    observacionesComerciales: 'Falta confirmar datos de contacto.',
    documentos: documentosCompletos('PENDIENTE'),
    historial: [{ etapa: 'Borrador', fecha: '2026-07-05', nota: 'Solicitud en preparación.' }],
  },
  {
    id: 'sol-h7',
    folio: 'HLTH-2026-0007',
    clienteId: 'pac-7',
    productoId: 'prod-h3',
    ejecutivoId: 'eje-4',
    estado: 'RECHAZADA',
    prioridad: 'MEDIA',
    fechaIngreso: '2026-06-18',
    rentaDeclaradaFicticia: 600000,
    numeroCargas: 3,
    fechaInicioSolicitada: '2026-06-30',
    declaracionSalud: 'Declara condición preexistente no cubierta por el plan solicitado.',
    observacionesComerciales: 'Se recomienda reofertar plan alternativo.',
    documentos: documentosCompletos('VALIDADO'),
    historial: [
      { etapa: 'Ingresada', fecha: '2026-06-18', nota: 'Solicitud creada por ejecutivo.' },
      { etapa: 'En revisión', fecha: '2026-06-19', nota: 'En revisión de supervisor.' },
      { etapa: 'Rechazada', fecha: '2026-06-21', nota: 'Rechazada: condición no compatible con el plan.' },
    ],
  },
  {
    id: 'sol-h8',
    folio: 'HLTH-2026-0008',
    clienteId: 'pac-8',
    productoId: 'prod-h2',
    ejecutivoId: 'eje-5',
    estado: 'EN_REVISION',
    prioridad: 'MEDIA',
    fechaIngreso: '2026-07-01',
    rentaDeclaradaFicticia: 1100000,
    numeroCargas: 1,
    fechaInicioSolicitada: '2026-07-18',
    declaracionSalud: 'Sin antecedentes relevantes declarados.',
    observacionesComerciales: '',
    documentos: [
      { tipo: 'CEDULA', estado: 'VALIDADO' },
      { tipo: 'LIQUIDACION_SUELDO', estado: 'VALIDADO' },
      { tipo: 'CERTIFICADO_AFILIACION_ANTERIOR', estado: 'VALIDADO' },
      { tipo: 'DECLARACION_SALUD', estado: 'VALIDADO' },
      { tipo: 'MANDATO_AUTORIZACION', estado: 'RECIBIDO' },
      { tipo: 'COMPROBANTE_DOMICILIO', estado: 'RECIBIDO' },
    ],
    historial: [
      { etapa: 'Ingresada', fecha: '2026-07-01', nota: 'Solicitud creada por ejecutivo.' },
      { etapa: 'En revisión', fecha: '2026-07-02', nota: 'En revisión de supervisor.' },
    ],
  },
]

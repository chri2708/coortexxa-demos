/**
 * Datos 100% ficticios para demo comercial. Ningún folio, RUT, comercio o monto
 * corresponde a una persona, empresa o banco real. Los RUT usan un patrón de
 * dígitos repetidos (ej. 76.111.111-1) precisamente para que sea obvio que son
 * de demostración, no identificadores reales.
 */

export type EstadoSolicitud = 'PENDIENTE' | 'EN_REVISION' | 'APROBADA' | 'RECHAZADA'
export type TipoSolicitud = 'POS' | 'CUENTA_EMPRESA'
export type EtapaWorkflow = 'EJECUTIVO' | 'SUPERVISOR' | 'BACKOFFICE'

export interface DocumentoRequerido {
  nombre: string
  estado: 'PENDIENTE' | 'CARGADO' | 'VALIDADO'
}

export interface EventoWorkflow {
  etapa: EtapaWorkflow
  fecha: string
  nota: string
}

export interface SolicitudBank {
  id: string
  folio: string
  tipo: TipoSolicitud
  comercioFicticio: string
  rutDemo: string
  ejecutivoId: string
  monto: number
  estado: EstadoSolicitud
  etapaActual: EtapaWorkflow
  documentos: DocumentoRequerido[]
  firmaSimulada: boolean
  historial: EventoWorkflow[]
}

export const solicitudesIniciales: SolicitudBank[] = [
  {
    id: 'sol-1',
    folio: 'BK-500101',
    tipo: 'POS',
    comercioFicticio: 'Panadería Los Aromos (demo)',
    rutDemo: '76.111.111-1',
    ejecutivoId: 'eje-1',
    monto: 850000,
    estado: 'EN_REVISION',
    etapaActual: 'SUPERVISOR',
    documentos: [
      { nombre: 'Cédula representante legal', estado: 'VALIDADO' },
      { nombre: 'Constitución de sociedad', estado: 'VALIDADO' },
      { nombre: 'Carpeta tributaria', estado: 'CARGADO' },
    ],
    firmaSimulada: true,
    historial: [
      { etapa: 'EJECUTIVO', fecha: '2026-07-01', nota: 'Solicitud creada y enviada a revisión.' },
      { etapa: 'SUPERVISOR', fecha: '2026-07-02', nota: 'En revisión de documentos.' },
    ],
  },
  {
    id: 'sol-2',
    folio: 'BK-500102',
    tipo: 'CUENTA_EMPRESA',
    comercioFicticio: 'Ferretería Andina Ltda. (demo)',
    rutDemo: '76.222.222-2',
    ejecutivoId: 'eje-1',
    monto: 0,
    estado: 'PENDIENTE',
    etapaActual: 'EJECUTIVO',
    documentos: [
      { nombre: 'Cédula representante legal', estado: 'CARGADO' },
      { nombre: 'Constitución de sociedad', estado: 'PENDIENTE' },
    ],
    firmaSimulada: false,
    historial: [{ etapa: 'EJECUTIVO', fecha: '2026-07-03', nota: 'Solicitud en preparación.' }],
  },
  {
    id: 'sol-3',
    folio: 'BK-500103',
    tipo: 'POS',
    comercioFicticio: 'Café Miraflores (demo)',
    rutDemo: '76.333.333-3',
    ejecutivoId: 'eje-2',
    monto: 420000,
    estado: 'APROBADA',
    etapaActual: 'BACKOFFICE',
    documentos: [
      { nombre: 'Cédula representante legal', estado: 'VALIDADO' },
      { nombre: 'Carpeta tributaria', estado: 'VALIDADO' },
    ],
    firmaSimulada: true,
    historial: [
      { etapa: 'EJECUTIVO', fecha: '2026-06-28', nota: 'Solicitud creada.' },
      { etapa: 'SUPERVISOR', fecha: '2026-06-29', nota: 'Aprobada por supervisor.' },
      { etapa: 'BACKOFFICE', fecha: '2026-06-30', nota: 'Activación de POS confirmada.' },
    ],
  },
  {
    id: 'sol-4',
    folio: 'BK-500104',
    tipo: 'POS',
    comercioFicticio: 'Minimarket El Roble (demo)',
    rutDemo: '76.444.444-4',
    ejecutivoId: 'eje-3',
    monto: 300000,
    estado: 'RECHAZADA',
    etapaActual: 'SUPERVISOR',
    documentos: [
      { nombre: 'Cédula representante legal', estado: 'VALIDADO' },
      { nombre: 'Carpeta tributaria', estado: 'PENDIENTE' },
    ],
    firmaSimulada: true,
    historial: [
      { etapa: 'EJECUTIVO', fecha: '2026-06-25', nota: 'Solicitud creada.' },
      { etapa: 'SUPERVISOR', fecha: '2026-06-27', nota: 'Rechazada: carpeta tributaria vencida.' },
    ],
  },
  {
    id: 'sol-5',
    folio: 'BK-500105',
    tipo: 'CUENTA_EMPRESA',
    comercioFicticio: 'Distribuidora Cordillera SpA (demo)',
    rutDemo: '76.555.555-5',
    ejecutivoId: 'eje-4',
    monto: 0,
    estado: 'EN_REVISION',
    etapaActual: 'SUPERVISOR',
    documentos: [
      { nombre: 'Cédula representante legal', estado: 'VALIDADO' },
      { nombre: 'Constitución de sociedad', estado: 'VALIDADO' },
      { nombre: 'Carpeta tributaria', estado: 'VALIDADO' },
    ],
    firmaSimulada: true,
    historial: [
      { etapa: 'EJECUTIVO', fecha: '2026-07-01', nota: 'Solicitud creada.' },
      { etapa: 'SUPERVISOR', fecha: '2026-07-02', nota: 'En revisión final.' },
    ],
  },
  {
    id: 'sol-6',
    folio: 'BK-500106',
    tipo: 'POS',
    comercioFicticio: 'Botillería Don Segundo (demo)',
    rutDemo: '76.666.666-6',
    ejecutivoId: 'eje-5',
    monto: 190000,
    estado: 'PENDIENTE',
    etapaActual: 'EJECUTIVO',
    documentos: [{ nombre: 'Cédula representante legal', estado: 'PENDIENTE' }],
    firmaSimulada: false,
    historial: [{ etapa: 'EJECUTIVO', fecha: '2026-07-04', nota: 'Solicitud en preparación.' }],
  },
]

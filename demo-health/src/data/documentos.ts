export type TipoDocumentoHealth =
  | 'CEDULA'
  | 'LIQUIDACION_SUELDO'
  | 'CERTIFICADO_AFILIACION_ANTERIOR'
  | 'DECLARACION_SALUD'
  | 'MANDATO_AUTORIZACION'
  | 'COMPROBANTE_DOMICILIO'

export type EstadoDocumentoHealth = 'PENDIENTE' | 'RECIBIDO' | 'OBSERVADO' | 'VALIDADO'

export interface DocumentoHealth {
  tipo: TipoDocumentoHealth
  estado: EstadoDocumentoHealth
  /** Solo para simular la alerta "documentos vencidos" — dato ficticio. */
  fechaVencimiento?: string
}

export const documentoLabel: Record<TipoDocumentoHealth, string> = {
  CEDULA: 'Cédula de identidad',
  LIQUIDACION_SUELDO: 'Liquidación de sueldo',
  CERTIFICADO_AFILIACION_ANTERIOR: 'Certificado de afiliación anterior',
  DECLARACION_SALUD: 'Declaración de salud',
  MANDATO_AUTORIZACION: 'Mandato o autorización',
  COMPROBANTE_DOMICILIO: 'Comprobante de domicilio',
}

export const tiposDocumentoHealth: TipoDocumentoHealth[] = [
  'CEDULA',
  'LIQUIDACION_SUELDO',
  'CERTIFICADO_AFILIACION_ANTERIOR',
  'DECLARACION_SALUD',
  'MANDATO_AUTORIZACION',
  'COMPROBANTE_DOMICILIO',
]

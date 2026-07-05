import { createContext, useContext, useState, type ReactNode } from 'react'
import { solicitudesIniciales, type SolicitudHealth } from '@/data/solicitudes'
import type { TipoDocumentoHealth } from '@/data/documentos'

const hoy = () => new Date().toISOString().slice(0, 10)

interface NuevaSolicitudInput {
  clienteId: string
  productoId: string
  ejecutivoId: string
  rentaDeclaradaFicticia: number
  numeroCargas: number
  fechaInicioSolicitada: string
  observacionesComerciales: string
}

interface SolicitudesContextValue {
  solicitudes: SolicitudHealth[]
  getSolicitud: (id: string) => SolicitudHealth | undefined
  crearSolicitud: (input: NuevaSolicitudInput) => string
  ingresarSolicitud: (id: string) => void
  enviarARevision: (id: string) => void
  observar: (id: string, nota: string) => void
  corregirObservacion: (id: string, nota: string) => void
  aprobar: (id: string, nota: string) => void
  rechazar: (id: string, nota: string) => void
  activar: (id: string) => void
  validarDocumento: (id: string, tipo: TipoDocumentoHealth) => void
}

const SolicitudesContext = createContext<SolicitudesContextValue | null>(null)

let folioCorrelativo = 9

export function SolicitudesProvider({ children }: { children: ReactNode }) {
  const [solicitudes, setSolicitudes] = useState<SolicitudHealth[]>(solicitudesIniciales)

  const getSolicitud = (id: string) => solicitudes.find((s) => s.id === id)

  const agregarEvento = (s: SolicitudHealth, etapa: string, nota: string): SolicitudHealth => ({
    ...s,
    historial: [...s.historial, { etapa, fecha: hoy(), nota }],
  })

  const actualizar = (id: string, cambio: (s: SolicitudHealth) => SolicitudHealth) => {
    setSolicitudes((prev) => prev.map((s) => (s.id === id ? cambio(s) : s)))
  }

  const crearSolicitud = (input: NuevaSolicitudInput) => {
    const id = `sol-h-${Date.now()}`
    const folio = `HLTH-2026-${String(++folioCorrelativo).padStart(4, '0')}`
    const nueva: SolicitudHealth = {
      id,
      folio,
      clienteId: input.clienteId,
      productoId: input.productoId,
      ejecutivoId: input.ejecutivoId,
      estado: 'BORRADOR',
      prioridad: 'MEDIA',
      fechaIngreso: hoy(),
      rentaDeclaradaFicticia: input.rentaDeclaradaFicticia,
      numeroCargas: input.numeroCargas,
      fechaInicioSolicitada: input.fechaInicioSolicitada,
      declaracionSalud: '',
      observacionesComerciales: input.observacionesComerciales,
      documentos: [],
      historial: [{ etapa: 'Borrador', fecha: hoy(), nota: 'Solicitud creada por ejecutivo (demo).' }],
    }
    setSolicitudes((prev) => [nueva, ...prev])
    return id
  }

  const ingresarSolicitud = (id: string) =>
    actualizar(id, (s) => agregarEvento({ ...s, estado: 'INGRESADA' }, 'Ingresada', 'Solicitud ingresada formalmente.'))

  const enviarARevision = (id: string) =>
    actualizar(id, (s) => agregarEvento({ ...s, estado: 'EN_REVISION' }, 'En revisión', 'Enviada a revisión de supervisor.'))

  const observar = (id: string, nota: string) =>
    actualizar(id, (s) => agregarEvento({ ...s, estado: 'OBSERVADA' }, 'Observada', nota || 'Solicitud observada por supervisor.'))

  const corregirObservacion = (id: string, nota: string) =>
    actualizar(id, (s) => agregarEvento({ ...s, estado: 'EN_REVISION' }, 'Corregida', nota || 'Observación corregida por ejecutivo.'))

  const aprobar = (id: string, nota: string) =>
    actualizar(id, (s) => agregarEvento({ ...s, estado: 'APROBADA' }, 'Aprobada', nota || 'Solicitud aprobada por supervisor.'))

  const rechazar = (id: string, nota: string) =>
    actualizar(id, (s) => agregarEvento({ ...s, estado: 'RECHAZADA' }, 'Rechazada', nota || 'Solicitud rechazada por supervisor.'))

  const activar = (id: string) =>
    actualizar(id, (s) => agregarEvento({ ...s, estado: 'ACTIVADA' }, 'Activada', 'Afiliación activada por Operaciones.'))

  const validarDocumento = (id: string, tipo: TipoDocumentoHealth) =>
    actualizar(id, (s) => ({
      ...s,
      documentos: s.documentos.map((d) => (d.tipo === tipo ? { ...d, estado: 'VALIDADO' } : d)),
    }))

  return (
    <SolicitudesContext.Provider
      value={{
        solicitudes,
        getSolicitud,
        crearSolicitud,
        ingresarSolicitud,
        enviarARevision,
        observar,
        corregirObservacion,
        aprobar,
        rechazar,
        activar,
        validarDocumento,
      }}
    >
      {children}
    </SolicitudesContext.Provider>
  )
}

export function useSolicitudes() {
  const ctx = useContext(SolicitudesContext)
  if (!ctx) throw new Error('useSolicitudes debe usarse dentro de <SolicitudesProvider>')
  return ctx
}

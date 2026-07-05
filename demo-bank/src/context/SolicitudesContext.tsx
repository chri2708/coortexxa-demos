import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  solicitudesIniciales,
  type EstadoSolicitud,
  type EtapaWorkflow,
  type SolicitudBank,
} from '@/data/solicitudes'

const ORDEN_ETAPAS: EtapaWorkflow[] = ['EJECUTIVO', 'SUPERVISOR', 'BACKOFFICE']

interface SolicitudesContextValue {
  solicitudes: SolicitudBank[]
  getSolicitud: (id: string) => SolicitudBank | undefined
  avanzarEtapa: (id: string, nota: string) => void
  rechazar: (id: string, nota: string) => void
  firmar: (id: string) => void
}

const SolicitudesContext = createContext<SolicitudesContextValue | null>(null)

export function SolicitudesProvider({ children }: { children: ReactNode }) {
  const [solicitudes, setSolicitudes] = useState<SolicitudBank[]>(solicitudesIniciales)

  const getSolicitud = (id: string) => solicitudes.find((s) => s.id === id)

  const avanzarEtapa = (id: string, nota: string) => {
    setSolicitudes((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s
        const indiceActual = ORDEN_ETAPAS.indexOf(s.etapaActual)
        const esUltima = indiceActual === ORDEN_ETAPAS.length - 1
        const nuevaEtapa = esUltima ? s.etapaActual : ORDEN_ETAPAS[indiceActual + 1]
        const nuevoEstado: EstadoSolicitud = esUltima ? 'APROBADA' : 'EN_REVISION'
        return {
          ...s,
          etapaActual: nuevaEtapa,
          estado: nuevoEstado,
          historial: [
            ...s.historial,
            { etapa: nuevaEtapa, fecha: new Date().toISOString().slice(0, 10), nota },
          ],
        }
      }),
    )
  }

  const rechazar = (id: string, nota: string) => {
    setSolicitudes((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              estado: 'RECHAZADA' as EstadoSolicitud,
              historial: [
                ...s.historial,
                { etapa: s.etapaActual, fecha: new Date().toISOString().slice(0, 10), nota },
              ],
            }
          : s,
      ),
    )
  }

  const firmar = (id: string) => {
    setSolicitudes((prev) => prev.map((s) => (s.id === id ? { ...s, firmaSimulada: true } : s)))
  }

  return (
    <SolicitudesContext.Provider value={{ solicitudes, getSolicitud, avanzarEtapa, rechazar, firmar }}>
      {children}
    </SolicitudesContext.Provider>
  )
}

export function useSolicitudes() {
  const ctx = useContext(SolicitudesContext)
  if (!ctx) throw new Error('useSolicitudes debe usarse dentro de <SolicitudesProvider>')
  return ctx
}

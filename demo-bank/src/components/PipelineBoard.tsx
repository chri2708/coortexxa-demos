import { Link } from 'react-router-dom'
import { Card, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import type { EstadoSolicitud, SolicitudBank } from '@/data/solicitudes'
import { estadoLabel, estadoTone, money } from '@/lib/format'

const columnas: EstadoSolicitud[] = ['PENDIENTE', 'EN_REVISION', 'APROBADA', 'RECHAZADA']

function ejecutivoNombre(id: string) {
  return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
}

export function PipelineBoard({ solicitudes }: { solicitudes: SolicitudBank[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {columnas.map((estado) => {
        const items = solicitudes.filter((s) => s.estado === estado)
        return (
          <div key={estado}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-ink-900">{estadoLabel[estado]}</h3>
              <span className="text-xs font-medium text-ink-500">{items.length}</span>
            </div>
            <div className="flex flex-col gap-3">
              {items.map((s) => (
                <Link key={s.id} to={`/solicitudes/${s.id}`}>
                  <Card className="p-4 transition-shadow hover:shadow-[var(--shadow-lg)]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-ink-500">{s.folio}</span>
                      <StatusBadge tone={estadoTone[s.estado]}>{estadoLabel[s.estado]}</StatusBadge>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-ink-900">{s.comercioFicticio}</p>
                    <p className="mt-1 text-xs text-ink-500">{ejecutivoNombre(s.ejecutivoId)}</p>
                    <p className="mt-2 text-sm font-medium text-ink-700">{money(s.monto)}</p>
                  </Card>
                </Link>
              ))}
              {items.length === 0 && (
                <p className="rounded-[var(--radius-md)] border border-dashed border-border p-4 text-center text-xs text-ink-300">
                  Sin solicitudes
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

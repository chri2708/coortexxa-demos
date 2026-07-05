import { Link } from 'react-router-dom'
import { Card } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { clientesHealth } from '@/data/clientes'
import { productosHealth } from '@/data/productos'
import type { SolicitudHealth } from '@/data/solicitudes'
import { prioridadTone } from '@/lib/format'
import { SolicitudStatusBadge } from './SolicitudStatusBadge'
import { StatusBadge } from '@coortexxa/ui-kit'

export function SolicitudCard({ solicitud }: { solicitud: SolicitudHealth }) {
  const cliente = clientesHealth.find((c) => c.id === solicitud.clienteId)
  const producto = productosHealth.find((p) => p.id === solicitud.productoId)
  const ejecutivo = ejecutivos.find((e) => e.id === solicitud.ejecutivoId)

  return (
    <Link to={`/solicitudes/${solicitud.id}`}>
      <Card className="p-4 transition-shadow hover:shadow-[var(--shadow-lg)]">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-ink-500">{solicitud.folio}</span>
          <SolicitudStatusBadge estado={solicitud.estado} />
        </div>
        <p className="mt-2 text-sm font-semibold text-ink-900">{cliente?.nombreCompleto ?? '—'}</p>
        <p className="mt-1 text-xs text-ink-500">{producto?.nombre ?? '—'}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-ink-500">{ejecutivo?.nombre ?? '—'}</span>
          <StatusBadge tone={prioridadTone[solicitud.prioridad]}>{solicitud.prioridad}</StatusBadge>
        </div>
        <p className="mt-2 text-xs text-ink-300">Ingresada {solicitud.fechaIngreso}</p>
      </Card>
    </Link>
  )
}

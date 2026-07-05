import { Link } from 'react-router-dom'
import { Card, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { clientes } from '@/data/clientes'
import type { Visita } from '@/data/visitas'
import { estadoVisitaLabel, estadoVisitaTone } from '@/lib/format'

function clienteDe(id: string) {
  return clientes.find((c) => c.id === id)
}

function vendedorNombre(id: string) {
  return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
}

export function VisitCard({ visita }: { visita: Visita }) {
  const cliente = clienteDe(visita.clienteId)

  return (
    <Link to={`/visitas/${visita.id}`}>
      <Card className="p-4 transition-shadow hover:shadow-[var(--shadow-lg)]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-ink-500">{visita.horaProgramada}</span>
          <StatusBadge tone={estadoVisitaTone[visita.estado]}>{estadoVisitaLabel[visita.estado]}</StatusBadge>
        </div>
        <p className="mt-2 text-sm font-semibold text-ink-900">{cliente?.nombreFicticio ?? '—'}</p>
        <p className="mt-1 text-xs text-ink-500">{cliente?.direccionFicticia}</p>
        <p className="mt-2 text-xs font-medium text-ink-700">{vendedorNombre(visita.vendedorId)}</p>
      </Card>
    </Link>
  )
}

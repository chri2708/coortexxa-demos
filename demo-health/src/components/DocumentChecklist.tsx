import { Circle, FileCheck2, FileClock, FileWarning } from 'lucide-react'
import type { DocumentoHealth } from '@/data/documentos'
import { documentoLabel } from '@/data/documentos'
import { documentoEstadoLabel } from '@/lib/format'

const iconByEstado = {
  PENDIENTE: Circle,
  RECIBIDO: FileClock,
  OBSERVADO: FileWarning,
  VALIDADO: FileCheck2,
}

const colorByEstado = {
  PENDIENTE: 'text-ink-300',
  RECIBIDO: 'text-info-500',
  OBSERVADO: 'text-warning-500',
  VALIDADO: 'text-success-500',
}

export function DocumentChecklist({ documentos }: { documentos: DocumentoHealth[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {documentos.map((doc) => {
        const Icon = iconByEstado[doc.estado]
        return (
          <li
            key={doc.tipo}
            className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border px-4 py-3"
          >
            <div className="flex items-center gap-2.5">
              <Icon className={`h-4 w-4 shrink-0 ${colorByEstado[doc.estado]}`} />
              <span className="text-sm font-medium text-ink-900">{documentoLabel[doc.tipo]}</span>
            </div>
            <span className="text-xs text-ink-500">{documentoEstadoLabel[doc.estado]}</span>
          </li>
        )
      })}
    </ul>
  )
}

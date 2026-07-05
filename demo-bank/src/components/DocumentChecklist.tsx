import { Circle, FileCheck2, FileClock } from 'lucide-react'
import type { DocumentoRequerido } from '@/data/solicitudes'

const iconByEstado = {
  PENDIENTE: Circle,
  CARGADO: FileClock,
  VALIDADO: FileCheck2,
}

const colorByEstado = {
  PENDIENTE: 'text-ink-300',
  CARGADO: 'text-warning-500',
  VALIDADO: 'text-success-500',
}

const labelByEstado = {
  PENDIENTE: 'Pendiente de carga',
  CARGADO: 'Cargado, por validar',
  VALIDADO: 'Validado',
}

export function DocumentChecklist({ documentos }: { documentos: DocumentoRequerido[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {documentos.map((doc) => {
        const Icon = iconByEstado[doc.estado]
        return (
          <li key={doc.nombre} className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Icon className={`h-4 w-4 shrink-0 ${colorByEstado[doc.estado]}`} />
              <span className="text-sm font-medium text-ink-900">{doc.nombre}</span>
            </div>
            <span className="text-xs text-ink-500">{labelByEstado[doc.estado]}</span>
          </li>
        )
      })}
    </ul>
  )
}

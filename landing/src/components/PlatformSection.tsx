import {
  BarChart3,
  FileBarChart,
  FileText,
  FolderOpen,
  History,
  LayoutDashboard,
  PenLine,
  Workflow,
} from 'lucide-react'

const modules = [
  { icon: FileText, title: 'Formularios inteligentes', description: 'Campos dinámicos por producto, validaciones y reglas por empresa.' },
  { icon: Workflow, title: 'Workflow', description: 'Estados, asignación y SLA configurables por proceso de venta.' },
  { icon: FolderOpen, title: 'Gestión documental', description: 'Documentos y respaldos centralizados, versionados por venta.' },
  { icon: PenLine, title: 'Firma digital/electrónica', description: 'Firma en terreno u oficina, adjunta al expediente de la venta.' },
  { icon: BarChart3, title: 'KPI', description: 'Indicadores comerciales consolidados por ejecutivo, equipo y empresa.' },
  { icon: LayoutDashboard, title: 'Dashboards por rol', description: 'Vistas distintas para ejecutivo, supervisor, gerente y administrador.' },
  { icon: FileBarChart, title: 'Reportes', description: 'Reportes exportables para cierres mensuales y revisión de gestión.' },
  { icon: History, title: 'Auditoría', description: 'Historial de cambios de estado y acciones sobre cada operación.' },
]

export function PlatformSection() {
  return (
    <section id="plataforma" className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Una plataforma, todos los módulos que tu operación necesita
          </h2>
          <p className="mt-4 text-ink-500">
            COORTEXXA es modular: cada empresa activa los módulos que su operación requiere.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink-900">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Building2, History, Layers, Plug, Route, UserCog } from 'lucide-react'

const items = [
  { icon: UserCog, title: 'Roles y permisos', description: 'Cada usuario ve y hace solo lo que su rol permite: ejecutivo, supervisor, gerente o administrador.' },
  { icon: History, title: 'Auditoría', description: 'Registro de cambios de estado y acciones relevantes sobre cada operación.' },
  { icon: Route, title: 'Trazabilidad', description: 'Historial completo del ciclo de vida de cada venta, de principio a fin.' },
  { icon: Building2, title: 'Datos por empresa', description: 'Aislamiento de datos entre empresas dentro de la misma plataforma.' },
  { icon: Layers, title: 'Ambientes separados', description: 'Entornos de demo y producción independientes entre sí.' },
  { icon: Plug, title: 'Preparado para integraciones', description: 'Arquitectura pensada para conectarse a sistemas internos del cliente.' },
]

export function SecuritySection() {
  return (
    <section id="seguridad" className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Pensado para operaciones reguladas
          </h2>
          <p className="mt-4 text-ink-500">
            Control de acceso y trazabilidad como base del diseño, no como un agregado posterior.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[var(--radius-lg)] border border-border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-info-100 text-info-500">
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

import { ArrowUpRight, Briefcase, HeartPulse, Landmark, PiggyBank, ShieldPlus, Umbrella } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, StatusBadge, type StatusTone } from '@coortexxa/ui-kit'
import { demoLinks } from '@/config/demoLinks'

interface Vertical {
  icon: typeof Landmark
  name: string
  description: string
  modules: string[]
  status: 'Demo ready' | 'Next demo' | 'Roadmap'
  href?: string
}

const statusTone: Record<Vertical['status'], StatusTone> = {
  'Demo ready': 'success',
  'Next demo': 'info',
  Roadmap: 'neutral',
}

const verticals: Vertical[] = [
  {
    icon: Landmark,
    name: 'COORTEXXA Bank',
    description: 'Venta y revisión de productos bancarios en canal presencial y terreno.',
    modules: ['Formularios', 'Firma digital', 'Workflow de aprobación', 'KPI ejecutivo'],
    status: 'Demo ready',
    href: demoLinks.bank,
  },
  {
    icon: Briefcase,
    name: 'COORTEXXA Sales',
    description: 'Fuerza de venta en terreno para redes comerciales y distribución.',
    modules: ['Ruta comercial', 'Formularios', 'Ranking de ejecutivos', 'Reportes'],
    status: 'Demo ready',
    href: demoLinks.sales,
  },
  {
    icon: Umbrella,
    name: 'COORTEXXA Insurance',
    description: 'Cotización, emisión y seguimiento de pólizas para aseguradoras.',
    modules: ['Cotizador', 'Firma de póliza', 'Workflow', 'Auditoría'],
    status: 'Roadmap',
  },
  {
    icon: ShieldPlus,
    name: 'COORTEXXA Isapre',
    description: 'Afiliación y gestión documental para procesos de salud previsional.',
    modules: ['Formularios de afiliación', 'Gestión documental', 'Validación', 'Reportes'],
    status: 'Roadmap',
  },
  {
    icon: PiggyBank,
    name: 'COORTEXXA AFP',
    description: 'Afiliación y traspaso previsional con trazabilidad completa.',
    modules: ['Formularios', 'Firma digital', 'Workflow', 'Dashboards por rol'],
    status: 'Roadmap',
  },
  {
    icon: HeartPulse,
    name: 'COORTEXXA Health',
    description: 'Afiliaciones, seguros complementarios y convenios médicos para fuerzas comerciales de salud.',
    modules: ['Formularios de afiliación', 'Gestión documental', 'Revisión y aprobación', 'Ranking ejecutivo'],
    status: 'Demo ready',
    href: demoLinks.health,
  },
]

export function VerticalsSection() {
  return (
    <section id="verticales" className="border-b border-border bg-surface-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Una base, seis verticales
          </h2>
          <p className="mt-4 text-ink-500">
            El mismo núcleo de plataforma, adaptado a la operación y regulación de cada industria.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map(({ icon: Icon, name, description, modules, status, href }) => (
            <Card key={name}>
              <CardHeader className="flex-wrap items-start gap-2">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{name}</CardTitle>
                </div>
                <StatusBadge tone={statusTone[status]} className="shrink-0 whitespace-nowrap">
                  {status}
                </StatusBadge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink-500">{description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {modules.map((mod) => (
                    <li
                      key={mod}
                      className="rounded-full bg-surface-subtle px-2.5 py-1 text-xs font-medium text-ink-500"
                    >
                      {mod}
                    </li>
                  ))}
                </ul>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    Ver demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

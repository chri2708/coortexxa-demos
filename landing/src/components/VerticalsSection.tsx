import {
  ArrowUpRight,
  Briefcase,
  Car,
  HeartPulse,
  Landmark,
  PiggyBank,
  ShoppingBag,
  Umbrella,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, StatusBadge, type StatusTone } from '@coortexxa/ui-kit'
import { demoLinks } from '@/config/demoLinks'

interface Vertical {
  icon: typeof Landmark
  name: string
  description: string
  vende: string
  roles: string
  modules: string[]
  status: 'Demo disponible' | 'Roadmap'
  href?: string
  flagship?: boolean
}

const statusTone: Record<Vertical['status'], StatusTone> = {
  'Demo disponible': 'success',
  Roadmap: 'neutral',
}

const verticals: Vertical[] = [
  {
    icon: Landmark,
    name: 'Bank / POS',
    description:
      'El caso de uso principal de COORTEXXA: venta de POS y productos bancarios en terreno, con ahorro simulado frente al cliente y ranking en tres niveles.',
    vende: 'Máquinas POS, tarjetas, créditos y seguros bancarios',
    roles: 'Banco (mandante) · Dealer · Ejecutivo',
    modules: [
      'Ventas POS',
      'Seguros y productos bancarios',
      'Formularios dinámicos',
      'KPI ejecutivo y dealer',
      'Ranking en 3 niveles',
      'Premios banco→dealer→ejecutivo',
      'Cierre mensual',
    ],
    status: 'Demo disponible',
    href: demoLinks.bank,
    flagship: true,
  },
  {
    icon: HeartPulse,
    name: 'Health',
    description:
      'Afiliación y gestión documental de seguros de salud, con seguimiento comercial y reconocimiento de equipo al cierre de mes.',
    vende: 'Afiliaciones, seguros complementarios y convenios médicos',
    roles: 'Asesor comercial de salud · Cliente/afiliado',
    modules: [
      'Formularios dinámicos',
      'Documentación y estados',
      'KPI por ejecutivo y equipo',
      'Ranking',
      'Premios por campaña',
      'Cierre mensual',
    ],
    status: 'Demo disponible',
    href: demoLinks.health,
  },
  {
    icon: Briefcase,
    name: 'Sales / B2B',
    description:
      'Fuerza de venta en ruta para redes comerciales y distribución, con visita, pedido y ranking en un solo flujo trazable.',
    vende: 'Pedidos y distribución B2B en terreno',
    roles: 'Vendedor en ruta · Supervisor',
    modules: ['Ruta comercial', 'Formularios', 'Ranking de ejecutivos', 'Territorio', 'Reportes'],
    status: 'Demo disponible',
    href: demoLinks.sales,
  },
  {
    icon: ShoppingBag,
    name: 'Retail / Mayorista / Minorista',
    description:
      'Resolverá la cobertura y cumplimiento de ruta: visita a local, pedido, stock y exhibición, con ranking por vendedor y por zona.',
    vende: 'Pedidos, reposición y exhibición en punto de venta',
    roles: 'Vendedor en ruta · Supervisor',
    modules: [
      'Cobertura por zona',
      'Stock y exhibición',
      'Ranking vendedor y equipo',
      'Premios por cumplimiento',
    ],
    status: 'Roadmap',
  },
  {
    icon: Car,
    name: 'Automotora',
    description:
      'Resolverá el seguimiento de oportunidades entre múltiples sucursales, con ranking de vendedores y de sucursales compitiendo por la meta.',
    vende: 'Vehículos y financiamiento asociado',
    roles: 'Vendedor por sucursal · Gerente de sucursal',
    modules: [
      'Pipeline de oportunidad',
      'Ranking entre vendedores',
      'Ranking entre sucursales',
      'Premios por sucursal',
      'Cierre mensual',
    ],
    status: 'Roadmap',
  },
  {
    icon: Umbrella,
    name: 'Insurance',
    description:
      'Resolverá la lentitud entre cotización y emisión de pólizas, con firma digital y auditoría de extremo a extremo.',
    vende: 'Pólizas de seguros generales y de vida',
    roles: 'Corredor · Cliente',
    modules: ['Cotizador', 'Firma de póliza', 'Workflow', 'Auditoría'],
    status: 'Roadmap',
  },
  {
    icon: PiggyBank,
    name: 'AFP / Financial Services',
    description:
      'Resolverá el traspaso previsional con trazabilidad completa, desde la firma hasta la validación interna.',
    vende: 'Afiliación y traspaso previsional',
    roles: 'Ejecutivo · Afiliado',
    modules: ['Formularios', 'Firma digital', 'Workflow', 'Dashboards por rol'],
    status: 'Roadmap',
  },
]

export function VerticalsSection() {
  return (
    <section id="verticales" className="border-b border-border bg-surface-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-500">
            Soluciones por industria
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            El mismo núcleo, adaptado al problema comercial real de cada industria
          </h2>
          <p className="mt-4 text-ink-500">
            COORTEXXA no vende un CRM genérico por industria — adapta sus productos (Field Sales,
            Forms, Ranking & Incentives, KPI Analytics) al flujo comercial específico de cada una.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map(({ icon: Icon, name, description, vende, roles, modules, status, href, flagship }) => (
            <Card
              key={name}
              className={flagship ? 'border-brand-500 ring-1 ring-brand-500 sm:col-span-2 lg:col-span-1' : undefined}
            >
              <CardHeader className="flex-wrap items-start gap-2">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{name}</CardTitle>
                </div>
                <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
                  {flagship && <StatusBadge tone="info">Caso principal</StatusBadge>}
                  <StatusBadge tone={statusTone[status]} className="whitespace-nowrap">
                    {status}
                  </StatusBadge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink-500">{description}</p>

                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-300">
                  Qué vende
                </p>
                <p className="text-xs text-ink-500">{vende}</p>

                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-300">
                  Roles
                </p>
                <p className="text-xs text-ink-500">{roles}</p>

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

                {flagship && (
                  <p className="mt-4 rounded-[var(--radius-sm)] bg-brand-50 px-3 py-2 text-xs font-semibold italic text-brand-700">
                    "Cada venta registrada mueve el ranking del ejecutivo, del dealer y del banco."
                  </p>
                )}

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

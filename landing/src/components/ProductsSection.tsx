import {
  BarChart3,
  FileText,
  Gift,
  LayoutDashboard,
  type LucideIcon,
  MapPin,
  Sparkles,
  Trophy,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, StatusBadge, type StatusTone } from '@coortexxa/ui-kit'

interface Product {
  icon: LucideIcon
  name: string
  description: string
  problema: string
  paraQuien: string
  status: 'Demo' | 'Proyectado' | 'Roadmap'
}

const statusTone: Record<Product['status'], StatusTone> = {
  Demo: 'success',
  Proyectado: 'info',
  Roadmap: 'neutral',
}

const products: Product[] = [
  {
    icon: LayoutDashboard,
    name: 'Command Center',
    description: 'Visión ejecutiva consolidada de toda la operación comercial, por empresa y equipo.',
    problema: 'Reportes armados a mano y siempre atrasados para la gerencia.',
    paraQuien: 'Gerencia y dirección comercial',
    status: 'Demo',
  },
  {
    icon: MapPin,
    name: 'Field Sales',
    description: 'Visita, formulario y venta registrados desde el mismo terreno, sin planillas.',
    problema: 'Visitas sin evidencia ni estructura, dependientes de WhatsApp y memoria.',
    paraQuien: 'Ejecutivos y vendedores en ruta',
    status: 'Demo',
  },
  {
    icon: FileText,
    name: 'Forms',
    description: 'Formularios adaptados por producto e industria, con documentos y firma adjuntos.',
    problema: 'Formularios en papel o Excel, sin validación ni trazabilidad.',
    paraQuien: 'Operaciones y cumplimiento',
    status: 'Demo',
  },
  {
    icon: Trophy,
    name: 'Ranking & Incentives',
    description:
      'Ranking en vivo por ejecutivo, equipo o canal — la mecánica de competencia interna.',
    problema: 'Falta de visibilidad de quién va ganando durante el mes, no solo al cierre.',
    paraQuien: 'Ejecutivos, dealers y supervisores',
    status: 'Demo',
  },
  {
    icon: BarChart3,
    name: 'KPI Analytics',
    description: 'Indicadores comerciales por rol, con comparativos período a período.',
    problema: 'Decisiones tomadas sin datos consolidados y a tiempo.',
    paraQuien: 'Supervisores y gerencia',
    status: 'Demo',
  },
  {
    icon: Gift,
    name: 'Rewards / Premios',
    description: 'Reglas de premiación por meta o campaña, con historial de premiación.',
    problema: 'Incentivos gestionados fuera de sistema, en planillas manuales.',
    paraQuien: 'Gerencia comercial y RRHH comercial',
    status: 'Roadmap',
  },
  {
    icon: Sparkles,
    name: 'COORTEXXA Intelligence',
    description:
      'COORTEXXA Intelligence transforma los datos de terreno en recomendaciones comerciales para vender mejor, corregir a tiempo y cerrar el mes con resultados visibles.',
    problema: 'Datos de terreno que hoy no se traducen en recomendaciones accionables.',
    paraQuien: 'Toda la operación comercial',
    status: 'Proyectado',
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Productos COORTEXXA
          </h2>
          <p className="mt-4 text-ink-500">
            Capacidades transversales que se combinan según la operación de cada empresa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ icon: Icon, name, description, problema, paraQuien, status }) => (
            <Card
              key={name}
              className={status === 'Proyectado' ? 'border-dashed border-brand-300' : undefined}
            >
              <CardHeader className="flex-wrap items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <StatusBadge tone={statusTone[status]} className="shrink-0 whitespace-nowrap">
                  {status}
                </StatusBadge>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-base">{name}</CardTitle>
                <p className="mt-2 text-sm text-ink-500">{description}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-300">
                  Resuelve
                </p>
                <p className="text-xs text-ink-500">{problema}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-300">
                  Para quién
                </p>
                <p className="text-xs text-ink-500">{paraQuien}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-300">
          COORTEXXA Intelligence es una capa proyectada de IA — demo conceptual, preparado para IA
          aplicada con recomendaciones simuladas. No constituye una función autónoma real todavía.
        </p>
      </div>
    </section>
  )
}

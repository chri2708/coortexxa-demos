import { useState, type ComponentType } from 'react'
import { ArrowUpRight, BarChart3, Briefcase, Building2, HeartPulse, Landmark, LayoutDashboard, Receipt, Settings, Users } from 'lucide-react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DashboardShell,
  MetricCard,
  StatusBadge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  type SidebarItem,
} from '@coortexxa/ui-kit'
import { ejecutivos, empresas, kpiActual, kpisMensuales, ventas } from '@coortexxa/mock-data'
import { demoLinks } from '@/config/demoLinks'

const otrosDemos = [
  { icon: Landmark, name: 'COORTEXXA Bank', href: demoLinks.bank },
  { icon: Briefcase, name: 'COORTEXXA Sales', href: demoLinks.sales },
  { icon: HeartPulse, name: 'COORTEXXA Health', href: demoLinks.health },
]

type SectionId = 'dashboard' | 'empresas' | 'ejecutivos' | 'ventas' | 'reportes' | 'configuracion'

interface SectionDef {
  id: SectionId
  label: string
  icon: ComponentType<{ className?: string }>
  description: string
  metrics: { label: string; value: string }[]
}

const sections: SectionDef[] = [
  {
    id: 'dashboard',
    label: 'Command Center',
    icon: LayoutDashboard,
    description: '',
    metrics: [],
  },
  {
    id: 'empresas',
    label: 'Empresas',
    icon: Building2,
    description: 'Directorio de empresas clientes, contratos y estado de cuenta por vertical.',
    metrics: [
      { label: 'Empresas registradas', value: '12' },
      { label: 'Contratos activos', value: '9' },
      { label: 'Renovaciones este mes', value: '2' },
    ],
  },
  {
    id: 'ejecutivos',
    label: 'Ejecutivos',
    icon: Users,
    description: 'Perfil, metas y desempeño de cada ejecutivo comercial por región.',
    metrics: [
      { label: 'Ejecutivos activos', value: '8' },
      { label: 'Meta cumplida (prom.)', value: '87%' },
      { label: 'Top performer', value: 'Camila Rojas' },
    ],
  },
  {
    id: 'ventas',
    label: 'Ventas',
    icon: Receipt,
    description: 'Historial completo de ventas con filtros avanzados y exportación.',
    metrics: [
      { label: 'Ventas del mes', value: '$48.550.000' },
      { label: 'Ticket promedio', value: '$850.000' },
      { label: 'Conversión', value: '62%' },
    ],
  },
  {
    id: 'reportes',
    label: 'Reportes',
    icon: BarChart3,
    description: 'Reportes exportables (PDF/Excel) por vertical, periodo y equipo.',
    metrics: [
      { label: 'Reportes generados', value: '4' },
      { label: 'Formatos disponibles', value: 'PDF / Excel' },
      { label: 'Última exportación', value: 'Hace 2 días' },
    ],
  },
  {
    id: 'configuracion',
    label: 'Configuración',
    icon: Settings,
    description: 'Marca, roles, permisos e integraciones de la cuenta.',
    metrics: [
      { label: 'Roles configurados', value: '3' },
      { label: 'Integraciones activas', value: '0' },
      { label: 'Usuarios con acceso', value: '6' },
    ],
  },
]

const estadoTone = {
  APROBADA: 'success',
  EN_REVISION: 'info',
  PENDIENTE: 'warning',
  RECHAZADA: 'danger',
} as const

const money = (n: number) =>
  n === 0
    ? '—'
    : new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n)

function empresaNombre(id: string) {
  return empresas.find((e) => e.id === id)?.nombre ?? '—'
}

function ejecutivoNombre(id: string) {
  return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
}

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('dashboard')
  const maxVentas = Math.max(...kpisMensuales.map((k) => k.ventasTotales))

  const navItems: SidebarItem[] = sections.map((s) => ({
    label: s.label,
    icon: s.icon,
    active: activeSection === s.id,
    onClick: () => setActiveSection(s.id),
  }))

  const current = sections.find((s) => s.id === activeSection)!

  if (activeSection !== 'dashboard') {
    return (
      <DashboardShell
        navItems={navItems}
        topbarTitle={current.label}
        topbarDescription="Visión ejecutiva consolidada — todas las empresas"
        userName="Gerencia COORTEXXA"
      >
        <Card>
          <CardHeader className="flex-wrap items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                <current.icon className="h-5 w-5" />
              </div>
              <CardTitle>{current.label}</CardTitle>
            </div>
            <StatusBadge tone="warning">Módulo en preparación</StatusBadge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-ink-500">{current.description}</p>
            <p className="mt-2 text-sm text-ink-500">
              Vista de demo — los datos abajo son de ejemplo para mostrar cómo se vería esta sección; el módulo
              real (con datos y persistencia) se habilita en una fase posterior.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {current.metrics.map((m) => (
                <MetricCard key={m.label} label={m.label} value={m.value} delta="Dato de ejemplo" />
              ))}
            </div>
          </CardContent>
        </Card>
      </DashboardShell>
    )
  }

  return (
    <DashboardShell
      navItems={navItems}
      topbarTitle="Command Center"
      topbarDescription="Visión ejecutiva consolidada — todas las empresas"
      userName="Gerencia COORTEXXA"
    >
      <section className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
        <MetricCard label="Ventas hoy" value={String(kpiActual.ventasHoy)} delta="12% vs. ayer" />
        <MetricCard label="Monto hoy" value={money(kpiActual.montoHoy)} delta="8% vs. ayer" />
        <MetricCard
          label="Pendientes de revisión"
          value={String(kpiActual.pendientesRevision)}
          delta="3 nuevas"
          deltaTone="down"
        />
        <MetricCard label="SLA promedio" value={`${kpiActual.slaPromedioHoras} h`} delta="0.4h mejor" />
      </section>

      <section className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Ventas por mes</CardTitle>
            <span className="text-xs text-ink-500">Últimos 6 meses</span>
          </CardHeader>
          <CardContent>
            <div className="flex h-32 items-end gap-4">
              {kpisMensuales.map((k) => (
                <div
                  key={k.mes}
                  className="flex-1 rounded-t-md bg-brand-500 transition-all"
                  style={{ height: `${(k.ventasTotales / maxVentas) * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex gap-4">
              {kpisMensuales.map((k) => (
                <span key={k.mes} className="flex-1 text-center text-xs text-ink-500">
                  {k.mes}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top ejecutivos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-4">
              {ejecutivos
                .slice()
                .sort((a, b) => b.ventasMes - a.ventasMes)
                .map((e) => (
                  <li key={e.id} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-ink-900">{e.nombre}</p>
                      <p className="text-xs text-ink-500">{e.region}</p>
                    </div>
                    <span className="font-semibold text-ink-900">
                      {e.ventasMes}/{e.metaMes}
                    </span>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Ventas recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Folio</TableHeaderCell>
                <TableHeaderCell>Empresa</TableHeaderCell>
                <TableHeaderCell>Ejecutivo</TableHeaderCell>
                <TableHeaderCell>Producto</TableHeaderCell>
                <TableHeaderCell>Monto</TableHeaderCell>
                <TableHeaderCell>Estado</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ventas.map((v) => (
                <TableRow key={v.id}>
                  <TableCell className="font-medium text-ink-900">{v.folio}</TableCell>
                  <TableCell>{empresaNombre(v.empresaId)}</TableCell>
                  <TableCell>{ejecutivoNombre(v.ejecutivoId)}</TableCell>
                  <TableCell>{v.producto}</TableCell>
                  <TableCell>{money(v.monto)}</TableCell>
                  <TableCell>
                    <StatusBadge tone={estadoTone[v.estado]}>{v.estado.replace('_', ' ')}</StatusBadge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Otros demos</CardTitle>
          <span className="text-xs text-ink-500">Verticales COORTEXXA disponibles</span>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otrosDemos.map(({ icon: Icon, name, href }) => (
              <div key={name} className="flex items-center justify-between rounded-[var(--radius-md)] border border-border p-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-ink-900">{name}</span>
                </div>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Ver <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

export default App

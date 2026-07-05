import {
  BarChart3,
  Building2,
  LayoutDashboard,
  Receipt,
  Settings,
  Users,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  MetricCard,
  Sidebar,
  StatusBadge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Topbar,
  type SidebarItem,
} from '@coortexxa/ui-kit'
import { ejecutivos, empresas, kpiActual, kpisMensuales, ventas } from '@coortexxa/mock-data'

const navItems: SidebarItem[] = [
  { label: 'Command Center', icon: LayoutDashboard, active: true },
  { label: 'Empresas', icon: Building2 },
  { label: 'Ejecutivos', icon: Users },
  { label: 'Ventas', icon: Receipt },
  { label: 'Reportes', icon: BarChart3 },
  { label: 'Configuración', icon: Settings },
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
  const maxVentas = Math.max(...kpisMensuales.map((k) => k.ventasTotales))

  return (
    <div className="flex min-h-screen bg-surface-subtle">
      <Sidebar items={navItems} />

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <Topbar
          title="Command Center"
          description="Visión ejecutiva consolidada — todas las empresas"
          userName="Gerencia COORTEXXA"
        />

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
      </main>
    </div>
  )
}

export default App

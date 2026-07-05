import { Badge, KpiCard, Sidebar } from '@coortexxa/ui-kit'
import { ejecutivos, empresas, kpiActual, kpisMensuales, ventas } from '@coortexxa/mock-data'

const navItems = [
  { label: 'Command Center', active: true },
  { label: 'Empresas' },
  { label: 'Ejecutivos' },
  { label: 'Ventas' },
  { label: 'Reportes' },
  { label: 'Configuración' },
]

const estadoTone = {
  APROBADA: 'success',
  EN_REVISION: 'info',
  PENDIENTE: 'warning',
  RECHAZADA: 'danger',
} as const

const money = (n: number) =>
  n === 0 ? '—' : new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n)

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

      <main className="flex-1 px-10 py-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-ink-900">Command Center</h1>
            <p className="text-sm text-ink-500">Visión ejecutiva consolidada — todas las empresas</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-brand-500" />
            <span className="text-sm font-medium text-ink-700">Gerencia COORTEXXA</span>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-4 gap-4">
          <KpiCard label="Ventas hoy" value={String(kpiActual.ventasHoy)} delta="12% vs. ayer" />
          <KpiCard label="Monto hoy" value={money(kpiActual.montoHoy)} delta="8% vs. ayer" />
          <KpiCard label="Pendientes de revisión" value={String(kpiActual.pendientesRevision)} delta="3 nuevas" deltaTone="down" />
          <KpiCard label="SLA promedio" value={`${kpiActual.slaPromedioHoras} h`} delta="0.4h mejor" />
        </section>

        <section className="mb-8 grid grid-cols-3 gap-6">
          <div className="col-span-2 rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-ink-900">Ventas por mes</h2>
              <span className="text-xs text-ink-500">Últimos 6 meses</span>
            </div>
            <div className="flex h-32 items-end gap-4">
              {kpisMensuales.map((k) => (
                <div
                  key={k.mes}
                  className="flex-1 rounded-t-md bg-brand-500"
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
          </div>

          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-sm font-semibold text-ink-900">Top ejecutivos</h2>
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
                    <span className="font-semibold text-ink-900">{e.ventasMes}/{e.metaMes}</span>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
          <h2 className="mb-4 text-sm font-semibold text-ink-900">Ventas recientes</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-ink-500">
                <th className="pb-3 font-medium">Folio</th>
                <th className="pb-3 font-medium">Empresa</th>
                <th className="pb-3 font-medium">Ejecutivo</th>
                <th className="pb-3 font-medium">Producto</th>
                <th className="pb-3 font-medium">Monto</th>
                <th className="pb-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((v) => (
                <tr key={v.id} className="border-b border-border last:border-0">
                  <td className="py-3 font-medium text-ink-900">{v.folio}</td>
                  <td className="py-3 text-ink-700">{empresaNombre(v.empresaId)}</td>
                  <td className="py-3 text-ink-700">{ejecutivoNombre(v.ejecutivoId)}</td>
                  <td className="py-3 text-ink-700">{v.producto}</td>
                  <td className="py-3 text-ink-700">{money(v.monto)}</td>
                  <td className="py-3">
                    <Badge tone={estadoTone[v.estado]}>{v.estado.replace('_', ' ')}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default App

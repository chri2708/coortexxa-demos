import { Card, CardContent, CardHeader, CardTitle, MetricCard } from '@coortexxa/ui-kit'
import { ejecutivos, kpiActual, ventas } from '@coortexxa/mock-data'

const pipeline = [
  { estado: 'Pendiente', count: ventas.filter((v) => v.estado === 'PENDIENTE').length },
  { estado: 'En revisión', count: ventas.filter((v) => v.estado === 'EN_REVISION').length },
  { estado: 'Aprobada', count: ventas.filter((v) => v.estado === 'APROBADA').length },
  { estado: 'Rechazada', count: ventas.filter((v) => v.estado === 'RECHAZADA').length },
]

const dotClasses = {
  warning: 'bg-warning-500',
  info: 'bg-info-500',
  danger: 'bg-danger-500',
} as const

const alertas = [
  { tone: 'warning' as const, text: '3 ventas llevan más de 24h sin revisión' },
  { tone: 'info' as const, text: 'Nueva firma pendiente de validación' },
  { tone: 'danger' as const, text: '1 venta rechazada requiere seguimiento' },
]

export function CommandCenterPreview() {
  return (
    <section id="command-center" className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Un Command Center para la gerencia
          </h2>
          <p className="mt-4 text-ink-500">
            Vista previa del dashboard ejecutivo. Datos de ejemplo — así se ve el control operativo
            consolidado en tiempo real.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-[var(--radius-lg)] border border-border bg-surface-subtle p-4 shadow-[var(--shadow-lg)] sm:p-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Ventas hoy" value={String(kpiActual.ventasHoy)} delta="12% vs. ayer" />
            <MetricCard label="Pendientes de revisión" value={String(kpiActual.pendientesRevision)} delta="3 nuevas" deltaTone="down" />
            <MetricCard label="SLA promedio" value={`${kpiActual.slaPromedioHoras} h`} delta="0.4h mejor" />
            <MetricCard label="Ejecutivos activos" value={String(ejecutivos.length)} delta="estable" />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Pipeline de ventas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {pipeline.map((stage) => (
                    <div key={stage.estado} className="flex items-center gap-3">
                      <span className="w-28 shrink-0 text-sm text-ink-500">{stage.estado}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-subtle">
                        <div
                          className="h-full rounded-full bg-brand-500"
                          style={{ width: `${(stage.count / ventas.length) * 100}%` }}
                        />
                      </div>
                      <span className="w-6 shrink-0 text-right text-sm font-semibold text-ink-900">
                        {stage.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alertas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {alertas.map((alerta) => (
                    <li key={alerta.text} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotClasses[alerta.tone]}`} />
                      <span className="text-sm text-ink-700">{alerta.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-5">
            <CardHeader>
              <CardTitle>Ranking de ejecutivos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ejecutivos
                  .slice()
                  .sort((a, b) => b.ventasMes - a.ventasMes)
                  .map((e) => (
                    <li key={e.id} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink-900">{e.nombre}</span>
                      <span className="text-ink-500">
                        {e.ventasMes}/{e.metaMes}
                      </span>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

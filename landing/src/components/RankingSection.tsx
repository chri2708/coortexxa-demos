import { ArrowUp, Minus, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos, ventas } from '@coortexxa/mock-data'
import { money } from '@/lib/format'

const ranking = ejecutivos
  .slice()
  .sort((a, b) => b.ventasMes - a.ventasMes)

const tendencia = ['up', 'up', 'same', 'up', 'same'] as const

const ultimaVenta = ventas
  .slice()
  .filter((v) => v.estado === 'APROBADA')
  .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))[0]

function ejecutivoNombre(id: string) {
  return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
}

export function RankingSection() {
  return (
    <section className="border-b border-border bg-surface-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Cada venta mueve la tabla.
          </h2>
          <p className="mt-4 text-ink-500">
            COORTEXXA permite que la fuerza comercial vea cómo evoluciona el ranking durante el mes.
            Cada venta registrada impacta los KPI, la posición del ejecutivo y la competencia interna.
          </p>
          <p className="mt-2 text-xs text-ink-300">
            Flujo demostrativo con datos simulados — preparado para operación en tiempo real.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Ranking del mes</CardTitle>
              <span className="text-xs text-ink-500">Datos simulados</span>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {ranking.map((e, index) => {
                  const avance = Math.min(Math.round((e.ventasMes / e.metaMes) * 100), 999)
                  const tendenciaItem = tendencia[index] ?? 'same'
                  return (
                    <li
                      key={e.id}
                      className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-border p-3"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                          index === 0 ? 'bg-brand-500 text-white' : 'bg-surface-subtle text-ink-500'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-sm font-medium text-ink-900">{e.nombre}</p>
                          <span className="shrink-0 text-xs text-ink-500">
                            {e.ventasMes}/{e.metaMes}
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-subtle">
                          <div
                            className="h-full rounded-full bg-brand-500"
                            style={{ width: `${Math.min(avance, 100)}%` }}
                          />
                        </div>
                      </div>
                      <span className="flex w-10 shrink-0 items-center justify-end gap-1 text-xs font-medium text-ink-500">
                        {tendenciaItem === 'up' ? (
                          <ArrowUp className="h-3.5 w-3.5 text-success-500" />
                        ) : (
                          <Minus className="h-3.5 w-3.5 text-ink-300" />
                        )}
                        {avance}%
                      </span>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-brand-600">
                  <Trophy className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Ganador proyectado</span>
                </div>
                <p className="mt-2 text-lg font-bold text-ink-900">{ranking[0].nombre}</p>
                <p className="text-sm text-ink-500">{ranking[0].region}</p>
                <StatusBadge tone="success" className="mt-3">
                  {Math.round((ranking[0].ventasMes / ranking[0].metaMes) * 100)}% de la meta
                </StatusBadge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Última venta registrada
                </p>
                {ultimaVenta && (
                  <>
                    <p className="mt-2 text-sm font-semibold text-ink-900">{ultimaVenta.producto}</p>
                    <p className="text-sm text-ink-500">{ejecutivoNombre(ultimaVenta.ejecutivoId)}</p>
                    <p className="mt-1 text-lg font-bold text-ink-900">{money(ultimaVenta.monto)}</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

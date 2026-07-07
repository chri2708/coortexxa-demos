import { Award } from 'lucide-react'
import { StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'

const ranking = ejecutivos.slice().sort((a, b) => b.ventasMes - a.ventasMes)
const ganador = ranking[0]

const metaEquipo = ejecutivos.reduce((acc, e) => acc + e.metaMes, 0)
const logradoEquipo = ejecutivos.reduce((acc, e) => acc + e.ventasMes, 0)
const cumplimientoEquipo = Math.round((logradoEquipo / metaEquipo) * 100)

export function MonthCloseSection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Cierre de mes, con reconocimiento visible
          </h2>
          <p className="mt-4 text-ink-500">
            COORTEXXA transforma el cierre de mes en un momento visible de reconocimiento comercial:
            resultados, ranking final y ganador destacado.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-gradient-to-br from-ink-900 to-brand-900 shadow-[var(--shadow-lg)]">
          <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                <Award className="h-3.5 w-3.5" /> Ganador del mes
              </span>
              <p className="mt-4 text-2xl font-bold text-white">{ganador.nombre}</p>
              <p className="text-sm text-ink-300">{ganador.region}</p>
              <StatusBadge tone="success" className="mt-4">
                {Math.round((ganador.ventasMes / ganador.metaMes) * 100)}% de la meta individual
              </StatusBadge>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-2">
              <div className="rounded-[var(--radius-md)] bg-white/5 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-300">
                  Meta mensual del equipo
                </p>
                <p className="mt-2 text-2xl font-bold text-white">{metaEquipo}</p>
                <p className="text-xs text-ink-300">ventas comprometidas</p>
              </div>
              <div className="rounded-[var(--radius-md)] bg-white/5 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-300">
                  Cumplimiento del equipo
                </p>
                <p className="mt-2 text-2xl font-bold text-white">{cumplimientoEquipo}%</p>
                <p className="text-xs text-ink-300">{logradoEquipo} de {metaEquipo} ventas</p>
              </div>
              <div className="col-span-2 rounded-[var(--radius-md)] bg-white/5 p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink-300">
                  Top 3 del cierre
                </p>
                <ul className="flex flex-col gap-2">
                  {ranking.slice(0, 3).map((e, i) => (
                    <li key={e.id} className="flex items-center justify-between text-sm">
                      <span className="text-white">
                        {i + 1}. {e.nombre}
                      </span>
                      <span className="text-ink-300">
                        {e.ventasMes}/{e.metaMes}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-ink-300">
          Cifras de ejemplo — el cierre de mes real se calcula sobre datos operativos del cliente.
        </p>
      </div>
    </section>
  )
}

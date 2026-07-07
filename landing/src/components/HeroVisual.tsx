import { MapPin, TrendingUp, Trophy } from 'lucide-react'
import { StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { money } from '@/lib/format'

const topEjecutivos = ejecutivos
  .slice()
  .sort((a, b) => b.ventasMes - a.ventasMes)
  .slice(0, 3)

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div className="absolute -inset-x-6 -top-10 -z-10 h-[420px] rounded-[40px] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-900 opacity-20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-brand-600 to-brand-900 p-6 shadow-[var(--shadow-lg)] sm:p-8">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> Diseñada desde terreno
          </span>
          <span className="hidden text-xs text-white/60 sm:block">Visita en curso · comercio demo</span>
        </div>

        <div className="relative mt-8 flex justify-center pb-4">
          {/* Mockup de tablet/celular con la plataforma */}
          <div className="w-[240px] shrink-0 rounded-[26px] border-4 border-ink-900/30 bg-surface p-3 shadow-2xl">
            <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-ink-900/10" />
            <div className="rounded-[var(--radius-sm)] bg-brand-50 px-3 py-2 text-[11px] font-semibold text-brand-700">
              COORTEXXA Bank · Visita
            </div>
            <div className="mt-2 rounded-[var(--radius-sm)] bg-surface-subtle p-3">
              <p className="text-[10px] uppercase tracking-wide text-ink-500">Ahorro simulado</p>
              <p className="mt-1 text-lg font-bold text-ink-900">$412.000/mes</p>
              <p className="text-[10px] text-success-500">vs. proveedor actual</p>
            </div>
            <div className="mt-2 rounded-[var(--radius-sm)] bg-surface-subtle p-3">
              <p className="mb-1.5 text-[10px] uppercase tracking-wide text-ink-500">Ranking del mes</p>
              <ul className="flex flex-col gap-1">
                {topEjecutivos.map((e, i) => (
                  <li key={e.id} className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 font-medium text-ink-900">
                      <span className="text-ink-300">{i + 1}.</span> {e.nombre.split(' ')[0]}
                    </span>
                    <span className="text-ink-500">
                      {e.ventasMes}/{e.metaMes}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tarjeta flotante — ahorro */}
          <div className="absolute -left-2 top-4 hidden w-40 rounded-[var(--radius-md)] border border-border bg-surface p-3 shadow-[var(--shadow-lg)] sm:block">
            <div className="flex items-center gap-1.5 text-success-500">
              <TrendingUp className="h-3.5 w-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-wide">Simulador POS</span>
            </div>
            <p className="mt-1 text-sm font-bold text-ink-900">{money(4_944_000)}</p>
            <p className="text-[10px] text-ink-500">ahorro anual estimado</p>
          </div>

          {/* Tarjeta flotante — ranking */}
          <div className="absolute -right-3 bottom-0 hidden w-36 rounded-[var(--radius-md)] border border-border bg-surface p-3 shadow-[var(--shadow-lg)] sm:block">
            <div className="flex items-center gap-1.5 text-brand-600">
              <Trophy className="h-3.5 w-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-wide">Líder proyectado</span>
            </div>
            <p className="mt-1 text-sm font-bold text-ink-900">{topEjecutivos[0].nombre}</p>
            <StatusBadge tone="success" className="mt-1">
              105% de la meta
            </StatusBadge>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-ink-300">
        Vista conceptual del producto — pantallas ilustrativas con datos de ejemplo, sujetas a diseño final.
      </p>
    </div>
  )
}

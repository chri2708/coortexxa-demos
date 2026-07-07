import { ArrowRight, Award, BarChart3, Flag, MapPin, ShoppingCart, Trophy } from 'lucide-react'

const flow = [
  { icon: MapPin, label: 'Terreno' },
  { icon: ShoppingCart, label: 'Ventas' },
  { icon: BarChart3, label: 'KPI' },
  { icon: Trophy, label: 'Ranking' },
  { icon: Award, label: 'Incentivos' },
  { icon: Flag, label: 'Cierre mensual' },
]

export function WhatIsSection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-10">
        <span className="inline-flex items-center rounded-full border border-border bg-surface-subtle px-3 py-1 text-xs font-medium text-ink-500">
          ¿Qué es COORTEXXA?
        </span>

        <p className="mx-auto mt-6 max-w-3xl text-balance text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
          COORTEXXA es una plataforma comercial diseñada desde terreno para gestionar fuerzas de
          venta, dealers, sucursales y canales comerciales mediante ventas en línea, KPI, ranking,
          incentivos, formularios dinámicos y cierre mensual con resultados visibles.
        </p>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-4">
          {flow.map(({ icon: Icon, label }, index) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-ink-700">{label}</span>
              </div>
              {index < flow.length - 1 && (
                <ArrowRight className="mb-5 h-4 w-4 shrink-0 text-ink-300" />
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl rounded-[var(--radius-lg)] border border-brand-500 bg-brand-50 px-6 py-4 text-lg font-semibold text-brand-700">
          "Un CRM registra. COORTEXXA mueve la conducta comercial."
        </p>
      </div>
    </section>
  )
}

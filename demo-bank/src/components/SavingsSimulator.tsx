import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, MetricCard } from '@coortexxa/ui-kit'
import { money } from '@/lib/format'

const TASA_DEMO_COORTEXXA = 1.35

export function SavingsSimulator() {
  const [montoMensual, setMontoMensual] = useState(15_000_000)
  const [tasaActual, setTasaActual] = useState(2.5)

  const costoActual = montoMensual * (tasaActual / 100)
  const costoCoortexxa = montoMensual * (TASA_DEMO_COORTEXXA / 100)
  const ahorroMensual = Math.max(costoActual - costoCoortexxa, 0)
  const ahorroAnual = ahorroMensual * 12

  return (
    <Card>
      <CardHeader>
        <CardTitle>Simulador de ahorro POS</CardTitle>
        <span className="text-xs text-ink-500">Cifras de ejemplo, no constituyen una cotización</span>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <label className="block">
              <span className="text-sm font-medium text-ink-700">Monto mensual transado</span>
              <input
                type="range"
                min={1_000_000}
                max={80_000_000}
                step={500_000}
                value={montoMensual}
                onChange={(event) => setMontoMensual(Number(event.target.value))}
                className="mt-2 w-full accent-brand-500"
              />
              <span className="mt-1 block text-lg font-semibold text-ink-900">{money(montoMensual)}</span>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-ink-700">Tasa actual de tu proveedor (%)</span>
              <input
                type="range"
                min={1}
                max={4}
                step={0.1}
                value={tasaActual}
                onChange={(event) => setTasaActual(Number(event.target.value))}
                className="mt-2 w-full accent-brand-500"
              />
              <span className="mt-1 block text-lg font-semibold text-ink-900">{tasaActual.toFixed(1)}%</span>
            </label>

            <p className="text-xs text-ink-500">
              Tasa demo COORTEXXA Bank usada en la simulación: {TASA_DEMO_COORTEXXA}%
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <MetricCard label="Costo actual mensual" value={money(costoActual)} />
            <MetricCard label="Costo con COORTEXXA" value={money(costoCoortexxa)} />
            <MetricCard label="Ahorro mensual estimado" value={money(ahorroMensual)} delta="vs. proveedor actual" />
            <MetricCard label="Ahorro anual estimado" value={money(ahorroAnual)} delta="proyectado" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

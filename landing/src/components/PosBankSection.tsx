import { CloudOff, CreditCard, Store } from 'lucide-react'
import { StatusBadge } from '@coortexxa/ui-kit'
import { money } from '@/lib/format'

const montoMensual = 18_000_000

const proveedores = [
  { nombre: 'Proveedor actual', tasa: 2.8 },
  { nombre: 'Competencia A', tasa: 2.3 },
  { nombre: 'Propuesta COORTEXXA', tasa: 1.35 },
]

const costos = proveedores.map((p) => ({ ...p, costo: montoMensual * (p.tasa / 100) }))
const ahorroMensual = costos[0].costo - costos[2].costo

export function PosBankSection() {
  return (
    <section className="border-b border-border bg-surface-sidebar py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
            <CreditCard className="h-3.5 w-3.5" /> Caso de uso — Bank / POS
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            El ejecutivo no solo ofrece un POS.
            <br />
            Demuestra ahorro, respalda la venta y acelera el cierre.
          </h2>
          <p className="mt-5 max-w-lg text-ink-300">
            En terreno, frente al comercio, el ejecutivo simula el costo real de la máquina de pago,
            compara contra el adquirente actual del cliente y deja la propuesta lista para firmar —
            sin planillas ni cálculos manuales.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-ink-300">
            <li>· Comparativo de costo actual vs. propuesta, en vivo</li>
            <li>· Simulación de ahorro mensual y anual</li>
            <li>· Formulario, firma y respaldo documental en la misma visita</li>
            <li>· Funciona sin conexión: la venta se guarda y sincroniza sola al volver la señal</li>
          </ul>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-white/10 bg-surface p-6 shadow-[var(--shadow-lg)] sm:p-8">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                <Store className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">Minimarket El Sol (demo)</p>
                <p className="text-xs text-ink-500">Adquirente actual: Proveedor actual</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <StatusBadge tone="info">Visita en curso</StatusBadge>
              <span className="flex items-center gap-1 text-[10px] text-ink-500">
                <CloudOff className="h-3 w-3" /> Sin señal — guardando localmente
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            {costos.map((p, i) => (
              <div
                key={p.nombre}
                className={`flex items-center justify-between rounded-[var(--radius-sm)] border px-3.5 py-2.5 ${
                  i === 2 ? 'border-brand-500 bg-brand-50' : 'border-border'
                }`}
              >
                <div>
                  <p className={`text-sm font-medium ${i === 2 ? 'text-brand-700' : 'text-ink-900'}`}>
                    {p.nombre}
                  </p>
                  <p className="text-xs text-ink-500">Tasa {p.tasa.toFixed(2)}%</p>
                </div>
                <p className={`text-sm font-semibold ${i === 2 ? 'text-brand-700' : 'text-ink-900'}`}>
                  {money(p.costo)}
                  <span className="ml-1 text-xs font-normal text-ink-500">/mes</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[var(--radius-md)] bg-brand-600 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-white/70">
              Ahorro mensual estimado
            </p>
            <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Este comercio podría ahorrar {money(ahorroMensual)} al mes
            </p>
          </div>
          <p className="mt-3 text-center text-xs text-ink-300">
            Cifras de ejemplo con fines demostrativos — no constituyen una cotización real.
          </p>
        </div>
      </div>
    </section>
  )
}

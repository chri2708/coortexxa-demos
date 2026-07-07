import { useState, type ReactNode } from 'react'
import {
  Award,
  BarChart3,
  Building2,
  CloudOff,
  FileText,
  LayoutDashboard,
  Megaphone,
  PlusCircle,
  Trophy,
  Users,
  Workflow,
} from 'lucide-react'
import { RoleSwitcher, StatusBadge, type StatusTone } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { money } from '@/lib/format'

type RoleKey = 'ejecutivo' | 'dealer' | 'banco'

const roleOptions = [
  { value: 'ejecutivo', label: 'Ejecutivo' },
  { value: 'dealer', label: 'Dealer / Supervisor' },
  { value: 'banco', label: 'Banco / Mandante' },
]

const realTone: Record<'real' | 'proximo', StatusTone> = {
  real: 'success',
  proximo: 'neutral',
}

function RealTag({ tipo }: { tipo: 'real' | 'proximo' }) {
  return (
    <StatusBadge tone={realTone[tipo]} className="whitespace-nowrap text-[10px]">
      {tipo === 'real' ? 'En demo real' : 'Próxima fase'}
    </StatusBadge>
  )
}

const ranking = ejecutivos.slice().sort((a, b) => b.ventasMes - a.ventasMes)

function EjecutivoMockup() {
  return (
    <div className="flex min-h-[420px] overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-[var(--shadow-lg)]">
      <div className="hidden w-48 shrink-0 flex-col gap-1 bg-surface-sidebar p-4 sm:flex">
        {[
          { label: 'Dashboard Bank', icon: LayoutDashboard, active: true },
          { label: 'Pipeline', icon: Workflow },
          { label: 'Nueva solicitud', icon: PlusCircle },
          { label: 'Simulador POS', icon: BarChart3 },
          { label: 'Ranking y cierre', icon: Trophy },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 rounded-[var(--radius-sm)] px-2.5 py-2 text-xs font-medium ${
              item.active ? 'bg-brand-500 text-white' : 'text-ink-300'
            }`}
          >
            <item.icon className="h-3.5 w-3.5" />
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex-1 bg-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-900">Dashboard Bank — Camila Rojas</p>
          <RealTag tipo="real" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Solicitudes activas</p>
            <p className="text-lg font-bold text-ink-900">6</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Monto en cartera</p>
            <p className="text-lg font-bold text-ink-900">{money(1_760_000)}</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Aprobadas</p>
            <p className="text-lg font-bold text-ink-900">1</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">En revisión</p>
            <p className="text-lg font-bold text-ink-900">2</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="mb-2 text-xs font-semibold text-ink-900">Mis ventas por estado</p>
            <div className="flex flex-wrap gap-1.5">
              <StatusBadge tone="warning">Pendiente · 2</StatusBadge>
              <StatusBadge tone="info">En revisión · 2</StatusBadge>
              <StatusBadge tone="success">Aprobada · 1</StatusBadge>
              <StatusBadge tone="danger">Rechazada · 1</StatusBadge>
            </div>
            <p className="mt-2 flex items-center gap-1 text-[10px] text-ink-300">
              <CloudOff className="h-3 w-3" /> Guardadas aunque el ejecutivo se quede sin conexión
            </p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="mb-2 text-xs font-semibold text-ink-900">Simulador de ahorro</p>
            <p className="text-[10px] text-ink-500">Ahorro mensual estimado vs. proveedor actual</p>
            <p className="text-lg font-bold text-success-500">{money(412_000)}</p>
          </div>
        </div>

        <div className="mt-3 rounded-[var(--radius-sm)] border border-border p-3">
          <p className="mb-2 text-xs font-semibold text-ink-900">Ranking del mes</p>
          <ul className="flex flex-col gap-1">
            {ranking.slice(0, 3).map((e, i) => (
              <li key={e.id} className="flex items-center justify-between text-xs">
                <span className="text-ink-900">
                  {i + 1}. {e.nombre}
                </span>
                <span className="text-ink-500">
                  {e.ventasMes}/{e.metaMes}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function DealerMockup() {
  return (
    <div className="flex min-h-[420px] overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-[var(--shadow-lg)]">
      <div className="hidden w-48 shrink-0 flex-col gap-1 bg-surface-sidebar p-4 sm:flex">
        {[
          { label: 'Dashboard equipo', icon: LayoutDashboard, active: true },
          { label: 'Ventas por ejecutivo', icon: Users },
          { label: 'Ranking interno', icon: Trophy },
          { label: 'Premios del equipo', icon: Award },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 rounded-[var(--radius-sm)] px-2.5 py-2 text-xs font-medium ${
              item.active ? 'bg-brand-500 text-white' : 'text-ink-300'
            }`}
          >
            <item.icon className="h-3.5 w-3.5" />
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex-1 bg-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-900">Dashboard equipo — Dealer Zona Centro</p>
          <RealTag tipo="real" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Cumplimiento mensual</p>
            <p className="text-lg font-bold text-ink-900">83%</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Ejecutivos activos</p>
            <p className="text-lg font-bold text-ink-900">{ejecutivos.length}</p>
          </div>
          <div className="col-span-2 rounded-[var(--radius-sm)] border border-border p-3 sm:col-span-1">
            <p className="text-[10px] text-ink-500">Proyección de cierre</p>
            <p className="text-lg font-bold text-ink-900">108%</p>
          </div>
        </div>

        <div className="mt-3 rounded-[var(--radius-sm)] border border-border p-3">
          <p className="mb-2 text-xs font-semibold text-ink-900">Ventas por ejecutivo</p>
          <ul className="flex flex-col gap-1.5">
            {ranking.map((e, i) => (
              <li key={e.id} className="flex items-center justify-between text-xs">
                <span className="text-ink-900">
                  {i + 1}. {e.nombre}
                </span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-subtle">
                  <div
                    className="h-full rounded-full bg-brand-500"
                    style={{ width: `${Math.min((e.ventasMes / e.metaMes) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-ink-500">
                  {e.ventasMes}/{e.metaMes}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs font-semibold text-ink-900">Comparación entre dealers</p>
              <RealTag tipo="proximo" />
            </div>
            <p className="text-[10px] text-ink-500">
              Ranking de tu dealer frente a otros dealers del mismo banco.
            </p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="mb-1 text-xs font-semibold text-ink-900">Premios del equipo</p>
            <p className="text-[10px] text-ink-500">Bono acumulado estimado del período</p>
            <p className="text-sm font-bold text-ink-900">{money(1_250_000)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function BancoMockup() {
  return (
    <div className="flex min-h-[420px] overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-[var(--shadow-lg)]">
      <div className="hidden w-48 shrink-0 flex-col gap-1 bg-surface-sidebar p-4 sm:flex">
        {[
          { label: 'Command Center', icon: LayoutDashboard, active: true },
          { label: 'Ventas en línea', icon: BarChart3 },
          { label: 'Ranking global', icon: Trophy },
          { label: 'Campañas', icon: Megaphone },
          { label: 'Formularios', icon: FileText },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 rounded-[var(--radius-sm)] px-2.5 py-2 text-xs font-medium ${
              item.active ? 'bg-brand-500 text-white' : 'text-ink-300'
            }`}
          >
            <item.icon className="h-3.5 w-3.5" />
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex-1 bg-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-900">Command Center — Gerencia COORTEXXA Bank</p>
          <RealTag tipo="real" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Ventas hoy</p>
            <p className="text-lg font-bold text-ink-900">47</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Monto hoy</p>
            <p className="text-lg font-bold text-ink-900">{money(38_400_000)}</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">Dealers activos</p>
            <p className="text-lg font-bold text-ink-900">5</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <p className="text-[10px] text-ink-500">SLA promedio</p>
            <p className="text-lg font-bold text-ink-900">3.4h</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs font-semibold text-ink-900">Ranking por dealer y sucursal</p>
              <RealTag tipo="proximo" />
            </div>
            <p className="text-[10px] text-ink-500">
              Jerarquía banco→dealer→ejecutivo — próxima fase de modelado de datos.
            </p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-border p-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs font-semibold text-ink-900">Campañas activas</p>
              <RealTag tipo="proximo" />
            </div>
            <p className="text-[10px] text-ink-500">Reglas de premiación por campaña — próxima fase.</p>
          </div>
        </div>

        <div className="mt-3 rounded-[var(--radius-sm)] bg-surface-sidebar p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-300">
            Cierre mensual
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="text-[10px] text-ink-300">Ejecutivo ganador</p>
              <p className="text-sm font-bold text-white">{ranking[0].nombre}</p>
            </div>
            <div>
              <p className="text-[10px] text-ink-300">Dealer ganador</p>
              <p className="flex items-center gap-1.5 text-sm font-bold text-white">
                Dealer Zona Centro <RealTag tipo="proximo" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mockupByRole: Record<RoleKey, () => ReactNode> = {
  ejecutivo: EjecutivoMockup,
  dealer: DealerMockup,
  banco: BancoMockup,
}

const descripcionByRole: Record<RoleKey, string> = {
  ejecutivo:
    'El ejecutivo ve su venta, su simulador, sus documentos, sus estados y su posición en el ranking — todo en una sola pantalla, incluso sin conexión en terreno.',
  dealer:
    'El dealer/supervisor ve a su equipo: quién vende, cuánto falta para la meta y cómo viene el cierre del mes.',
  banco:
    'El banco ve la operación completa: ventas en línea, KPI consolidado y quién gana el mes — ejecutivo y dealer.',
}

export function RoleExperienceSection() {
  const [role, setRole] = useState<RoleKey>('ejecutivo')
  const Mockup = mockupByRole[role]

  return (
    <section id="experiencia" className="border-b border-border bg-surface-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-500">
            <Building2 className="h-3.5 w-3.5" /> Así opera tu fuerza comercial
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Lo que ve cada rol, exactamente como lo vería operando
          </h2>
          <p className="mt-4 text-ink-500">{descripcionByRole[role]}</p>
        </div>

        <div className="mt-8 flex justify-center">
          <RoleSwitcher roles={roleOptions} active={role} onChange={(v) => setRole(v as RoleKey)} />
        </div>

        <div className="mt-10">
          <Mockup />
        </div>

        <p className="mt-4 text-center text-xs text-ink-300">
          Pantallas basadas en la demo real de COORTEXXA Bank — los widgets marcados "Próxima fase"
          todavía no existen como funcionalidad operativa.
        </p>
      </div>
    </section>
  )
}

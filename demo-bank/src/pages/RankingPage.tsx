import { Award, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { BankShell } from '@/components/BankShell'
import { useSolicitudes } from '@/context/SolicitudesContext'
import { money } from '@/lib/format'

export function RankingPage() {
  const { solicitudes } = useSolicitudes()

  const ranking = ejecutivos
    .map((e) => {
      const propias = solicitudes.filter((s) => s.ejecutivoId === e.id)
      const aprobadas = propias.filter((s) => s.estado === 'APROBADA')
      const montoAprobado = aprobadas.reduce((acc, s) => acc + s.monto, 0)
      return { ...e, aprobadas: aprobadas.length, montoAprobado }
    })
    .sort((a, b) => b.aprobadas - a.aprobadas || b.montoAprobado - a.montoAprobado)

  const lider = ranking[0]
  const logradoEquipo = ranking.reduce((acc, e) => acc + e.aprobadas, 0)
  const metaEquipo = ejecutivos.length * 3

  return (
    <BankShell
      title="Ranking y cierre de mes"
      description="Avance del equipo y ganador proyectado — cifras de ejemplo"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Ranking del mes</CardTitle>
            <span className="text-xs text-ink-500">
              Se recalcula según las solicitudes aprobadas en esta demo
            </span>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              {ranking.map((e, index) => (
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
                    <p className="truncate text-sm font-medium text-ink-900">{e.nombre}</p>
                    <p className="text-xs text-ink-500">{e.region}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-ink-900">{e.aprobadas} ventas</p>
                    <p className="text-xs text-ink-500">{money(e.montoAprobado)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-brand-600">
                <Trophy className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wide">Líder proyectado</span>
              </div>
              <p className="mt-2 text-lg font-bold text-ink-900">{lider.nombre}</p>
              <p className="text-sm text-ink-500">{lider.region}</p>
              <StatusBadge tone="success" className="mt-3">
                {lider.aprobadas} venta{lider.aprobadas === 1 ? '' : 's'} aprobada
                {lider.aprobadas === 1 ? '' : 's'}
              </StatusBadge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-ink-500">
                <Award className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wide">Cierre de mes</span>
              </div>
              <p className="mt-2 text-2xl font-bold text-ink-900">{logradoEquipo} ventas aprobadas</p>
              <p className="text-xs text-ink-500">Meta referencial del equipo: {metaEquipo}</p>
              <p className="mt-3 text-xs text-ink-300">
                Flujo demostrativo con datos simulados — preparado para operación en tiempo real.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </BankShell>
  )
}

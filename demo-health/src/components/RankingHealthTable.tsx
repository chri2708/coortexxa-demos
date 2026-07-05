import { ejecutivos } from '@coortexxa/mock-data'
import { metasEjecutivosHealth } from '@/data/metas'
import type { SolicitudHealth } from '@/data/solicitudes'
import { money } from '@/lib/format'

export function RankingHealthTable({ solicitudes }: { solicitudes: SolicitudHealth[] }) {
  const filas = metasEjecutivosHealth
    .map((meta) => {
      const vendedor = ejecutivos.find((e) => e.id === meta.ejecutivoId)
      const propias = solicitudes.filter((s) => s.ejecutivoId === meta.ejecutivoId)
      const aprobadas = propias.filter((s) => s.estado === 'APROBADA' || s.estado === 'ACTIVADA').length
      const observadas = propias.filter((s) => s.estado === 'OBSERVADA').length
      const tasaConversion = propias.length > 0 ? Math.round((aprobadas / propias.length) * 100) : 0
      const cumplimiento = Math.round((meta.ingresadasMes / meta.metaMensual) * 100)
      return {
        ...meta,
        nombre: vendedor?.nombre ?? '—',
        region: vendedor?.region ?? '—',
        aprobadas,
        observadas,
        tasaConversion,
        cumplimiento,
      }
    })
    .sort((a, b) => b.cumplimiento - a.cumplimiento)

  return (
    <div className="flex flex-col gap-4">
      {filas.map((fila, index) => (
        <div key={fila.ejecutivoId} className="rounded-[var(--radius-md)] border border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">{fila.nombre}</p>
                <p className="text-xs text-ink-500">{fila.region}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-ink-900">{money(fila.bonoEstimado)}</p>
              <p className="text-xs text-ink-500">{fila.tasaConversion}% conversión</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-subtle">
              <div
                className={`h-full rounded-full ${fila.cumplimiento >= 100 ? 'bg-success-500' : 'bg-brand-500'}`}
                style={{ width: `${Math.min(fila.cumplimiento, 100)}%` }}
              />
            </div>
            <span className="w-12 shrink-0 text-right text-xs font-medium text-ink-700">{fila.cumplimiento}%</span>
          </div>
          <p className="mt-1 text-xs text-ink-500">
            {fila.ingresadasMes} de {fila.metaMensual} solicitudes de meta · {fila.aprobadas} aprobadas ·{' '}
            {fila.observadas} observadas
          </p>
        </div>
      ))}
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle, MetricCard, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { BankShell } from '@/components/BankShell'
import { useRole } from '@/context/RoleContext'
import { useSolicitudes } from '@/context/SolicitudesContext'
import { estadoLabel, estadoTone, money } from '@/lib/format'

function ejecutivoNombre(id: string) {
  return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
}

export function DashboardBankPage() {
  const { rol } = useRole()
  const { solicitudes } = useSolicitudes()

  const propias = rol === 'EJECUTIVO' ? solicitudes.filter((s) => s.ejecutivoId === 'eje-1') : solicitudes

  const montoTotal = propias.reduce((acc, s) => acc + s.monto, 0)
  const aprobadas = propias.filter((s) => s.estado === 'APROBADA').length
  const enRevision = propias.filter((s) => s.estado === 'EN_REVISION').length
  const pendientes = propias.filter((s) => s.estado === 'PENDIENTE').length

  const descripcionPorRol = {
    EJECUTIVO: 'Tu cartera de solicitudes de demostración.',
    SUPERVISOR: 'Vista consolidada del equipo bajo tu supervisión.',
    GERENTE: 'Visión ejecutiva de toda la operación COORTEXXA Bank.',
  }

  return (
    <BankShell title="Dashboard Bank" description={descripcionPorRol[rol]}>
      <section className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
        <MetricCard label="Solicitudes activas" value={String(propias.length)} />
        <MetricCard label="Monto total en cartera" value={money(montoTotal)} />
        <MetricCard label="En revisión" value={String(enRevision)} deltaTone="down" delta={`${pendientes} pendientes`} />
        <MetricCard label="Aprobadas" value={String(aprobadas)} delta="del período" />
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Solicitudes recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {propias.slice(0, 6).map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-3 text-sm">
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink-900">{s.comercioFicticio}</p>
                  <p className="text-xs text-ink-500">
                    {s.folio} · {ejecutivoNombre(s.ejecutivoId)}
                  </p>
                </div>
                <StatusBadge tone={estadoTone[s.estado]}>{estadoLabel[s.estado]}</StatusBadge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </BankShell>
  )
}

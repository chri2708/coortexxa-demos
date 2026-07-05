import { Card, CardContent, CardHeader, CardTitle, MetricCard } from '@coortexxa/ui-kit'
import { HealthShell } from '@/components/HealthShell'
import { AlertsPanel } from '@/components/AlertsPanel'
import { RankingHealthTable } from '@/components/RankingHealthTable'
import { useRole } from '@/context/RoleContext'
import { useSolicitudes } from '@/context/SolicitudesContext'
import type { SolicitudHealth } from '@/data/solicitudes'

const diasEntre = (a: string, b: string) => Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86_400_000)

function tiempoPromedioRevision(solicitudes: SolicitudHealth[]) {
  const cerradas = solicitudes.filter((s) => ['APROBADA', 'RECHAZADA', 'ACTIVADA'].includes(s.estado))
  if (cerradas.length === 0) return 0
  const dias = cerradas.map((s) => {
    const eventoCierre = s.historial.findLast((e) => ['Aprobada', 'Rechazada', 'Activada'].includes(e.etapa))
    return eventoCierre ? diasEntre(s.fechaIngreso, eventoCierre.fecha) : 0
  })
  return Math.round(dias.reduce((acc, d) => acc + d, 0) / dias.length)
}

export function DashboardHealthPage() {
  const { rol } = useRole()
  const { solicitudes } = useSolicitudes()

  const propias = rol === 'EJECUTIVO' ? solicitudes.filter((s) => s.ejecutivoId === 'eje-1') : solicitudes

  const ingresadas = propias.filter((s) => s.estado !== 'BORRADOR').length
  const observadas = propias.filter((s) => s.estado === 'OBSERVADA').length
  const aprobadasOActivadas = propias.filter((s) => s.estado === 'APROBADA' || s.estado === 'ACTIVADA').length
  const rechazadas = propias.filter((s) => s.estado === 'RECHAZADA').length
  const totalCerradas = aprobadasOActivadas + rechazadas
  const tasaAprobacion = totalCerradas > 0 ? Math.round((aprobadasOActivadas / totalCerradas) * 100) : 0
  const documentosPendientes = propias.reduce(
    (acc, s) => acc + s.documentos.filter((d) => d.estado === 'PENDIENTE' || d.estado === 'RECIBIDO').length,
    0,
  )

  const descripcionPorRol = {
    EJECUTIVO: 'Tu cartera de solicitudes de demostración.',
    SUPERVISOR: 'Solicitudes pendientes de revisión de tu equipo.',
    OPERACIONES: 'Documentos y afiliaciones pendientes de activar.',
    GERENTE: 'Visión ejecutiva de toda la operación COORTEXXA Health.',
  }

  return (
    <HealthShell title="Dashboard Health" description={descripcionPorRol[rol]}>
      <section className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-3">
        <MetricCard label="Solicitudes del mes" value={String(propias.length)} delta="en cartera" />
        <MetricCard label="Afiliaciones ingresadas" value={String(ingresadas)} delta="formalmente ingresadas" />
        <MetricCard label="Documentos pendientes" value={String(documentosPendientes)} deltaTone="down" delta="por recibir o validar" />
        <MetricCard
          label="Solicitudes observadas"
          value={String(observadas)}
          deltaTone={observadas > 0 ? 'down' : 'up'}
          delta="requieren corrección"
        />
        <MetricCard label="Tasa de aprobación" value={`${tasaAprobacion}%`} delta="simulada, del período" />
        <MetricCard label="Tiempo promedio de revisión" value={`${tiempoPromedioRevision(propias)} días`} delta="simulado" />
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ranking de ejecutivos</CardTitle>
          </CardHeader>
          <CardContent>
            <RankingHealthTable solicitudes={solicitudes} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alertas operativas</CardTitle>
          </CardHeader>
          <CardContent>
            <AlertsPanel solicitudes={solicitudes} />
          </CardContent>
        </Card>
      </div>
    </HealthShell>
  )
}

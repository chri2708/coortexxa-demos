import { Card, CardContent, CardHeader, CardTitle, MetricCard, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { SalesShell } from '@/components/SalesShell'
import { useRole } from '@/context/RoleContext'
import { useVisitas } from '@/context/VisitasContext'
import { territorios } from '@/data/territorios'
import { metasVendedores } from '@/data/metas'
import { estadoVisitaLabel, estadoVisitaTone, money } from '@/lib/format'

export function DashboardSalesPage() {
  const { rol } = useRole()
  const { visitas, pedidos } = useVisitas()

  const propias = rol === 'VENDEDOR' ? visitas.filter((v) => v.vendedorId === 'eje-1') : visitas

  const cumplidas = propias.filter((v) => v.estado === 'CUMPLIDA' || v.estado === 'PEDIDO_ENVIADO').length
  const pendientes = propias.filter((v) => v.estado === 'PENDIENTE' || v.estado === 'EN_RUTA').length
  const observadas = propias.filter((v) => v.estado === 'OBSERVADA').length
  const pedidosEnviados = pedidos.length
  const ventasDelMes = metasVendedores.reduce((acc, m) => acc + m.ventasActuales, 0)
  const metaDelMes = metasVendedores.reduce((acc, m) => acc + m.metaMensual, 0)
  const cumplimiento = Math.round((ventasDelMes / metaDelMes) * 100)
  const coberturaPromedio = Math.round(
    territorios.reduce((acc, t) => acc + t.coberturaPorcentaje, 0) / territorios.length,
  )

  const descripcionPorRol = {
    VENDEDOR: 'Tu agenda y avance del día.',
    SUPERVISOR: 'Vista consolidada de tu equipo en terreno.',
    GERENTE: 'Visión ejecutiva de toda la operación COORTEXXA Sales.',
  }

  function vendedorNombre(id: string) {
    return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
  }

  return (
    <SalesShell title="Dashboard Sales" description={descripcionPorRol[rol]}>
      <section className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
        <MetricCard label="Ventas del mes" value={money(ventasDelMes)} delta={`${cumplimiento}% de la meta`} />
        <MetricCard label="Visitas cumplidas" value={String(cumplidas)} delta={`${pendientes} pendientes`} />
        <MetricCard label="Pedidos enviados" value={String(pedidosEnviados)} delta="del período" />
        <MetricCard
          label="Cobertura territorial"
          value={`${coberturaPromedio}%`}
          delta={observadas > 0 ? `${observadas} visitas observadas` : 'sin observaciones'}
          deltaTone={observadas > 0 ? 'down' : 'up'}
        />
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Visitas recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              {propias.slice(0, 6).map((v) => (
                <li key={v.id} className="flex items-center justify-between gap-3 text-sm">
                  <div>
                    <p className="font-medium text-ink-900">{v.horaProgramada}</p>
                    <p className="text-xs text-ink-500">{vendedorNombre(v.vendedorId)}</p>
                  </div>
                  <StatusBadge tone={estadoVisitaTone[v.estado]}>{estadoVisitaLabel[v.estado]}</StatusBadge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alertas operativas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3 text-sm text-ink-700">
              {observadas > 0 && <li>⚠ {observadas} visita(s) observada(s) requieren seguimiento.</li>}
              {territorios
                .filter((t) => t.coberturaPorcentaje < 50)
                .map((t) => (
                  <li key={t.id}>
                    ⚠ {t.nombre} con cobertura baja ({t.coberturaPorcentaje}%).
                  </li>
                ))}
              {observadas === 0 && territorios.every((t) => t.coberturaPorcentaje >= 50) && (
                <li className="text-ink-500">Sin alertas operativas en este momento.</li>
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SalesShell>
  )
}

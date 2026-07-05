import { Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'
import { HealthShell } from '@/components/HealthShell'
import { RankingHealthTable } from '@/components/RankingHealthTable'
import { useSolicitudes } from '@/context/SolicitudesContext'

export function RankingHealthPage() {
  const { solicitudes } = useSolicitudes()

  return (
    <HealthShell title="Ranking y productividad" description="Solicitudes ingresadas, aprobadas, observadas y bono estimado — cifras de ejemplo">
      <Card>
        <CardHeader>
          <CardTitle>Ranking de ejecutivos</CardTitle>
        </CardHeader>
        <CardContent>
          <RankingHealthTable solicitudes={solicitudes} />
        </CardContent>
      </Card>
    </HealthShell>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'
import { SalesShell } from '@/components/SalesShell'
import { RankingTable } from '@/components/RankingTable'

export function RankingPage() {
  return (
    <SalesShell title="Ranking y bonos" description="Avance contra meta, bono estimado y acelerador — cifras de ejemplo">
      <Card>
        <CardHeader>
          <CardTitle>Ranking de vendedores</CardTitle>
        </CardHeader>
        <CardContent>
          <RankingTable />
        </CardContent>
      </Card>
    </SalesShell>
  )
}

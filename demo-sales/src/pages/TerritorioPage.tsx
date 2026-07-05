import { Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'
import { SalesShell } from '@/components/SalesShell'
import { TerritorioGrid } from '@/components/TerritorioGrid'

export function TerritorioPage() {
  return (
    <SalesShell title="Territorio" description="Cobertura y visitas pendientes por zona — vista simulada">
      <Card>
        <CardHeader>
          <CardTitle>Cobertura por zona</CardTitle>
        </CardHeader>
        <CardContent>
          <TerritorioGrid />
        </CardContent>
      </Card>
    </SalesShell>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'
import { HealthShell } from '@/components/HealthShell'
import { DocumentChecklist } from '@/components/DocumentChecklist'
import { SolicitudStatusBadge } from '@/components/SolicitudStatusBadge'
import { useSolicitudes } from '@/context/SolicitudesContext'
import { clientesHealth } from '@/data/clientes'

export function DocumentosPage() {
  const { solicitudes } = useSolicitudes()

  return (
    <HealthShell title="Documentos" description="Estado de la documentación por solicitud — sin carga de archivos real">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {solicitudes.map((s) => (
          <Card key={s.id}>
            <CardHeader>
              <CardTitle className="text-base">
                {s.folio} · {clientesHealth.find((c) => c.id === s.clienteId)?.nombreCompleto ?? '—'}
              </CardTitle>
              <SolicitudStatusBadge estado={s.estado} />
            </CardHeader>
            <CardContent>
              <DocumentChecklist documentos={s.documentos} />
            </CardContent>
          </Card>
        ))}
      </div>
    </HealthShell>
  )
}

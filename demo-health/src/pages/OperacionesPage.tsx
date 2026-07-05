import { Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'
import { HealthShell } from '@/components/HealthShell'
import { DocumentPlaceholder } from '@/components/DocumentPlaceholder'
import { SolicitudStatusBadge } from '@/components/SolicitudStatusBadge'
import { ReviewPanel } from '@/components/ReviewPanel'
import { useRole } from '@/context/RoleContext'
import { useSolicitudes } from '@/context/SolicitudesContext'
import { clientesHealth } from '@/data/clientes'

export function OperacionesPage() {
  const { rol } = useRole()
  const { solicitudes, validarDocumento } = useSolicitudes()

  const pendientesOperaciones = solicitudes.filter((s) =>
    ['EN_REVISION', 'OBSERVADA', 'APROBADA'].includes(s.estado),
  )

  return (
    <HealthShell
      title="Operaciones"
      description="Validación de documentos y activación de afiliaciones aprobadas"
    >
      {pendientesOperaciones.length === 0 && (
        <p className="text-sm text-ink-500">No hay solicitudes pendientes de operaciones en este momento.</p>
      )}
      <div className="flex flex-col gap-6">
        {pendientesOperaciones.map((s) => (
          <Card key={s.id}>
            <CardHeader>
              <CardTitle className="text-base">
                {s.folio} · {clientesHealth.find((c) => c.id === s.clienteId)?.nombreCompleto ?? '—'}
              </CardTitle>
              <SolicitudStatusBadge estado={s.estado} />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {s.documentos.map((doc) => (
                  <DocumentPlaceholder
                    key={doc.tipo}
                    tipo={doc.tipo}
                    validado={doc.estado === 'VALIDADO'}
                    puedeValidar={rol === 'OPERACIONES'}
                    onValidar={() => validarDocumento(s.id, doc.tipo)}
                  />
                ))}
              </div>
              {s.estado === 'APROBADA' && (
                <div className="mt-5 border-t border-border pt-5">
                  <ReviewPanel solicitud={s} />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </HealthShell>
  )
}

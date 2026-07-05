import { useParams } from 'react-router-dom'
import { Button, Card, CardContent, CardHeader, CardTitle, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { BankShell } from '@/components/BankShell'
import { DocumentChecklist } from '@/components/DocumentChecklist'
import { SignaturePad } from '@/components/SignaturePad'
import { WorkflowStepper } from '@/components/WorkflowStepper'
import { useRole } from '@/context/RoleContext'
import { useSolicitudes } from '@/context/SolicitudesContext'
import { estadoLabel, estadoTone, money } from '@/lib/format'

function ejecutivoNombre(id: string) {
  return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
}

export function SolicitudDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { rol } = useRole()
  const { getSolicitud, avanzarEtapa, rechazar, firmar } = useSolicitudes()
  const solicitud = id ? getSolicitud(id) : undefined

  const puedeGestionarWorkflow = rol === 'SUPERVISOR' || rol === 'GERENTE'

  if (!solicitud) {
    return (
      <BankShell title="Solicitud no encontrada">
        <p className="text-sm text-ink-500">No existe una solicitud de demostración con ese identificador.</p>
      </BankShell>
    )
  }

  return (
    <BankShell title={solicitud.folio} description={solicitud.comercioFicticio}>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge tone={estadoTone[solicitud.estado]}>{estadoLabel[solicitud.estado]}</StatusBadge>
        <span className="text-sm text-ink-500">{solicitud.tipo === 'POS' ? 'POS' : 'Cuenta empresa'}</span>
        <span className="text-sm text-ink-500">RUT demo: {solicitud.rutDemo}</span>
        <span className="text-sm text-ink-500">Ejecutivo: {ejecutivoNombre(solicitud.ejecutivoId)}</span>
        <span className="text-sm font-medium text-ink-900">{money(solicitud.monto)}</span>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Workflow Ejecutivo → Supervisor → BackOffice</CardTitle>
          </CardHeader>
          <CardContent>
            <WorkflowStepper etapaActual={solicitud.etapaActual} historial={solicitud.historial} />
            {puedeGestionarWorkflow && solicitud.estado !== 'APROBADA' && solicitud.estado !== 'RECHAZADA' && (
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                <Button size="sm" onClick={() => avanzarEtapa(solicitud.id, 'Etapa avanzada desde el demo.')}>
                  Avanzar etapa (demo)
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => rechazar(solicitud.id, 'Rechazada manualmente desde el demo.')}
                >
                  Rechazar (demo)
                </Button>
              </div>
            )}
            {!puedeGestionarWorkflow && (
              <p className="mt-4 text-xs text-ink-500">
                Cambia a vista Supervisor o Gerente para simular la aprobación del workflow.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gestión documental</CardTitle>
          </CardHeader>
          <CardContent>
            <DocumentChecklist documentos={solicitud.documentos} />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Firma</CardTitle>
        </CardHeader>
        <CardContent>
          <SignaturePad firmado={solicitud.firmaSimulada} onFirmar={() => firmar(solicitud.id)} />
        </CardContent>
      </Card>
    </BankShell>
  )
}

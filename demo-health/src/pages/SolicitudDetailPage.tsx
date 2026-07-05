import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { HealthShell } from '@/components/HealthShell'
import { SolicitudStatusBadge } from '@/components/SolicitudStatusBadge'
import { HealthTimeline } from '@/components/HealthTimeline'
import { DocumentChecklist } from '@/components/DocumentChecklist'
import { ReviewPanel } from '@/components/ReviewPanel'
import { useSolicitudes } from '@/context/SolicitudesContext'
import { clientesHealth } from '@/data/clientes'
import { productosHealth } from '@/data/productos'
import { money } from '@/lib/format'

export function SolicitudDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { getSolicitud } = useSolicitudes()
  const solicitud = id ? getSolicitud(id) : undefined

  if (!solicitud) {
    return (
      <HealthShell title="Solicitud no encontrada">
        <p className="text-sm text-ink-500">No existe una solicitud de demostración con ese identificador.</p>
      </HealthShell>
    )
  }

  const cliente = clientesHealth.find((c) => c.id === solicitud.clienteId)
  const producto = productosHealth.find((p) => p.id === solicitud.productoId)
  const ejecutivo = ejecutivos.find((e) => e.id === solicitud.ejecutivoId)

  return (
    <HealthShell title={solicitud.folio} description={`${cliente?.nombreCompleto ?? '—'} — folio de demostración, no conectado a ningún sistema real`}>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <SolicitudStatusBadge estado={solicitud.estado} />
        <span className="text-sm text-ink-500">{producto?.nombre}</span>
        <span className="text-sm text-ink-500">Ejecutivo: {ejecutivo?.nombre ?? '—'}</span>
        <span className="text-sm font-medium text-ink-900">Renta declarada: {money(solicitud.rentaDeclaradaFicticia)}</span>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Historial de la solicitud</CardTitle>
          </CardHeader>
          <CardContent>
            <HealthTimeline estado={solicitud.estado} historial={solicitud.historial} />
            <div className="mt-5 border-t border-border pt-5">
              <ReviewPanel solicitud={solicitud} />
            </div>
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

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Datos personales y de contacto (ficticios)</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs text-ink-500">Nombre completo</dt>
                <dd className="text-ink-900">{cliente?.nombreCompleto}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-500">RUT (demo)</dt>
                <dd className="text-ink-900">{cliente?.rutFicticio}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-500">Email</dt>
                <dd className="text-ink-900">{cliente?.email}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-500">Teléfono</dt>
                <dd className="text-ink-900">{cliente?.telefono}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs text-ink-500">Dirección</dt>
                <dd className="text-ink-900">{cliente?.direccionFicticia}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-500">Número de cargas</dt>
                <dd className="text-ink-900">{solicitud.numeroCargas}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-500">Fecha de inicio solicitada</dt>
                <dd className="text-ink-900">{solicitud.fechaInicioSolicitada}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Declaración de salud y observaciones (simuladas)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="text-xs text-ink-500">Declaración de salud</p>
                <p className="mt-1 text-ink-900">{solicitud.declaracionSalud || 'Sin información registrada.'}</p>
              </div>
              <div>
                <p className="text-xs text-ink-500">Observaciones comerciales</p>
                <p className="mt-1 text-ink-900">{solicitud.observacionesComerciales || 'Sin observaciones.'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </HealthShell>
  )
}

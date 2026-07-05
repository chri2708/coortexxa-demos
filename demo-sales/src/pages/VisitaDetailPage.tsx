import { useParams } from 'react-router-dom'
import { Button, Card, CardContent, CardHeader, CardTitle, Stepper, StatusBadge } from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { SalesShell } from '@/components/SalesShell'
import { CheckInPanel } from '@/components/CheckInPanel'
import { VisitForm } from '@/components/VisitForm'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { PedidoForm } from '@/components/PedidoForm'
import { useRole } from '@/context/RoleContext'
import { useVisitas } from '@/context/VisitasContext'
import { clientes } from '@/data/clientes'
import { estadoVisitaLabel, estadoVisitaTone } from '@/lib/format'
import type { EstadoVisita } from '@/data/visitas'

const etapasVisita: { estado: EstadoVisita; label: string }[] = [
  { estado: 'PENDIENTE', label: 'Pendiente' },
  { estado: 'EN_RUTA', label: 'En ruta' },
  { estado: 'CHECKIN', label: 'Check-in' },
  { estado: 'PEDIDO_ENVIADO', label: 'Pedido enviado' },
  { estado: 'CUMPLIDA', label: 'Cumplida' },
]

export function VisitaDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { rol } = useRole()
  const { getVisita, registrarCheckIn, registrarCheckOut, guardarFormulario, marcarFotoCargada, marcarObservada, marcarCumplida, crearPedido } =
    useVisitas()
  const visita = id ? getVisita(id) : undefined

  const puedeGestionar = rol === 'SUPERVISOR' || rol === 'GERENTE' || rol === 'VENDEDOR'

  if (!visita) {
    return (
      <SalesShell title="Visita no encontrada">
        <p className="text-sm text-ink-500">No existe una visita de demostración con ese identificador.</p>
      </SalesShell>
    )
  }

  const cliente = clientes.find((c) => c.id === visita.clienteId)
  const vendedor = ejecutivos.find((e) => e.id === visita.vendedorId)
  const indiceActual = Math.max(
    etapasVisita.findIndex((e) => e.estado === visita.estado),
    visita.estado === 'OBSERVADA' ? 2 : 0,
  )

  return (
    <SalesShell title={cliente?.nombreFicticio ?? 'Visita'} description={cliente?.direccionFicticia}>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge tone={estadoVisitaTone[visita.estado]}>{estadoVisitaLabel[visita.estado]}</StatusBadge>
        <span className="text-sm text-ink-500">Vendedor: {vendedor?.nombre ?? '—'}</span>
        <span className="text-sm text-ink-500">Programada: {visita.horaProgramada}</span>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Progreso de la visita</CardTitle>
        </CardHeader>
        <CardContent>
          <Stepper steps={etapasVisita.map((e) => ({ label: e.label }))} currentIndex={indiceActual} />
          {puedeGestionar && visita.estado !== 'CUMPLIDA' && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
              <Button size="sm" variant="secondary" onClick={() => marcarObservada(visita.id)}>
                Marcar como observada (demo)
              </Button>
              {visita.checkIn.horaSalida && (
                <Button size="sm" onClick={() => marcarCumplida(visita.id)}>
                  Marcar como cumplida (demo)
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Check-in de visita</CardTitle>
          </CardHeader>
          <CardContent>
            <CheckInPanel
              checkIn={visita.checkIn}
              onCheckIn={() => registrarCheckIn(visita.id)}
              onCheckOut={() => registrarCheckOut(visita.id)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fotografías simuladas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {visita.fotos.map((foto) => (
                <PhotoPlaceholder
                  key={foto.tipo}
                  tipo={foto.tipo}
                  cargada={foto.cargada}
                  onSimularCarga={() => marcarFotoCargada(visita.id, foto.tipo)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Formulario de visita</CardTitle>
        </CardHeader>
        <CardContent>
          <VisitForm formulario={visita.formulario} onGuardar={(formulario) => guardarFormulario(visita.id, formulario)} />
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Pedido</CardTitle>
        </CardHeader>
        <CardContent>
          {visita.pedidoId ? (
            <p className="text-sm text-success-500">
              Pedido {visita.pedidoId} ya generado para esta visita.
            </p>
          ) : (
            <PedidoForm onCrearPedido={(items) => crearPedido(visita.id, items)} />
          )}
        </CardContent>
      </Card>
    </SalesShell>
  )
}

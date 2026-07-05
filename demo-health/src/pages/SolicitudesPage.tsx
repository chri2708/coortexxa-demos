import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  StatusBadge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@coortexxa/ui-kit'
import { ejecutivos } from '@coortexxa/mock-data'
import { HealthShell } from '@/components/HealthShell'
import { SolicitudStatusBadge } from '@/components/SolicitudStatusBadge'
import { useSolicitudes } from '@/context/SolicitudesContext'
import { clientesHealth } from '@/data/clientes'
import { productosHealth } from '@/data/productos'
import { prioridadTone } from '@/lib/format'

export function SolicitudesPage() {
  const navigate = useNavigate()
  const { solicitudes } = useSolicitudes()

  const clienteNombre = (id: string) => clientesHealth.find((c) => c.id === id)?.nombreCompleto ?? '—'
  const productoNombre = (id: string) => productosHealth.find((p) => p.id === id)?.nombre ?? '—'
  const ejecutivoNombre = (id: string) => ejecutivos.find((e) => e.id === id)?.nombre ?? '—'

  return (
    <HealthShell title="Bandeja de solicitudes" description="Solicitudes de afiliación y contratación — datos ficticios">
      <Card>
        <CardHeader>
          <CardTitle>Todas las solicitudes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Folio</TableHeaderCell>
                <TableHeaderCell>Cliente</TableHeaderCell>
                <TableHeaderCell>Producto</TableHeaderCell>
                <TableHeaderCell>Ejecutivo</TableHeaderCell>
                <TableHeaderCell>Ingreso</TableHeaderCell>
                <TableHeaderCell>Prioridad</TableHeaderCell>
                <TableHeaderCell>Estado</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {solicitudes.map((s) => (
                <TableRow key={s.id} className="cursor-pointer" onClick={() => navigate(`/solicitudes/${s.id}`)}>
                  <TableCell className="font-medium text-ink-900">{s.folio}</TableCell>
                  <TableCell>{clienteNombre(s.clienteId)}</TableCell>
                  <TableCell>{productoNombre(s.productoId)}</TableCell>
                  <TableCell>{ejecutivoNombre(s.ejecutivoId)}</TableCell>
                  <TableCell>{s.fechaIngreso}</TableCell>
                  <TableCell>
                    <StatusBadge tone={prioridadTone[s.prioridad]}>{s.prioridad}</StatusBadge>
                  </TableCell>
                  <TableCell>
                    <SolicitudStatusBadge estado={s.estado} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </HealthShell>
  )
}

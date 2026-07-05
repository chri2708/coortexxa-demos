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
import { SalesShell } from '@/components/SalesShell'
import { useVisitas } from '@/context/VisitasContext'
import { clientes } from '@/data/clientes'
import { productos } from '@/data/productos'
import { estadoPedidoLabel, estadoPedidoTone, money } from '@/lib/format'

export function PedidosPage() {
  const { pedidos } = useVisitas()

  function clienteNombre(id: string) {
    return clientes.find((c) => c.id === id)?.nombreFicticio ?? '—'
  }

  function vendedorNombre(id: string) {
    return ejecutivos.find((e) => e.id === id)?.nombre ?? '—'
  }

  return (
    <SalesShell title="Pedidos" description="Pedidos generados desde las visitas — datos ficticios">
      <Card>
        <CardHeader>
          <CardTitle>Todos los pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Folio</TableHeaderCell>
                <TableHeaderCell>Cliente</TableHeaderCell>
                <TableHeaderCell>Vendedor</TableHeaderCell>
                <TableHeaderCell>Productos</TableHeaderCell>
                <TableHeaderCell>Monto</TableHeaderCell>
                <TableHeaderCell>Estado</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow key={pedido.id}>
                  <TableCell className="font-medium text-ink-900">{pedido.id}</TableCell>
                  <TableCell>{clienteNombre(pedido.clienteId)}</TableCell>
                  <TableCell>{vendedorNombre(pedido.vendedorId)}</TableCell>
                  <TableCell>
                    {pedido.items
                      .map((item) => productos.find((p) => p.id === item.productoId)?.nombre)
                      .filter(Boolean)
                      .join(', ')}
                  </TableCell>
                  <TableCell>{money(pedido.montoTotal)}</TableCell>
                  <TableCell>
                    <StatusBadge tone={estadoPedidoTone[pedido.estado]}>{estadoPedidoLabel[pedido.estado]}</StatusBadge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </SalesShell>
  )
}

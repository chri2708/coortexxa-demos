import { useState } from 'react'
import { Button } from '@coortexxa/ui-kit'
import { productos } from '@/data/productos'
import type { ItemPedido } from '@/data/pedidos'
import { money } from '@/lib/format'

interface PedidoFormProps {
  onCrearPedido: (items: ItemPedido[]) => void
}

export function PedidoForm({ onCrearPedido }: PedidoFormProps) {
  const [cantidades, setCantidades] = useState<Record<string, number>>({})

  const items: ItemPedido[] = productos
    .filter((p) => (cantidades[p.id] ?? 0) > 0)
    .map((p) => ({ productoId: p.id, cantidad: cantidades[p.id] }))

  const montoTotal = items.reduce((acc, item) => {
    const producto = productos.find((p) => p.id === item.productoId)
    return acc + (producto ? producto.precioUnitario * item.cantidad : 0)
  }, 0)

  return (
    <div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-wide text-ink-500">
            <th className="pb-2 font-medium">Producto</th>
            <th className="pb-2 font-medium">Precio</th>
            <th className="pb-2 font-medium">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-b border-border last:border-0">
              <td className="py-2 text-ink-900">{producto.nombre}</td>
              <td className="py-2 text-ink-500">{money(producto.precioUnitario)}</td>
              <td className="py-2">
                <input
                  type="number"
                  min={0}
                  value={cantidades[producto.id] ?? 0}
                  onChange={(event) =>
                    setCantidades((prev) => ({ ...prev, [producto.id]: Number(event.target.value) }))
                  }
                  className="w-20 rounded-[var(--radius-sm)] border border-border px-2 py-1 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-[var(--color-ring)]"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm font-semibold text-ink-900">Total: {money(montoTotal)}</span>
        <Button size="sm" disabled={items.length === 0} onClick={() => onCrearPedido(items)}>
          Enviar pedido (demo)
        </Button>
      </div>
    </div>
  )
}

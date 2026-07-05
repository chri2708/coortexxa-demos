import { createContext, useContext, useState, type ReactNode } from 'react'
import { visitasIniciales, type FormularioVisita, type TipoFoto, type Visita } from '@/data/visitas'
import { pedidosIniciales, type ItemPedido, type Pedido } from '@/data/pedidos'
import { productos } from '@/data/productos'

const horaActual = () =>
  new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', hour12: false })

interface VisitasContextValue {
  visitas: Visita[]
  pedidos: Pedido[]
  getVisita: (id: string) => Visita | undefined
  registrarCheckIn: (id: string) => void
  registrarCheckOut: (id: string) => void
  guardarFormulario: (id: string, formulario: FormularioVisita) => void
  marcarFotoCargada: (id: string, tipo: TipoFoto) => void
  marcarObservada: (id: string) => void
  marcarCumplida: (id: string) => void
  crearPedido: (visitaId: string, items: ItemPedido[]) => void
}

const VisitasContext = createContext<VisitasContextValue | null>(null)

export function VisitasProvider({ children }: { children: ReactNode }) {
  const [visitas, setVisitas] = useState<Visita[]>(visitasIniciales)
  const [pedidos, setPedidos] = useState<Pedido[]>(pedidosIniciales)

  const getVisita = (id: string) => visitas.find((v) => v.id === id)

  const registrarCheckIn = (id: string) => {
    setVisitas((prev) =>
      prev.map((v) =>
        v.id === id
          ? { ...v, estado: 'CHECKIN', checkIn: { ...v.checkIn, horaEntrada: horaActual() } }
          : v,
      ),
    )
  }

  const registrarCheckOut = (id: string) => {
    setVisitas((prev) =>
      prev.map((v) => (v.id === id ? { ...v, checkIn: { ...v.checkIn, horaSalida: horaActual() } } : v)),
    )
  }

  const guardarFormulario = (id: string, formulario: FormularioVisita) => {
    setVisitas((prev) => prev.map((v) => (v.id === id ? { ...v, formulario } : v)))
  }

  const marcarFotoCargada = (id: string, tipo: TipoFoto) => {
    setVisitas((prev) =>
      prev.map((v) =>
        v.id === id
          ? { ...v, fotos: v.fotos.map((f) => (f.tipo === tipo ? { ...f, cargada: true } : f)) }
          : v,
      ),
    )
  }

  const marcarObservada = (id: string) => {
    setVisitas((prev) => prev.map((v) => (v.id === id ? { ...v, estado: 'OBSERVADA' } : v)))
  }

  const marcarCumplida = (id: string) => {
    setVisitas((prev) => prev.map((v) => (v.id === id ? { ...v, estado: 'CUMPLIDA' } : v)))
  }

  const crearPedido = (visitaId: string, items: ItemPedido[]) => {
    const visita = visitas.find((v) => v.id === visitaId)
    if (!visita) return

    const montoTotal = items.reduce((acc, item) => {
      const producto = productos.find((p) => p.id === item.productoId)
      return acc + (producto ? producto.precioUnitario * item.cantidad : 0)
    }, 0)

    const nuevoPedido: Pedido = {
      id: `ped-${Date.now()}`,
      visitaId,
      clienteId: visita.clienteId,
      vendedorId: visita.vendedorId,
      items,
      montoTotal,
      estado: 'ENVIADO',
      fecha: new Date().toISOString().slice(0, 10),
    }

    setPedidos((prev) => [...prev, nuevoPedido])
    setVisitas((prev) =>
      prev.map((v) => (v.id === visitaId ? { ...v, estado: 'PEDIDO_ENVIADO', pedidoId: nuevoPedido.id } : v)),
    )
  }

  return (
    <VisitasContext.Provider
      value={{
        visitas,
        pedidos,
        getVisita,
        registrarCheckIn,
        registrarCheckOut,
        guardarFormulario,
        marcarFotoCargada,
        marcarObservada,
        marcarCumplida,
        crearPedido,
      }}
    >
      {children}
    </VisitasContext.Provider>
  )
}

export function useVisitas() {
  const ctx = useContext(VisitasContext)
  if (!ctx) throw new Error('useVisitas debe usarse dentro de <VisitasProvider>')
  return ctx
}

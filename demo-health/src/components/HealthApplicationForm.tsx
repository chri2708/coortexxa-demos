import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'
import { productosHealth } from '@/data/productos'
import { useSolicitudes } from '@/context/SolicitudesContext'

const inputClass =
  'mt-1.5 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-[var(--color-ring)]'

export function HealthApplicationForm() {
  const navigate = useNavigate()
  const { crearSolicitud } = useSolicitudes()
  const [productoId, setProductoId] = useState(productosHealth[0].id)
  const [renta, setRenta] = useState('')
  const [cargas, setCargas] = useState('0')
  const [fechaInicio, setFechaInicio] = useState('')
  const [observaciones, setObservaciones] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const id = crearSolicitud({
          clienteId: 'pac-1',
          productoId,
          ejecutivoId: 'eje-1',
          rentaDeclaradaFicticia: Number(renta) || 0,
          numeroCargas: Number(cargas) || 0,
          fechaInicioSolicitada: fechaInicio,
          observacionesComerciales: observaciones,
        })
        navigate(`/solicitudes/${id}`)
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Datos personales (ficticios)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink-700">
              RUT (demo, dato ficticio)
              <input required className={inputClass} placeholder="99.999.999-9 (demo)" />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Nombre completo
              <input required className={inputClass} placeholder="Ej. Javiera Contreras (demo)" />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Email
              <input required type="email" className={inputClass} placeholder="nombre.demo@ejemplo.cl" />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Teléfono
              <input required className={inputClass} placeholder="+56 9 0000 0000" />
            </label>
            <label className="block text-sm font-medium text-ink-700 sm:col-span-2">
              Dirección
              <input required className={inputClass} placeholder="Av. Ficticia 000, comuna (demo)" />
            </label>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Producto y condiciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink-700">
              Plan o producto
              <select
                className={inputClass}
                value={productoId}
                onChange={(event) => setProductoId(event.target.value)}
              >
                {productosHealth.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Renta declarada (ficticia)
              <input
                required
                type="number"
                className={inputClass}
                placeholder="900000"
                value={renta}
                onChange={(event) => setRenta(event.target.value)}
              />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Número de cargas
              <input
                type="number"
                min={0}
                className={inputClass}
                value={cargas}
                onChange={(event) => setCargas(event.target.value)}
              />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Fecha de inicio solicitada
              <input
                required
                type="date"
                className={inputClass}
                value={fechaInicio}
                onChange={(event) => setFechaInicio(event.target.value)}
              />
            </label>
            <label className="block text-sm font-medium text-ink-700 sm:col-span-2">
              Observaciones comerciales
              <textarea
                rows={2}
                className={inputClass}
                placeholder="Notas del ejecutivo sobre la solicitud"
                value={observaciones}
                onChange={(event) => setObservaciones(event.target.value)}
              />
            </label>
          </div>
        </CardContent>
      </Card>

      <div className="mt-5 flex justify-end">
        <Button type="submit" size="lg">
          Crear solicitud (demo)
        </Button>
      </div>
    </form>
  )
}

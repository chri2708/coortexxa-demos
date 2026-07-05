import { useState } from 'react'
import { Button, Card, CardContent, CardHeader, CardTitle } from '@coortexxa/ui-kit'

const inputClass =
  'mt-1.5 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-[var(--color-ring)]'

export function SolicitudForm() {
  const [tipo, setTipo] = useState<'POS' | 'CUENTA_EMPRESA'>('POS')
  const [enviado, setEnviado] = useState(false)

  if (enviado) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-lg font-semibold text-ink-900">Solicitud de demostración creada</p>
          <p className="mt-2 text-sm text-ink-500">
            Este envío es simulado — no se guardó en ningún backend. En el pipeline real esta
            solicitud aparecería como "Pendiente" para el ejecutivo asignado.
          </p>
          <Button className="mt-4" variant="secondary" onClick={() => setEnviado(false)}>
            Crear otra solicitud demo
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setEnviado(true)
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Datos del comercio (ficticio)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink-700">
              Nombre de fantasía
              <input required className={inputClass} placeholder="Ej. Panadería Los Aromos (demo)" />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              RUT (demo, dato ficticio)
              <input required className={inputClass} placeholder="76.999.999-9 (demo)" />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Giro comercial
              <input required className={inputClass} placeholder="Ej. Alimentos y bebidas" />
            </label>
            <label className="block text-sm font-medium text-ink-700">
              Monto mensual estimado
              <input required type="number" className={inputClass} placeholder="850000" />
            </label>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Tipo de producto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(
              [
                { value: 'POS', label: 'POS', description: 'Terminal de pago para el comercio.' },
                { value: 'CUENTA_EMPRESA', label: 'Cuenta empresa', description: 'Cuenta corriente para la sociedad.' },
              ] as const
            ).map((opt) => (
              <label
                key={opt.value}
                className={`flex cursor-pointer flex-col gap-1 rounded-[var(--radius-md)] border p-4 transition-colors ${
                  tipo === opt.value ? 'border-brand-500 bg-brand-50' : 'border-border hover:bg-surface-hover'
                }`}
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <input
                    type="radio"
                    name="tipo"
                    checked={tipo === opt.value}
                    onChange={() => setTipo(opt.value)}
                    className="accent-brand-500"
                  />
                  {opt.label}
                </span>
                <span className="text-xs text-ink-500">{opt.description}</span>
              </label>
            ))}
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

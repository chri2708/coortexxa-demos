import { useState } from 'react'
import { Button } from '@coortexxa/ui-kit'
import type { FormularioVisita } from '@/data/visitas'

const textareaClass =
  'mt-1.5 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-[var(--color-ring)]'

const campos: { key: keyof FormularioVisita; label: string; placeholder: string }[] = [
  { key: 'stockDisponible', label: 'Stock disponible', placeholder: 'Ej. stock completo en las referencias principales' },
  { key: 'exhibicion', label: 'Exhibición', placeholder: 'Ej. punta de góndola, buen frente de marca' },
  { key: 'competencia', label: 'Competencia', placeholder: 'Ej. presencia de un competidor local' },
  { key: 'observaciones', label: 'Observaciones', placeholder: 'Notas generales de la visita' },
  { key: 'oportunidades', label: 'Oportunidades detectadas', placeholder: 'Ej. espacio disponible para exhibición adicional' },
]

interface VisitFormProps {
  formulario?: FormularioVisita
  onGuardar: (formulario: FormularioVisita) => void
}

const vacio: FormularioVisita = {
  stockDisponible: '',
  exhibicion: '',
  competencia: '',
  observaciones: '',
  oportunidades: '',
}

export function VisitForm({ formulario, onGuardar }: VisitFormProps) {
  const [valores, setValores] = useState<FormularioVisita>(formulario ?? vacio)
  const [guardado, setGuardado] = useState(Boolean(formulario))

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onGuardar(valores)
        setGuardado(true)
      }}
      className="flex flex-col gap-4"
    >
      {campos.map((campo) => (
        <label key={campo.key} className="block text-sm font-medium text-ink-700">
          {campo.label}
          <textarea
            rows={2}
            className={textareaClass}
            placeholder={campo.placeholder}
            value={valores[campo.key]}
            onChange={(event) => {
              setValores((prev) => ({ ...prev, [campo.key]: event.target.value }))
              setGuardado(false)
            }}
          />
        </label>
      ))}
      <div className="flex items-center gap-3">
        <Button type="submit" size="sm">
          Guardar formulario (demo)
        </Button>
        {guardado && <span className="text-xs font-medium text-success-500">Formulario guardado.</span>}
      </div>
    </form>
  )
}

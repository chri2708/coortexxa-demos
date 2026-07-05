import { Camera, Check, DoorOpen, Refrigerator, ShoppingBasket } from 'lucide-react'
import { Button } from '@coortexxa/ui-kit'
import type { TipoFoto } from '@/data/visitas'

const iconByTipo: Record<TipoFoto, typeof Camera> = {
  FACHADA: DoorOpen,
  GONDOLA: ShoppingBasket,
  EXHIBICION: Camera,
  REFRIGERADOR: Refrigerator,
}

const labelByTipo: Record<TipoFoto, string> = {
  FACHADA: 'Fachada',
  GONDOLA: 'Góndola',
  EXHIBICION: 'Exhibición',
  REFRIGERADOR: 'Refrigerador',
}

interface PhotoPlaceholderProps {
  tipo: TipoFoto
  cargada: boolean
  onSimularCarga: () => void
}

export function PhotoPlaceholder({ tipo, cargada, onSimularCarga }: PhotoPlaceholderProps) {
  const Icon = iconByTipo[tipo]

  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border">
      <div
        className={`flex h-32 items-center justify-center ${
          cargada
            ? 'bg-gradient-to-br from-brand-100 to-brand-50'
            : 'bg-[repeating-linear-gradient(135deg,var(--color-surface-subtle)_0px,var(--color-surface-subtle)_10px,var(--color-surface)_10px,var(--color-surface)_20px)]'
        }`}
      >
        {cargada ? (
          <Check className="h-8 w-8 text-brand-600" />
        ) : (
          <Icon className="h-8 w-8 text-ink-300" />
        )}
      </div>
      <div className="flex flex-col gap-1.5 px-3 py-2">
        <span className="text-xs font-medium text-ink-700">{labelByTipo[tipo]}</span>
        {cargada ? (
          <span className="text-xs font-medium text-success-500">Foto simulada cargada</span>
        ) : (
          <Button size="sm" variant="ghost" className="self-start px-0" onClick={onSimularCarga}>
            Simular foto
          </Button>
        )}
      </div>
    </div>
  )
}

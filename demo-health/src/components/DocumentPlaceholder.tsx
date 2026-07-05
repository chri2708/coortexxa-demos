import { Check, FileText, IdCard, Landmark, ShieldCheck, Signature } from 'lucide-react'
import { Button } from '@coortexxa/ui-kit'
import type { TipoDocumentoHealth } from '@/data/documentos'
import { documentoLabel } from '@/data/documentos'

const iconByTipo: Record<TipoDocumentoHealth, typeof FileText> = {
  CEDULA: IdCard,
  LIQUIDACION_SUELDO: Landmark,
  CERTIFICADO_AFILIACION_ANTERIOR: FileText,
  DECLARACION_SALUD: ShieldCheck,
  MANDATO_AUTORIZACION: Signature,
  COMPROBANTE_DOMICILIO: FileText,
}

interface DocumentPlaceholderProps {
  tipo: TipoDocumentoHealth
  validado: boolean
  puedeValidar: boolean
  onValidar: () => void
}

export function DocumentPlaceholder({ tipo, validado, puedeValidar, onValidar }: DocumentPlaceholderProps) {
  const Icon = iconByTipo[tipo]

  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border">
      <div
        className={`flex h-28 items-center justify-center ${
          validado
            ? 'bg-gradient-to-br from-success-100 to-surface'
            : 'bg-[repeating-linear-gradient(135deg,var(--color-surface-subtle)_0px,var(--color-surface-subtle)_10px,var(--color-surface)_10px,var(--color-surface)_20px)]'
        }`}
      >
        {validado ? <Check className="h-7 w-7 text-success-500" /> : <Icon className="h-7 w-7 text-ink-300" />}
      </div>
      <div className="flex flex-col gap-1.5 px-3 py-2">
        <span className="text-xs font-medium text-ink-700">{documentoLabel[tipo]}</span>
        {validado ? (
          <span className="text-xs font-medium text-success-500">Documento simulado validado</span>
        ) : puedeValidar ? (
          <Button size="sm" variant="ghost" className="self-start px-0" onClick={onValidar}>
            Validar documento (demo)
          </Button>
        ) : (
          <span className="text-xs text-ink-500">Pendiente de validación</span>
        )}
      </div>
    </div>
  )
}

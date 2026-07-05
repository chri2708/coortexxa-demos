import { cn } from './lib/cn'

export interface LogoProps {
  /** horizontal = isotipo + wordmark. mark = solo isotipo. */
  variant?: 'horizontal' | 'mark'
  /** default = texto oscuro, para fondo claro. light = texto blanco, para fondo oscuro. */
  tone?: 'default' | 'light'
  size?: 'sm' | 'md' | 'lg'
  /** Fuerza ocultar el wordmark aunque variant sea "horizontal". */
  showWordmark?: boolean
  className?: string
  'aria-label'?: string
}

const markSizePx: Record<NonNullable<LogoProps['size']>, number> = {
  sm: 20,
  md: 24,
  lg: 32,
}

const wordmarkTextClass: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
}

/**
 * Isotipo COORTEXXA: cruce de dos barras (referencia a la doble "X" del nombre)
 * dentro de un cuadrado redondeado — representa flujos que se cruzan y se
 * conectan dentro de una plataforma modular. Ver docs/brand-guide.md.
 * 100% SVG inline, sin assets externos.
 */
export function Logo({
  variant = 'horizontal',
  tone = 'default',
  size = 'md',
  showWordmark,
  className,
  'aria-label': ariaLabel = 'COORTEXXA',
}: LogoProps) {
  const markPx = markSizePx[size]
  const wordmarkColor = tone === 'light' ? '#ffffff' : '#10121a'
  const renderWordmark = showWordmark ?? variant === 'horizontal'

  return (
    <div className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width={markPx}
        height={markPx}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={ariaLabel}
      >
        <rect width="32" height="32" rx="9" fill="#4a3dd1" />
        <rect x="14.5" y="6.5" width="3" height="19" rx="1.5" fill="#ffffff" transform="rotate(23 16 16)" />
        <rect x="14.5" y="6.5" width="3" height="19" rx="1.5" fill="#ffffff" transform="rotate(-23 16 16)" />
      </svg>
      {renderWordmark && (
        <span
          className={cn('font-semibold tracking-tight', wordmarkTextClass[size])}
          style={{ color: wordmarkColor }}
        >
          COORTEXXA
        </span>
      )}
    </div>
  )
}

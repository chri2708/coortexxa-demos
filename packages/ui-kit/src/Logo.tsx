import { useId } from 'react'
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

const PETAL = 'M17,14 C23,12 29,14 29,16 C29,18 23,20 17,18 Z'

/**
 * Isotipo COORTEXXA "Nexus Inteligente": cuatro brazos redondeados en gradiente
 * azul→violeta que forman una X — conexión, inteligencia e infraestructura que
 * se cruza en un punto central. Vectorización propia aproximada de la
 * referencia visual aprobada (Fase 6.6). Ver docs/brand-guide.md.
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
  const gradientId = useId()
  const markPx = markSizePx[size]
  const wordmarkColor = tone === 'light' ? '#ffffff' : '#0b1020'
  const accentColor = tone === 'light' ? '#a996ff' : '#6d5ce0'
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
        <defs>
          <linearGradient id={gradientId} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2f6bff" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <g fill={`url(#${gradientId})`} transform="rotate(45 16 16)">
          <path d={PETAL} />
          <path d={PETAL} transform="rotate(90 16 16)" />
          <path d={PETAL} transform="rotate(180 16 16)" />
          <path d={PETAL} transform="rotate(270 16 16)" />
        </g>
      </svg>
      {renderWordmark && (
        <span
          className={cn('font-bold tracking-tight', wordmarkTextClass[size])}
          style={{ color: wordmarkColor }}
        >
          COORTE<span style={{ color: accentColor }}>XXA</span>
        </span>
      )}
    </div>
  )
}

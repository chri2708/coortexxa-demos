interface LogoProps {
  size?: number
  withWordmark?: boolean
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * Isotipo: cruce de dos barras (referencia a la doble "X" de COORTEXXA)
 * dentro de un cuadrado redondeado. Sin assets externos, 100% SVG inline.
 */
export function Logo({ size = 28, withWordmark = true, variant = 'dark', className }: LogoProps) {
  const wordmarkColor = variant === 'dark' ? '#ffffff' : '#10121a'

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="COORTEXXA">
        <rect width="32" height="32" rx="9" fill="#4a3dd1" />
        <rect x="14.5" y="6.5" width="3" height="19" rx="1.5" fill="#ffffff" transform="rotate(23 16 16)" />
        <rect x="14.5" y="6.5" width="3" height="19" rx="1.5" fill="#ffffff" transform="rotate(-23 16 16)" />
      </svg>
      {withWordmark && (
        <span
          className="text-[17px] font-semibold tracking-tight"
          style={{ color: wordmarkColor }}
        >
          COORTEXXA
        </span>
      )}
    </div>
  )
}

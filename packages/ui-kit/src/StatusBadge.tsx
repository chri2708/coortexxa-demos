import type { ReactNode } from 'react'
import { cn } from './lib/cn'

export type StatusTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral'

const toneClasses: Record<StatusTone, string> = {
  success: 'bg-success-100 text-success-500',
  warning: 'bg-warning-100 text-warning-500',
  danger: 'bg-danger-100 text-danger-500',
  info: 'bg-info-100 text-info-500',
  neutral: 'bg-surface-subtle text-ink-500',
}

const dotClasses: Record<StatusTone, string> = {
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
  info: 'bg-info-500',
  neutral: 'bg-ink-300',
}

interface StatusBadgeProps {
  tone: StatusTone
  children: ReactNode
  className?: string
}

export function StatusBadge({ tone, children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        toneClasses[tone],
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', dotClasses[tone])} />
      {children}
    </span>
  )
}

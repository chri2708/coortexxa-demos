import { TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from './lib/cn'

interface MetricCardProps {
  label: string
  value: string
  delta?: string
  deltaTone?: 'up' | 'down'
  className?: string
}

export function MetricCard({ label, value, delta, deltaTone = 'up', className }: MetricCardProps) {
  const TrendIcon = deltaTone === 'up' ? TrendingUp : TrendingDown

  return (
    <div
      className={cn(
        'min-w-0 rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-md)] transition-shadow hover:shadow-[var(--shadow-lg)]',
        className,
      )}
    >
      <p className="truncate text-sm font-medium text-ink-500">{label}</p>
      <p className="mt-2 break-words text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">{value}</p>
      {delta && (
        <p
          className={cn(
            'mt-2 flex items-center gap-1 text-xs font-medium',
            deltaTone === 'up' ? 'text-success-500' : 'text-danger-500',
          )}
        >
          <TrendIcon className="h-3.5 w-3.5" />
          {delta}
        </p>
      )}
    </div>
  )
}

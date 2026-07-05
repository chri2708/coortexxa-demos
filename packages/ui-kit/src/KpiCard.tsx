interface KpiCardProps {
  label: string
  value: string
  delta?: string
  deltaTone?: 'up' | 'down'
}

export function KpiCard({ label, value, delta, deltaTone = 'up' }: KpiCardProps) {
  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
      <p className="text-sm font-medium text-ink-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-ink-900">{value}</p>
      {delta && (
        <p className={`mt-2 text-xs font-medium ${deltaTone === 'up' ? 'text-success-500' : 'text-danger-500'}`}>
          {deltaTone === 'up' ? '▲' : '▼'} {delta}
        </p>
      )}
    </div>
  )
}

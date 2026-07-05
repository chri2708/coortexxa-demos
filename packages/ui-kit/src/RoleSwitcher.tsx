import { cn } from './lib/cn'

export interface RoleOption {
  value: string
  label: string
}

interface RoleSwitcherProps {
  roles: RoleOption[]
  active: string
  onChange: (value: string) => void
  label?: string
}

export function RoleSwitcher({ roles, active, onChange, label = 'Vista demo:' }: RoleSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-xs font-medium text-ink-500 sm:inline">{label}</span>
      <div className="flex items-center gap-1 rounded-[var(--radius-sm)] bg-surface-subtle p-1">
        {roles.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => onChange(r.value)}
            className={cn(
              'rounded-[calc(var(--radius-sm)-2px)] px-2.5 py-1 text-xs font-medium transition-colors',
              active === r.value
                ? 'bg-surface text-ink-900 shadow-[var(--shadow-sm)]'
                : 'text-ink-500 hover:text-ink-900',
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  )
}

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
    <div className="flex min-w-0 items-center gap-2">
      <span className="hidden shrink-0 text-xs font-medium text-ink-500 sm:inline">{label}</span>
      <div className="flex min-w-0 max-w-full items-center gap-1 overflow-x-auto rounded-[var(--radius-sm)] bg-surface-subtle p-1">
        {roles.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => onChange(r.value)}
            className={cn(
              'shrink-0 rounded-[calc(var(--radius-sm)-2px)] px-2.5 py-1 text-xs font-medium transition-colors',
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

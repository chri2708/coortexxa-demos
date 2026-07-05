import { useRole, type RolDemo } from '@/context/RoleContext'
import { cn } from '@coortexxa/ui-kit'

const roles: { value: RolDemo; label: string }[] = [
  { value: 'EJECUTIVO', label: 'Ejecutivo' },
  { value: 'SUPERVISOR', label: 'Supervisor' },
  { value: 'GERENTE', label: 'Gerente' },
]

export function RoleSwitcher() {
  const { rol, setRol } = useRole()

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-xs font-medium text-ink-500 sm:inline">Vista demo:</span>
      <div className="flex items-center gap-1 rounded-[var(--radius-sm)] bg-surface-subtle p-1">
        {roles.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => setRol(r.value)}
            className={cn(
              'rounded-[calc(var(--radius-sm)-2px)] px-2.5 py-1 text-xs font-medium transition-colors',
              rol === r.value ? 'bg-surface text-ink-900 shadow-[var(--shadow-sm)]' : 'text-ink-500 hover:text-ink-900',
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  )
}

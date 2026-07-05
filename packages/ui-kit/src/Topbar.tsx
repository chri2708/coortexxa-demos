import type { ReactNode } from 'react'
import { Bell } from 'lucide-react'

interface TopbarProps {
  title: string
  description?: string
  userName: string
  actions?: ReactNode
}

export function Topbar({ title, description, userName, actions }: TopbarProps) {
  const initials = userName
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-0">
        <h1 className="truncate text-2xl font-semibold tracking-tight text-ink-900">{title}</h1>
        {description && <p className="mt-1 truncate text-sm text-ink-500">{description}</p>}
      </div>
      <div className="flex shrink-0 items-center gap-4">
        {actions}
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink-500 transition-colors hover:bg-surface-hover"
          aria-label="Notificaciones"
        >
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
            {initials}
          </div>
          <span className="hidden text-sm font-medium text-ink-700 sm:inline">{userName}</span>
        </div>
      </div>
    </header>
  )
}

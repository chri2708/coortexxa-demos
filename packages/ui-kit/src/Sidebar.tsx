import type { ComponentType } from 'react'
import { Logo } from '@coortexxa/theme'
import { cn } from './lib/cn'

export interface SidebarItem {
  label: string
  icon?: ComponentType<{ className?: string }>
  active?: boolean
  href?: string
}

export function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-surface-sidebar px-4 py-6">
      <div className="mb-8 px-2">
        <Logo variant="dark" size={26} />
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href={item.href ?? '#'}
              className={cn(
                'flex items-center gap-2.5 rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors',
                item.active
                  ? 'bg-brand-500 text-white'
                  : 'text-ink-300 hover:bg-surface-sidebar-hover hover:text-white',
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {item.label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

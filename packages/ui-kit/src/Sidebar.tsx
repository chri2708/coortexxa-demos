import { Fragment, type ComponentType, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { Logo } from './Logo'
import { cn } from './lib/cn'

export interface SidebarItem {
  label: string
  icon?: ComponentType<{ className?: string }>
  active?: boolean
  href?: string
}

export interface SidebarLinkProps {
  href: string
  className: string
  onClick: () => void
  children: ReactNode
}

interface SidebarProps {
  items: SidebarItem[]
  onNavigate?: () => void
  onClose?: () => void
  /** Inyecta el componente de link real (ej. react-router `Link`) para apps con rutas. Por defecto usa `<a href="#">` (una sola pantalla). */
  renderLink?: (props: SidebarLinkProps) => ReactNode
}

const defaultRenderLink = ({ href, className, onClick, children }: SidebarLinkProps) => (
  <a
    href={href}
    className={className}
    onClick={(event) => {
      event.preventDefault()
      onClick()
    }}
  >
    {children}
  </a>
)

export function Sidebar({ items, onNavigate, onClose, renderLink = defaultRenderLink }: SidebarProps) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-surface-sidebar px-4 py-6">
      <div className="mb-8 flex items-center justify-between px-2">
        <Logo variant="horizontal" tone="light" size="md" />
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] text-ink-300 transition-colors hover:bg-surface-sidebar-hover hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const Icon = item.icon
          const className = cn(
            'flex items-center gap-2.5 rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors',
            item.active
              ? 'bg-brand-500 text-white'
              : 'text-ink-300 hover:bg-surface-sidebar-hover hover:text-white',
          )
          return (
            <Fragment key={item.label}>
              {renderLink({
                href: item.href ?? '#',
                className,
                onClick: () => onNavigate?.(),
                children: (
                  <>
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </>
                ),
              })}
            </Fragment>
          )
        })}
      </nav>
    </aside>
  )
}

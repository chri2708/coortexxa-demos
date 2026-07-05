import { useEffect, useState, type ReactNode } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from './Logo'
import { Sidebar, type SidebarItem, type SidebarLinkProps } from './Sidebar'
import { Topbar } from './Topbar'
import { cn } from './lib/cn'

interface DashboardShellProps {
  navItems: SidebarItem[]
  topbarTitle: string
  topbarDescription?: string
  userName: string
  children: ReactNode
  topbarActions?: ReactNode
  renderLink?: (props: SidebarLinkProps) => ReactNode
}

export function DashboardShell({
  navItems,
  topbarTitle,
  topbarDescription,
  userName,
  children,
  topbarActions,
  renderLink,
}: DashboardShellProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (!drawerOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <div className="flex min-h-screen bg-surface-subtle">
      {/* Sidebar fija — desktop/tablet grande */}
      <div className="hidden lg:block">
        <Sidebar items={navItems} renderLink={renderLink} />
      </div>

      {/* Drawer — mobile/tablet chico */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden',
          drawerOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!drawerOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-ink-900/60 transition-opacity duration-200',
            drawerOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={cn(
            'absolute inset-y-0 left-0 shadow-[var(--shadow-lg)] transition-transform duration-200',
            drawerOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <Sidebar
            items={navItems}
            onNavigate={() => setDrawerOpen(false)}
            onClose={() => setDrawerOpen(false)}
            renderLink={renderLink}
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barra superior mobile: hamburguesa + logo, la sidebar con logo está oculta */}
        <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 lg:hidden">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-ink-700 transition-colors hover:bg-surface-hover"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Logo variant="horizontal" tone="default" size="sm" />
          <div className="h-9 w-9" />
        </div>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
          <Topbar
            title={topbarTitle}
            description={topbarDescription}
            userName={userName}
            actions={topbarActions}
          />
          {children}
        </main>
      </div>
    </div>
  )
}

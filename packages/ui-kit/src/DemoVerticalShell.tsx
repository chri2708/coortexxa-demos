import type { ComponentType, ReactNode } from 'react'
import { DashboardShell } from './DashboardShell'
import { DemoDisclaimerBanner } from './DemoDisclaimerBanner'
import type { SidebarItem, SidebarLinkProps } from './Sidebar'

export interface DemoNavItem {
  label: string
  href: string
  icon?: ComponentType<{ className?: string }>
}

interface DemoVerticalShellProps {
  navItems: DemoNavItem[]
  /** Ruta actual (ej. `location.pathname`). El shell no importa ningún router — lo calcula la app. */
  activePath: string
  /** Componente de link real (ej. react-router `Link`). El shell no sabe qué router usa la app. */
  renderLink: (props: SidebarLinkProps) => ReactNode
  topbarTitle: string
  topbarDescription?: string
  userName: string
  topbarActions?: ReactNode
  disclaimerMessage?: string
  children: ReactNode
}

export function DemoVerticalShell({
  navItems,
  activePath,
  renderLink,
  topbarTitle,
  topbarDescription,
  userName,
  topbarActions,
  disclaimerMessage,
  children,
}: DemoVerticalShellProps) {
  const items: SidebarItem[] = navItems.map((item) => ({
    ...item,
    active: item.href === '/' ? activePath === '/' : activePath.startsWith(item.href),
  }))

  return (
    <DashboardShell
      navItems={items}
      renderLink={renderLink}
      topbarTitle={topbarTitle}
      topbarDescription={topbarDescription}
      userName={userName}
      topbarActions={topbarActions}
    >
      <DemoDisclaimerBanner message={disclaimerMessage} />
      {children}
    </DashboardShell>
  )
}

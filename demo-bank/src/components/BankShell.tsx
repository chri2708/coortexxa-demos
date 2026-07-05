import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, PlusCircle, TrendingUp, Workflow } from 'lucide-react'
import { DashboardShell, type SidebarItem, type SidebarLinkProps } from '@coortexxa/ui-kit'
import { useRole } from '@/context/RoleContext'
import { RoleSwitcher } from './RoleSwitcher'
import { DemoDisclaimerBanner } from './DemoDisclaimerBanner'

const baseNavItems: { label: string; href: string; icon: SidebarItem['icon'] }[] = [
  { label: 'Dashboard Bank', href: '/', icon: LayoutDashboard },
  { label: 'Pipeline', href: '/pipeline', icon: Workflow },
  { label: 'Nueva solicitud', href: '/solicitudes/nueva', icon: PlusCircle },
  { label: 'Simulador POS', href: '/simulador', icon: TrendingUp },
]

const renderRouterLink = ({ href, className, onClick, children }: SidebarLinkProps) => (
  <Link to={href} className={className} onClick={onClick}>
    {children}
  </Link>
)

const userNameByRol = {
  EJECUTIVO: 'Camila Rojas (Ejecutivo)',
  SUPERVISOR: 'Supervisión Zona Centro',
  GERENTE: 'Gerencia COORTEXXA Bank',
}

interface BankShellProps {
  title: string
  description?: string
  children: ReactNode
}

export function BankShell({ title, description, children }: BankShellProps) {
  const location = useLocation()
  const { rol } = useRole()

  const navItems: SidebarItem[] = baseNavItems.map((item) => ({
    ...item,
    active: item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href),
  }))

  return (
    <DashboardShell
      navItems={navItems}
      renderLink={renderRouterLink}
      topbarTitle={title}
      topbarDescription={description}
      userName={userNameByRol[rol]}
      topbarActions={<RoleSwitcher />}
    >
      <DemoDisclaimerBanner />
      {children}
    </DashboardShell>
  )
}

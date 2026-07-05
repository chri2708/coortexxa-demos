import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, ListChecks, Map, Trophy } from 'lucide-react'
import { DemoVerticalShell, RoleSwitcher, type DemoNavItem, type SidebarLinkProps } from '@coortexxa/ui-kit'
import { useRole, type RolDemo } from '@/context/RoleContext'

const navItems: DemoNavItem[] = [
  { label: 'Dashboard Sales', href: '/', icon: LayoutDashboard },
  { label: 'Agenda de visitas', href: '/visitas', icon: ListChecks },
  { label: 'Pedidos', href: '/pedidos', icon: ListChecks },
  { label: 'Ranking y bonos', href: '/ranking', icon: Trophy },
  { label: 'Territorio', href: '/territorio', icon: Map },
]

const roleOptions: { value: RolDemo; label: string }[] = [
  { value: 'VENDEDOR', label: 'Vendedor' },
  { value: 'SUPERVISOR', label: 'Supervisor' },
  { value: 'GERENTE', label: 'Gerente' },
]

const renderRouterLink = ({ href, className, onClick, children }: SidebarLinkProps) => (
  <Link to={href} className={className} onClick={onClick}>
    {children}
  </Link>
)

const userNameByRol: Record<RolDemo, string> = {
  VENDEDOR: 'Camila Rojas (Vendedor)',
  SUPERVISOR: 'Supervisión Ruta Norte',
  GERENTE: 'Gerencia COORTEXXA Sales',
}

interface SalesShellProps {
  title: string
  description?: string
  children: ReactNode
}

export function SalesShell({ title, description, children }: SalesShellProps) {
  const location = useLocation()
  const { rol, setRol } = useRole()

  return (
    <DemoVerticalShell
      navItems={navItems}
      activePath={location.pathname}
      renderLink={renderRouterLink}
      topbarTitle={title}
      topbarDescription={description}
      userName={userNameByRol[rol]}
      topbarActions={<RoleSwitcher roles={roleOptions} active={rol} onChange={(value) => setRol(value as RolDemo)} />}
    >
      {children}
    </DemoVerticalShell>
  )
}

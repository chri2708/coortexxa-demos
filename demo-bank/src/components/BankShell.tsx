import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, PlusCircle, Trophy, TrendingUp, Workflow } from 'lucide-react'
import { DemoVerticalShell, RoleSwitcher, type DemoNavItem, type SidebarLinkProps } from '@coortexxa/ui-kit'
import { useRole, type RolDemo } from '@/context/RoleContext'

const navItems: DemoNavItem[] = [
  { label: 'Dashboard Bank', href: '/', icon: LayoutDashboard },
  { label: 'Pipeline', href: '/pipeline', icon: Workflow },
  { label: 'Nueva solicitud', href: '/solicitudes/nueva', icon: PlusCircle },
  { label: 'Simulador POS', href: '/simulador', icon: TrendingUp },
  { label: 'Ranking y cierre', href: '/ranking', icon: Trophy },
]

const roleOptions: { value: RolDemo; label: string }[] = [
  { value: 'EJECUTIVO', label: 'Ejecutivo' },
  { value: 'SUPERVISOR', label: 'Supervisor' },
  { value: 'GERENTE', label: 'Gerente' },
]

const renderRouterLink = ({ href, className, onClick, children }: SidebarLinkProps) => (
  <Link to={href} className={className} onClick={onClick}>
    {children}
  </Link>
)

const userNameByRol: Record<RolDemo, string> = {
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

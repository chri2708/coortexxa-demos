import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ClipboardList, FileStack, LayoutDashboard, PlusCircle, Settings, Trophy } from 'lucide-react'
import { DemoVerticalShell, RoleSwitcher, type DemoNavItem, type SidebarLinkProps } from '@coortexxa/ui-kit'
import { useRole, type RolDemo } from '@/context/RoleContext'

const navItems: DemoNavItem[] = [
  { label: 'Dashboard Health', href: '/', icon: LayoutDashboard },
  { label: 'Solicitudes', href: '/solicitudes', icon: ClipboardList },
  { label: 'Nueva solicitud', href: '/solicitudes/nueva', icon: PlusCircle },
  { label: 'Documentos', href: '/documentos', icon: FileStack },
  { label: 'Ranking', href: '/ranking', icon: Trophy },
  { label: 'Operaciones', href: '/operaciones', icon: Settings },
]

const roleOptions: { value: RolDemo; label: string }[] = [
  { value: 'EJECUTIVO', label: 'Ejecutivo' },
  { value: 'SUPERVISOR', label: 'Supervisor' },
  { value: 'OPERACIONES', label: 'Operaciones' },
  { value: 'GERENTE', label: 'Gerente' },
]

const renderRouterLink = ({ href, className, onClick, children }: SidebarLinkProps) => (
  <Link to={href} className={className} onClick={onClick}>
    {children}
  </Link>
)

const userNameByRol: Record<RolDemo, string> = {
  EJECUTIVO: 'Javiera Rojas (Ejecutivo)',
  SUPERVISOR: 'Supervisión Salud Centro',
  OPERACIONES: 'Operaciones COORTEXXA Health',
  GERENTE: 'Gerencia COORTEXXA Health',
}

interface HealthShellProps {
  title: string
  description?: string
  children: ReactNode
}

export function HealthShell({ title, description, children }: HealthShellProps) {
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

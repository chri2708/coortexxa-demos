import { createContext, useContext, useState, type ReactNode } from 'react'

export type RolDemo = 'EJECUTIVO' | 'SUPERVISOR' | 'OPERACIONES' | 'GERENTE'

interface RoleContextValue {
  rol: RolDemo
  setRol: (rol: RolDemo) => void
}

const RoleContext = createContext<RoleContextValue | null>(null)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [rol, setRol] = useState<RolDemo>('GERENTE')
  return <RoleContext.Provider value={{ rol, setRol }}>{children}</RoleContext.Provider>
}

export function useRole() {
  const ctx = useContext(RoleContext)
  if (!ctx) throw new Error('useRole debe usarse dentro de <RoleProvider>')
  return ctx
}

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@coortexxa/theme'
import { Button } from '@coortexxa/ui-kit'

const navItems = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Verticales', href: '#verticales' },
  { label: 'Demos', href: '#demos' },
  { label: 'Seguridad', href: '#seguridad' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo variant="light" size={24} />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#command-center" className="hidden sm:block">
            <Button variant="secondary" size="sm">
              Ver Command Center
            </Button>
          </a>
          <a href="#contacto">
            <Button variant="primary" size="sm">
              Solicitar demo
            </Button>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-ink-700 transition-colors hover:bg-surface-hover lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-surface px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-surface-hover"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

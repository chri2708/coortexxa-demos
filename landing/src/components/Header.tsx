import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button, Logo } from '@coortexxa/ui-kit'
import { demoLinks } from '@/config/demoLinks'

interface MenuItem {
  label: string
  href: string
  desc: string
  flagship?: boolean
}

const productos: MenuItem[] = [
  { label: 'Command Center', href: '#productos', desc: 'Visión ejecutiva consolidada de la operación' },
  { label: 'Field Sales', href: '#productos', desc: 'Visita, formulario y venta desde el terreno' },
  { label: 'Forms', href: '#productos', desc: 'Formularios con documentos y firma adjuntos' },
  { label: 'Ranking & Incentives', href: '#productos', desc: 'Competencia interna en vivo' },
  { label: 'KPI Analytics', href: '#productos', desc: 'Indicadores comerciales por rol' },
]

const sectores: MenuItem[] = [
  { label: 'Bank / POS', href: '#banco', desc: 'Caso principal — flujo completo', flagship: true },
  { label: 'Health', href: '#verticales', desc: 'Salud y afiliaciones' },
  { label: 'Sales / B2B', href: '#verticales', desc: 'Fuerza de venta en ruta' },
  { label: 'AFP / Financial', href: '#verticales', desc: 'Traspaso previsional' },
  { label: 'Automotora', href: '#verticales', desc: 'Venta multisucursal' },
  { label: 'Retail', href: '#verticales', desc: 'Cobertura y reposición de ruta' },
]

const simpleLinks = [
  { label: 'Bank', href: '#banco' },
  { label: 'Demos', href: '#demos' },
  { label: 'Seguridad', href: '#seguridad' },
  { label: 'Contacto', href: '#contacto' },
]

function MegaMenu({ label, items }: { label: string; items: MenuItem[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-ink-500 transition-colors group-hover:text-ink-900"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-40 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface p-2 shadow-[var(--shadow-lg)]">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col rounded-[var(--radius-sm)] px-3 py-2 transition-colors hover:bg-surface-hover"
            >
              <span
                className={`text-sm font-medium ${item.flagship ? 'text-brand-600' : 'text-ink-900'}`}
              >
                {item.label}
              </span>
              <span className="text-xs text-ink-500">{item.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo variant="horizontal" tone="default" size="md" />

        <nav className="hidden items-center gap-6 lg:flex">
          <MegaMenu label="Productos" items={productos} />
          <MegaMenu label="Sectores" items={sectores} />
          {simpleLinks.map((item) => (
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
          <a
            href={demoLinks.commandCenter}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
            title="Acceso a la plataforma demo — sin autenticación real"
          >
            <Button variant="secondary" size="sm">
              Ingresar a plataforma
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
        <nav className="flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto border-t border-border bg-surface px-4 py-3 lg:hidden">
          <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-ink-300">
            Productos
          </p>
          {productos.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-surface-hover"
            >
              {item.label}
            </a>
          ))}
          <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-ink-300">
            Sectores
          </p>
          {sectores.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-hover ${
                item.flagship ? 'text-brand-600' : 'text-ink-700'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="my-2 border-t border-border" />
          {simpleLinks.map((item) => (
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

export interface SidebarItem {
  label: string
  active?: boolean
}

export function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <aside className="flex h-full w-64 flex-col bg-surface-sidebar px-4 py-6">
      <div className="mb-8 px-2">
        <span className="text-lg font-semibold tracking-tight text-white">COORTEXXA</span>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              item.active
                ? 'bg-brand-500 text-white'
                : 'text-ink-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

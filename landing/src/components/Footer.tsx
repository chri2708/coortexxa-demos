import { Logo } from '@coortexxa/ui-kit'

export function Footer() {
  return (
    <footer className="bg-surface-sidebar py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-10">
        <Logo variant="horizontal" tone="light" size="sm" />
        <p className="text-xs text-ink-300">© 2026 COORTEXXA. Plataforma en fase de demo comercial.</p>
      </div>
    </footer>
  )
}

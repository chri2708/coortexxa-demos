import { ArrowUpRight, Briefcase, Landmark, LayoutDashboard } from 'lucide-react'
import { Button, Card, CardContent, CardHeader, CardTitle, StatusBadge } from '@coortexxa/ui-kit'
import { demoLinks } from '@/config/demoLinks'

const demosListos = [
  {
    icon: LayoutDashboard,
    name: 'Command Center',
    description: 'Dashboard ejecutivo consolidado, con datos de ejemplo.',
    href: demoLinks.commandCenter,
  },
  {
    icon: Landmark,
    name: 'COORTEXXA Bank',
    description: 'Flujo completo: pipeline, solicitud, firma simulada y workflow.',
    href: demoLinks.bank,
  },
  {
    icon: Briefcase,
    name: 'COORTEXXA Sales',
    description: 'Agenda de visitas, check-in, pedidos, ranking y territorio para fuerza de venta.',
    href: demoLinks.sales,
  },
]

export function DemosDisponiblesSection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Demos disponibles ahora
          </h2>
          <p className="mt-4 text-ink-500">
            Estos demos ya se pueden navegar en vivo. El resto de las verticales sigue en construcción.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demosListos.map(({ icon: Icon, name, description, href }) => (
            <Card key={name}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-brand-100 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{name}</CardTitle>
                </div>
                <StatusBadge tone="success">Demo ready</StatusBadge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink-500">{description}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                  <Button variant="secondary" size="sm" className="gap-1.5">
                    Abrir demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-5">
          <CardContent className="flex flex-col items-center gap-3 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold text-ink-900">Insurance · Isapre · AFP · Health</p>
              <p className="text-sm text-ink-500">En roadmap — mismo núcleo de plataforma, aún sin demo navegable.</p>
            </div>
            <StatusBadge tone="neutral">Roadmap</StatusBadge>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

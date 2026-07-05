import { Tabs, TabsContent, TabsList, TabsTrigger } from '@coortexxa/ui-kit'
import { SalesShell } from '@/components/SalesShell'
import { VisitCard } from '@/components/VisitCard'
import { useVisitas } from '@/context/VisitasContext'

const fechas = [
  { value: '2026-07-05', label: 'Hoy (05 jul)' },
  { value: '2026-07-06', label: 'Mañana (06 jul)' },
]

export function AgendaVisitasPage() {
  const { visitas } = useVisitas()

  return (
    <SalesShell title="Agenda de visitas" description="Visitas programadas — cliente, dirección y estado son datos ficticios">
      <Tabs defaultValue={fechas[0].value}>
        <TabsList>
          {fechas.map((f) => (
            <TabsTrigger key={f.value} value={f.value}>
              {f.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {fechas.map((f) => (
          <TabsContent key={f.value} value={f.value}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visitas
                .filter((v) => v.fecha === f.value)
                .sort((a, b) => a.horaProgramada.localeCompare(b.horaProgramada))
                .map((v) => (
                  <VisitCard key={v.id} visita={v} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SalesShell>
  )
}

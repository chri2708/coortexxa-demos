import { Tabs, TabsContent, TabsList, TabsTrigger } from '@coortexxa/ui-kit'

interface DemoFlow {
  key: string
  label: string
  steps: string[]
}

const flows: DemoFlow[] = [
  {
    key: 'bank',
    label: 'Bank',
    steps: [
      'El ejecutivo completa el formulario de producto bancario en terreno u oficina.',
      'El cliente firma digitalmente y el documento queda adjunto a la venta.',
      'El supervisor revisa y aprueba según el workflow configurado.',
      'La gerencia ve la venta reflejada en el Command Center en tiempo real.',
    ],
  },
  {
    key: 'sales',
    label: 'Sales',
    steps: [
      'El vendedor registra la visita y el pedido desde el formulario en terreno.',
      'El sistema valida datos mínimos antes de permitir el envío.',
      'El pedido entra al workflow de aprobación comercial.',
      'El ranking de ejecutivos y KPI se actualizan automáticamente.',
    ],
  },
  {
    key: 'insurance',
    label: 'Insurance',
    steps: [
      'Se genera una cotización a partir de los datos del cliente.',
      'El cliente firma la póliza de forma digital.',
      'El área de suscripción valida la póliza en el workflow.',
      'La póliza queda trazada y disponible para auditoría.',
    ],
  },
  {
    key: 'isapre',
    label: 'Isapre',
    steps: [
      'El ejecutivo inicia el formulario de afiliación de salud.',
      'Se adjuntan los documentos requeridos por el proceso.',
      'El equipo de validación revisa la afiliación.',
      'Gerencia consulta el reporte de afiliaciones del período.',
    ],
  },
  {
    key: 'afp',
    label: 'AFP',
    steps: [
      'El ejecutivo completa el formulario de afiliación o traspaso previsional.',
      'El cliente firma el documento de traspaso.',
      'El workflow enruta el caso para validación interna.',
      'El dashboard por rol muestra el estado a cada nivel de la operación.',
    ],
  },
  {
    key: 'health',
    label: 'Health',
    steps: [
      'Se registra la ficha del paciente y el consentimiento informado.',
      'El consentimiento se firma digitalmente.',
      'El documento queda archivado en la gestión documental del caso.',
      'El equipo de gestión revisa KPI de atención del período.',
    ],
  },
]

export function DemosSection() {
  return (
    <section id="demos" className="border-b border-border bg-surface-subtle py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Un flujo de demo por vertical
          </h2>
          <p className="mt-4 text-ink-500">
            Cada demo sigue el mismo patrón: capturar, validar, aprobar y visualizar — adaptado a la
            operación de cada industria.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <Tabs defaultValue="bank" className="w-full max-w-3xl">
            <TabsList className="flex w-full flex-wrap justify-center gap-1">
              {flows.map((flow) => (
                <TabsTrigger key={flow.key} value={flow.key}>
                  {flow.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {flows.map((flow) => (
              <TabsContent key={flow.key} value={flow.key}>
                <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {flow.steps.map((step, index) => (
                    <li
                      key={step}
                      className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-sm)]"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="mt-3 text-sm text-ink-700">{step}</p>
                    </li>
                  ))}
                </ol>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

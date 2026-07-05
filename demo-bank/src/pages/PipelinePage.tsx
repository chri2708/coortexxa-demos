import { BankShell } from '@/components/BankShell'
import { PipelineBoard } from '@/components/PipelineBoard'
import { useSolicitudes } from '@/context/SolicitudesContext'

export function PipelinePage() {
  const { solicitudes } = useSolicitudes()

  return (
    <BankShell title="Pipeline de solicitudes" description="Todas las solicitudes de demostración, agrupadas por estado">
      <PipelineBoard solicitudes={solicitudes} />
    </BankShell>
  )
}

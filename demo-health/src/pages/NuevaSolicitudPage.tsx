import { HealthShell } from '@/components/HealthShell'
import { HealthApplicationForm } from '@/components/HealthApplicationForm'

export function NuevaSolicitudPage() {
  return (
    <HealthShell title="Nueva solicitud" description="Afiliación o contratación — datos 100% ficticios de demostración">
      <HealthApplicationForm />
    </HealthShell>
  )
}

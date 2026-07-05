import { BankShell } from '@/components/BankShell'
import { SolicitudForm } from '@/components/SolicitudForm'

export function NuevaSolicitudPage() {
  return (
    <BankShell title="Nueva solicitud" description="POS o cuenta empresa — datos 100% ficticios de demostración">
      <SolicitudForm />
    </BankShell>
  )
}

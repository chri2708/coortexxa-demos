import { BankShell } from '@/components/BankShell'
import { SavingsSimulator } from '@/components/SavingsSimulator'

export function SimuladorPage() {
  return (
    <BankShell title="Simulador POS" description="Estimación comercial de ahorro — cifras de ejemplo">
      <SavingsSimulator />
    </BankShell>
  )
}

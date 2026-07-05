import { Info } from 'lucide-react'

interface DemoDisclaimerBannerProps {
  message?: string
}

const defaultMessage =
  'Datos, firma y workflow son simulados — sin validez legal, sin backend y sin persistencia real. El selector de rol es solo para fines de presentación.'

export function DemoDisclaimerBanner({ message = defaultMessage }: DemoDisclaimerBannerProps) {
  return (
    <div className="mb-6 flex items-start gap-2.5 rounded-[var(--radius-md)] border border-info-100 bg-info-100/60 px-4 py-3 text-sm text-ink-700">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-info-500" />
      <p>
        <span className="font-semibold">Entorno de demostración.</span> {message}
      </p>
    </div>
  )
}

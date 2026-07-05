import { Check } from 'lucide-react'

export interface StepperStep {
  label: string
}

interface StepperProps {
  steps: StepperStep[]
  currentIndex: number
}

export function Stepper({ steps, currentIndex }: StepperProps) {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => {
        const completado = index < currentIndex
        const activo = index === currentIndex
        return (
          <div key={step.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                  completado
                    ? 'bg-success-500 text-white'
                    : activo
                      ? 'bg-brand-500 text-white'
                      : 'bg-surface-subtle text-ink-300'
                }`}
              >
                {completado ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              <span className={`text-xs font-medium ${activo ? 'text-ink-900' : 'text-ink-500'}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`mx-2 h-0.5 flex-1 ${completado ? 'bg-success-500' : 'bg-border'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

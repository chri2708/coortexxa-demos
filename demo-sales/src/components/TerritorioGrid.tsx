import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@coortexxa/ui-kit'
import { territorios } from '@/data/territorios'

function colorPorCobertura(pct: number) {
  if (pct >= 80) return 'bg-success-100 border-success-500 text-success-500'
  if (pct >= 55) return 'bg-info-100 border-info-500 text-info-500'
  if (pct >= 40) return 'bg-warning-100 border-warning-500 text-warning-500'
  return 'bg-danger-100 border-danger-500 text-danger-500'
}

export function TerritorioGrid() {
  return (
    <div>
      <p className="mb-4 text-xs text-ink-500">
        Vista territorial simulada — representación tipo grid, no un mapa geográfico real.
      </p>
      <TooltipProvider>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {territorios.map((zona) => (
            <Tooltip key={zona.id}>
              <TooltipTrigger asChild>
                <div
                  className={`cursor-default rounded-[var(--radius-lg)] border-2 p-5 text-center transition-transform hover:scale-[1.02] ${colorPorCobertura(zona.coberturaPorcentaje)}`}
                >
                  <p className="text-2xl font-semibold">{zona.coberturaPorcentaje}%</p>
                  <p className="mt-1 text-xs font-medium text-ink-700">{zona.nombre}</p>
                  <p className="mt-1 text-xs text-ink-500">{zona.visitasPendientes} visitas pendientes</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Cobertura {zona.coberturaPorcentaje}% · {zona.visitasPendientes} visitas pendientes
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  )
}

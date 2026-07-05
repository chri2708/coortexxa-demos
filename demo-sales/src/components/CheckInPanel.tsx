import { MapPin } from 'lucide-react'
import { Button } from '@coortexxa/ui-kit'
import type { CheckInInfo } from '@/data/visitas'

interface CheckInPanelProps {
  checkIn: CheckInInfo
  onCheckIn: () => void
  onCheckOut: () => void
}

export function CheckInPanel({ checkIn, onCheckIn, onCheckOut }: CheckInPanelProps) {
  const { lat, lng } = checkIn.geolocalizacionSimulada

  return (
    <div>
      <div className="flex items-center gap-2 text-xs text-ink-500">
        <MapPin className="h-3.5 w-3.5" />
        Geolocalización simulada: {lat.toFixed(4)}, {lng.toFixed(4)} (dato ficticio, no es GPS real)
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-medium text-ink-500">Hora de entrada</p>
          <p className="mt-1 text-lg font-semibold text-ink-900">{checkIn.horaEntrada ?? '—'}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-ink-500">Hora de salida</p>
          <p className="mt-1 text-lg font-semibold text-ink-900">{checkIn.horaSalida ?? '—'}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {!checkIn.horaEntrada && (
          <Button size="sm" onClick={onCheckIn}>
            Registrar check-in (demo)
          </Button>
        )}
        {checkIn.horaEntrada && !checkIn.horaSalida && (
          <Button size="sm" variant="secondary" onClick={onCheckOut}>
            Registrar check-out (demo)
          </Button>
        )}
      </div>
    </div>
  )
}

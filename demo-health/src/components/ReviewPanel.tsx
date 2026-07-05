import { useState } from 'react'
import { Button } from '@coortexxa/ui-kit'
import { useRole } from '@/context/RoleContext'
import { useSolicitudes } from '@/context/SolicitudesContext'
import type { SolicitudHealth } from '@/data/solicitudes'

export function ReviewPanel({ solicitud }: { solicitud: SolicitudHealth }) {
  const { rol } = useRole()
  const { ingresarSolicitud, enviarARevision, observar, corregirObservacion, aprobar, rechazar, activar } =
    useSolicitudes()
  const [nota, setNota] = useState('')

  if (rol === 'GERENTE') {
    return <p className="text-xs text-ink-500">Vista de solo lectura — cambia a otro rol para gestionar esta solicitud.</p>
  }

  const notaInput = (placeholder: string) => (
    <input
      value={nota}
      onChange={(event) => setNota(event.target.value)}
      placeholder={placeholder}
      className="mb-2 w-full rounded-[var(--radius-sm)] border border-border px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-[var(--color-ring)]"
    />
  )

  if (rol === 'EJECUTIVO' && solicitud.estado === 'BORRADOR') {
    return (
      <Button size="sm" onClick={() => ingresarSolicitud(solicitud.id)}>
        Ingresar solicitud (demo)
      </Button>
    )
  }

  if (rol === 'EJECUTIVO' && solicitud.estado === 'INGRESADA') {
    return (
      <Button size="sm" onClick={() => enviarARevision(solicitud.id)}>
        Enviar a revisión (demo)
      </Button>
    )
  }

  if (rol === 'EJECUTIVO' && solicitud.estado === 'OBSERVADA') {
    return (
      <div>
        {notaInput('Nota de corrección (opcional)')}
        <Button size="sm" onClick={() => corregirObservacion(solicitud.id, nota)}>
          Corregir observación (demo)
        </Button>
      </div>
    )
  }

  if (rol === 'SUPERVISOR' && solicitud.estado === 'EN_REVISION') {
    return (
      <div className="flex flex-col gap-2">
        {notaInput('Nota de observación / aprobación (opcional)')}
        <div className="flex flex-wrap gap-2">
          <Button size="sm" onClick={() => aprobar(solicitud.id, nota)}>
            Aprobar (demo)
          </Button>
          <Button size="sm" variant="secondary" onClick={() => observar(solicitud.id, nota)}>
            Observar (demo)
          </Button>
          <Button size="sm" variant="destructive" onClick={() => rechazar(solicitud.id, nota)}>
            Rechazar (demo)
          </Button>
        </div>
      </div>
    )
  }

  if (rol === 'OPERACIONES' && solicitud.estado === 'APROBADA') {
    return (
      <Button size="sm" onClick={() => activar(solicitud.id)}>
        Activar afiliación (demo)
      </Button>
    )
  }

  return <p className="text-xs text-ink-500">No hay acciones disponibles para tu rol en este estado.</p>
}

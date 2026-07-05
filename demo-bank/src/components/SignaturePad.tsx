import { useRef, useState } from 'react'
import { Button } from '@coortexxa/ui-kit'

interface SignaturePadProps {
  firmado: boolean
  onFirmar: () => void
}

export function SignaturePad({ firmado, onFirmar }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const [hasStroke, setHasStroke] = useState(false)

  const getPos = (canvas: HTMLCanvasElement, event: React.PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    return { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  const start = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (firmado) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    drawing.current = true
    const { x, y } = getPos(canvas, event)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const move = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current || firmado) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const { x, y } = getPos(canvas, event)
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#10121a'
    ctx.lineTo(x, y)
    ctx.stroke()
    setHasStroke(true)
  }

  const end = () => {
    drawing.current = false
  }

  const limpiar = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasStroke(false)
  }

  return (
    <div>
      <p className="mb-2 text-xs font-medium text-ink-500">
        Firma simulada — dibuja en el recuadro. Sin validez legal ni electrónica real.
      </p>
      <canvas
        ref={canvasRef}
        width={480}
        height={160}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerLeave={end}
        className={`w-full max-w-md touch-none rounded-[var(--radius-md)] border border-border bg-surface-subtle ${
          firmado ? 'opacity-60' : ''
        }`}
      />
      <div className="mt-3 flex gap-2">
        {firmado ? (
          <span className="text-sm font-medium text-success-500">Firma simulada registrada.</span>
        ) : (
          <>
            <Button size="sm" variant="secondary" onClick={limpiar}>
              Limpiar
            </Button>
            <Button size="sm" onClick={onFirmar} disabled={!hasStroke}>
              Confirmar firma simulada
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

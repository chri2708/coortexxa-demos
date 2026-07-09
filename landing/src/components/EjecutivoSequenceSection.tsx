import { Smartphone } from 'lucide-react'

interface Step {
  image: string
  title: string
  description: string
  valor: string
}

const steps: Step[] = [
  {
    image: '/screenshots/ejecutivo/01-home-ejecutivo.png',
    title: 'Su cartera, en la palma de la mano',
    description:
      'Al abrir la app, el ejecutivo ve sus solicitudes activas, el monto en cartera y el estado de cada una — sin pedir un reporte a nadie.',
    valor: 'El banco gana visibilidad de la gestión de cada ejecutivo, sin reportes manuales.',
  },
  {
    image: '/screenshots/ejecutivo/02-calculadora.png',
    title: 'Comparador de costos en vivo',
    description:
      'Frente al comercio, simula el ahorro real contra el proveedor actual — con números concretos, no una opinión.',
    valor: 'El argumento de venta se demuestra con datos, acelerando el cierre.',
  },
  {
    image: '/screenshots/ejecutivo/02-formulario-vacio.png',
    title: 'Formulario de venta POS',
    description:
      'Los datos del comercio y del producto se capturan desde el celular, en el momento, sin papel ni doble digitación.',
    valor: 'Menos errores de captura y menos retrabajo para el banco.',
  },
  {
    image: '/screenshots/ejecutivo/03-rut-invalido.png',
    title: 'Validación automática del RUT',
    description:
      'El RUT del comercio se valida al instante — si el dígito verificador no cuadra, la app lo marca en rojo antes de continuar.',
    valor: 'Menos errores de datos desde el origen, sin correcciones posteriores.',
  },
  {
    image: '/screenshots/ejecutivo/04-documentos-pendientes.png',
    title: 'Control de documentos obligatorios',
    description:
      'Cada venta lista los respaldos requeridos y marca en amarillo los que aún faltan, para que nada quede sin adjuntar.',
    valor: 'Ninguna venta avanza sin sus documentos de respaldo.',
  },
  {
    image: '/screenshots/ejecutivo/05-documento-cargado.png',
    title: 'Respaldo cargado al instante',
    description:
      'Al adjuntar un documento, el requisito cambia de amarillo a verde de inmediato — el ejecutivo ve al instante qué ya está completo.',
    valor: 'Trazabilidad documental desde el momento de la visita.',
  },
  {
    image: '/screenshots/ejecutivo/06-envio-bloqueado.png',
    title: 'Nada se envía incompleto',
    description:
      'Si faltan datos o documentos, la app bloquea el envío y muestra exactamente qué falta corregir antes de enviar.',
    valor: 'El sistema impide gestiones incompletas y evita el retrabajo del banco.',
  },
  {
    image: '/screenshots/ejecutivo/07-chooser-gmail.png',
    title: 'Envío y respaldo de la venta',
    description:
      'Con la venta completa, el ejecutivo la envía y respalda directamente desde el celular con la información y los adjuntos asociados.',
    valor: 'Envío directo con respaldo por correo, sin pasos manuales adicionales.',
  },
  {
    image: '/screenshots/ejecutivo/05-estados-de-venta.png',
    title: 'Estado de cada venta, siempre visible',
    description:
      'Pendiente, en revisión, aprobada o rechazada — el ejecutivo sabe en todo momento dónde está cada solicitud.',
    valor: 'Reduce las consultas a soporte y la incertidumbre operativa.',
  },
  {
    image: '/screenshots/ejecutivo/06-ranking-y-cierre.png',
    title: 'Ranking y cierre del mes',
    description:
      'Ve su posición, su avance contra la meta y quién lidera el mes, actualizado con cada venta aprobada.',
    valor: 'La competencia interna se vuelve visible y constante, no solo al cierre.',
  },
]

export function EjecutivoSequenceSection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-subtle px-3 py-1 text-xs font-medium text-ink-500">
            <Smartphone className="h-3.5 w-3.5" /> Capturas reales del producto
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Así trabaja un ejecutivo en terreno
          </h2>
          <p className="mt-4 text-ink-500">
            Estas son pantallas reales de COORTEXXA Bank — exactamente lo que ve un ejecutivo en su
            celular, paso a paso.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ image, title, description, valor }, index) => (
            <div key={title} className="flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface-subtle shadow-[var(--shadow-md)]">
                <span className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white shadow-[var(--shadow-sm)]">
                  {index + 1}
                </span>
                <img
                  src={image}
                  alt={title}
                  className="aspect-[390/500] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{description}</p>
              <p className="mt-3 rounded-[var(--radius-sm)] bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
                Valor para el banco: {valor}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-ink-300">
          Capturas del producto real de COORTEXXA Bank — datos de demostración, sin información
          personal ni comercial real.
        </p>
      </div>
    </section>
  )
}

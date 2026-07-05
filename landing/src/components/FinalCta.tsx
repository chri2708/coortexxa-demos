import { Button } from '@coortexxa/ui-kit'

export function FinalCta() {
  return (
    <section id="contacto" className="bg-surface-sidebar py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Construyamos el demo de COORTEXXA para tu operación comercial.
        </h2>
        <p className="mt-4 text-ink-300">
          Escríbenos y armamos una demo con datos de ejemplo ajustada a tu vertical.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="mailto:contacto@coortexxa.com">
            <Button size="lg">Solicitar demo</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

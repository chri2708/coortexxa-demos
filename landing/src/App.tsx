import { Landmark } from 'lucide-react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhatIsSection } from './components/WhatIsSection'
import { TrustStrip } from './components/TrustStrip'
import { ProblemSection } from './components/ProblemSection'
import { JourneySection } from './components/JourneySection'
import { PosBankSection } from './components/PosBankSection'
import { RankingSection } from './components/RankingSection'
import { MonthCloseSection } from './components/MonthCloseSection'
import { ProductsSection } from './components/ProductsSection'
import { VerticalsSection } from './components/VerticalsSection'
import { RoleExperienceSection } from './components/RoleExperienceSection'
import { EjecutivoSequenceSection } from './components/EjecutivoSequenceSection'
import { DemosDisponiblesSection } from './components/DemosDisponiblesSection'
import { DemosSection } from './components/DemosSection'
import { SecuritySection } from './components/SecuritySection'
import { BrandPreviewSection } from './components/BrandPreviewSection'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <WhatIsSection />
        <TrustStrip />
        <ProblemSection />
        <JourneySection />
        <ProductsSection />
        <VerticalsSection />

        {/* Bloque agrupador COORTEXXA Bank — sector principal, flujo completo */}
        <div id="banco" className="scroll-mt-16">
          <section className="bg-surface-sidebar px-4 pt-20 sm:px-6 sm:pt-24 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                <Landmark className="h-3.5 w-3.5" /> Sector Bank · Caso principal
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                COORTEXXA Bank, de la visita al cierre
              </h2>
              <p className="mt-4 text-ink-300">
                El flujo completo del ejecutivo bancario en terreno: simula el ahorro, registra la
                venta, controla los documentos, compite en el ranking y cierra el mes — todo en la
                misma herramienta.
              </p>
            </div>
          </section>
          <PosBankSection />
          <EjecutivoSequenceSection />
          <RoleExperienceSection />
          <RankingSection />
          <MonthCloseSection />
        </div>

        <DemosDisponiblesSection />
        <DemosSection />
        <SecuritySection />
        <BrandPreviewSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App

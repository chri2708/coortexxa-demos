import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { ProblemSection } from './components/ProblemSection'
import { JourneySection } from './components/JourneySection'
import { PosBankSection } from './components/PosBankSection'
import { RankingSection } from './components/RankingSection'
import { MonthCloseSection } from './components/MonthCloseSection'
import { PlatformSection } from './components/PlatformSection'
import { VerticalsSection } from './components/VerticalsSection'
import { CommandCenterPreview } from './components/CommandCenterPreview'
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
        <TrustStrip />
        <ProblemSection />
        <JourneySection />
        <PosBankSection />
        <RankingSection />
        <MonthCloseSection />
        <PlatformSection />
        <VerticalsSection />
        <CommandCenterPreview />
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

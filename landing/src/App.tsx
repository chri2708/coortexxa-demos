import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { PlatformSection } from './components/PlatformSection'
import { VerticalsSection } from './components/VerticalsSection'
import { CommandCenterPreview } from './components/CommandCenterPreview'
import { DemosSection } from './components/DemosSection'
import { SecuritySection } from './components/SecuritySection'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <PlatformSection />
        <VerticalsSection />
        <CommandCenterPreview />
        <DemosSection />
        <SecuritySection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App

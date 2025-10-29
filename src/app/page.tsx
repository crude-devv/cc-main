import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PatternRecognition from '@/components/PatternRecognition'
import Process from '@/components/Process'
import Partnership from '@/components/Partnership'
import AppliedIntelligence from '@/components/AppliedIntelligence'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <PatternRecognition />
      <Process />
      <Partnership />
      <AppliedIntelligence />
      <Contact />
      <Footer />
    </main>
  )
}
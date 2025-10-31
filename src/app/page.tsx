import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhoBenefitsMost from '@/components/WhoBenefitsMost'
import WhatWeActuallyDo from '@/components/WhatWeActuallyDo'
import Partnership from '@/components/Partnership'
import PatternRecognition from '@/components/PatternRecognition'
import Process from '@/components/Process'
import PaymentReviewForm from '@/components/PaymentReviewForm'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <WhoBenefitsMost />
      <WhatWeActuallyDo />
      <Partnership />
      <PatternRecognition />
      <Process />
      <PaymentReviewForm />
      <Footer />
    </main>
  )
}
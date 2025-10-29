'use client'

import { Calculator, TrendingUp } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  return (
    <section className="section-white py-20 lg:py-32 relative overflow-hidden">
      {/* Hero Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-accent-green/10 to-transparent blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Most UK businesses lose{' '}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#047857' }}>
                <AnimatedCounter target={8} prefix="£" suffix="K+ annually" className="font-bold" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-accent-green/10 blur-lg transform scale-110"></div>
            </span>{' '}
            to payment inefficiencies they don't measure.
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            We identify what you're losing. Then we optimize what you're leaving on the table.
          </p>

          <div id="hero-stats" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="pattern-card text-center bg-white/80 backdrop-blur-sm">
              <div className="stat-counter mb-2">
                <AnimatedCounter target={8247} prefix="£" separator className="stat-counter" style={{ color: '#047857' }} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Average annual settlement delay cost</p>
            </div>
            
            <div className="pattern-card text-center bg-white/80 backdrop-blur-sm">
              <div className="stat-counter mb-2">
                <AnimatedCounter target={58} suffix="%" startDelay={200} className="stat-counter" style={{ color: '#047857' }} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Faster transaction processing vs industry</p>
            </div>
            
            <div className="pattern-card text-center bg-white/80 backdrop-blur-sm">
              <div className="stat-counter mb-2">
                <AnimatedCounter target={48} suffix="hrs" startDelay={400} className="stat-counter" style={{ color: '#047857' }} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Weekend capital access advantage</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="cta-button cta-button-primary relative z-10"
              style={{ backgroundColor: '#047857' }}
            >
              <Calculator className="mr-2" size={20} />
              Calculate Your Hidden Costs
            </a>
            
            <a 
              href="#process" 
              className="inline-flex items-center px-8 py-4 bg-white/90 text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-white hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              <TrendingUp className="mr-2" size={20} />
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
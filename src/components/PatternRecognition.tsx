import { Clock, Network, Zap } from 'lucide-react'

export default function PatternRecognition() {
  return (
    <section className="section-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Payment Intelligence For UK Merchants</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="pattern-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                <Clock className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Settlement Timing Advantage</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                While competitors wait 72 hours for weekend takings, operators using next-day settlement access capital{' '}
                <strong className="text-gray-900">3 business days faster</strong>. Compounds weekly.
              </p>
              <p className="text-sm font-medium text-accent-600">
                Most businesses don't measure this cost.
              </p>
            </div>
          </div>

          <div className="pattern-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                <Network className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Integration Efficiency Gap</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Multi-location businesses lose{' '}
                <strong className="text-gray-900">15-20 hours monthly</strong>{' '}
                reconciling disparate payment systems.
              </p>
              <p>
                Market leaders use unified infrastructure.{' '}
                <span className="text-accent-600 font-medium">Amateurs retrofit after scaling.</span>
              </p>
            </div>
          </div>

          <div className="pattern-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                <Zap className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Processing Speed Impact</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                2-second transactions vs 4-second industry average ={' '}
                <strong className="text-gray-900">30% higher throughput</strong> during peak hours.
              </p>
              <p>
                Customer experience difference compounds into{' '}
                <span className="text-accent-600 font-medium">market share over quarters</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-gray-900">
            We spot these costly patterns. Then we fix them for our Merchant Clients.
          </p>
        </div>
      </div>
    </section>
  )
}
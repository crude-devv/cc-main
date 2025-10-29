import { Shield, Clock, Zap, Users } from 'lucide-react'

export default function Partnership() {
  return (
    <section className="section-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Advisory vs Transaction</h2>
          <p className="text-lg text-gray-700 mb-8">
            Most businesses approach payment infrastructure through one of two lenses:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* LEFT COLUMN - TRANSACTIONAL APPROACH */}
            <div className="bg-gray-50 border border-gray-300 rounded-xl p-10">
              <h3 className="text-xl font-bold text-gray-600 mb-6 text-center">TRANSACTIONAL APPROACH</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-4">This includes:</h4>
                <ul className="space-y-3 text-gray-600 mb-6 transactional-list">
                  <li>• Traditional payment brokers (commodity sales)</li>
                  <li>• Generic business consultants (advice without implementation)</li>
                  <li>• Internal procurement (DIY without expertise)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-3">The results:</h4>
                <ul className="space-y-3 text-gray-600 transactional-list">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3 text-lg">❌</span>
                    Price-driven decisions
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3 text-lg">❌</span>
                    Feature comparison without strategy
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3 text-lg">❌</span>
                    Recommendations without implementation
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3 text-lg">❌</span>
                    One-time engagement, no ongoing optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3 text-lg">❌</span>
                    Reactive support when problems occur
                  </li>
                </ul>
              </div>

            </div>

            {/* VS INDICATOR */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <div className="bg-white border-2 border-accent-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <span className="text-accent-600 font-bold text-xl">VS</span>
              </div>
            </div>

            {/* RIGHT COLUMN - INTELLIGENCE-DRIVEN ADVISORY */}
            <div className="bg-accent-50 border-2 border-accent-500 rounded-xl p-10 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-accent-800 mb-6 text-center">INTELLIGENCE-DRIVEN ADVISORY</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent-700 mb-4">Our Approach:</h4>
                <ul className="space-y-3 text-accent-800 mb-6 advisory-list">
                  <li>• Industry-specific efficiency analysis</li>
                  <li>• Ongoing optimization intelligence</li>
                  <li>• Measurable competitive advantage focus</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent-700 mb-3">The methodology:</h4>
                <ul className="space-y-3 text-accent-800 advisory-list">
                  <li className="flex items-center">
                    <span className="text-accent-600 mr-3 text-lg">✓</span>
                    Identify hidden inefficiencies
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-600 mr-3 text-lg">✓</span>
                    Quantify competitive gaps
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-600 mr-3 text-lg">✓</span>
                    Recommend strategic infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-600 mr-3 text-lg">✓</span>
                    Implement optimized systems
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-600 mr-3 text-lg">✓</span>
                    Provide quarterly optimization intelligence
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* BRIDGE SECTION */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              We partner with <strong className="text-accent-600">Dojo</strong> because their infrastructure 
              creates measurable competitive advantages that 
              generic providers cannot deliver.
            </p>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="text-accent-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">99.99%</div>
              <p className="text-sm text-gray-600">uptime since Feb 2022</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="text-accent-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">58%</div>
              <p className="text-sm text-gray-600">faster processing vs industry average</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="text-accent-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">7 days</div>
              <p className="text-sm text-gray-600">weekend settlement (competitors wait until Tuesday)</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="text-accent-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4x</div>
              <p className="text-sm text-gray-600">faster support response times</p>
            </div>
          </div>

          {/* CLOSING SECTION */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <p className="text-lg font-medium text-white leading-relaxed">
              Intelligence with implementation. Strategy without theater.
            </p>
          </div>

          {/* FOOTER */}
          <div className="text-center">
            <div className="text-sm text-accent-600 space-x-4">
              <span className="font-medium">Dojo Certified Partner</span>
              <span>•</span>
              <span className="font-medium">PCI Compliant</span>
              <span>•</span>
              <span className="font-medium">110,000+ UK businesses on network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
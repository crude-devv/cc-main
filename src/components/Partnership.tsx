import { Shield, Clock, Zap, Users } from 'lucide-react'

export default function Partnership() {
  return (
    <section className="bg-gray-900 py-20 border-t-4 border-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">The Crude Capital Advantage</h2>
          <p className="text-lg text-gray-300">
            Two approaches to payment infrastructure:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* LEFT COLUMN - TRANSACTIONAL APPROACH */}
            <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-8">
              <h3 className="text-lg font-bold text-gray-400 mb-6 text-center">TRANSACTIONAL APPROACH</h3>

              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-red-500 mr-3 text-lg">❌</span>
                  Price-driven decisions
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3 text-lg">❌</span>
                  No implementation support
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3 text-lg">❌</span>
                  One-time engagement
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3 text-lg">❌</span>
                  Reactive support
                </li>
              </ul>
            </div>

            {/* VS INDICATOR */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <div className="bg-white border-2 border-accent-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <span className="text-accent-600 font-bold text-xl">VS</span>
              </div>
            </div>

            {/* RIGHT COLUMN - INTELLIGENCE-DRIVEN ADVISORY */}
            <div className="bg-accent-900 border-2 border-accent-600 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-xl">
              <h3 className="text-lg font-bold text-accent-400 mb-6 text-center">OUR APPROACH</h3>

              <ul className="space-y-3 text-accent-100">
                <li className="flex items-center">
                  <span className="text-accent-400 mr-3 text-lg">✓</span>
                  Identify hidden inefficiencies
                </li>
                <li className="flex items-center">
                  <span className="text-accent-400 mr-3 text-lg">✓</span>
                  Quantify competitive gaps
                </li>
                <li className="flex items-center">
                  <span className="text-accent-400 mr-3 text-lg">✓</span>
                  Implement optimized systems
                </li>
                <li className="flex items-center">
                  <span className="text-accent-400 mr-3 text-lg">✓</span>
                  Ongoing optimization intelligence
                </li>
              </ul>
            </div>
          </div>

          {/* BRIDGE SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300">
              Partner with <strong className="text-accent-400">Dojo</strong> for measurable competitive advantages.
            </p>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-accent-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="text-accent-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">99.99%</div>
              <p className="text-xs text-gray-400">uptime</p>
            </div>

            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-accent-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="text-accent-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">58%</div>
              <p className="text-xs text-gray-400">faster processing</p>
            </div>

            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-accent-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="text-accent-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">7 days</div>
              <p className="text-xs text-gray-400">weekend settlement</p>
            </div>

            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-accent-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="text-accent-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">4x</div>
              <p className="text-xs text-gray-400">faster support</p>
            </div>
          </div>

          {/* CLOSING SECTION */}
          <div className="text-center">
            <p className="text-lg font-medium text-white mb-4">
              Intelligence with implementation. Strategy without theater.
            </p>
            <div className="text-sm text-accent-400 space-x-3">
              <span>Dojo Certified Partner</span>
              <span>•</span>
              <span>PCI Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

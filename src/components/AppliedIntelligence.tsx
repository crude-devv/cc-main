'use client'

import { useState } from 'react'
import { CreditCard, TrendingUp, MapPin, ChevronDown } from 'lucide-react'

export default function AppliedIntelligence() {
  const [selectedService, setSelectedService] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('')

  const services = {
    'payment-infrastructure': {
      title: 'Payment Infrastructure Optimization',
      icon: CreditCard,
      description: 'Most businesses lose £5K-£15K annually through settlement delays, integration inefficiency, and processing bottlenecks.',
      options: [
        {
          id: 'settlement-speed',
          title: 'Settlement Speed Optimization',
          solution: 'We audit current infrastructure, quantify leakage, and implement optimized systems through our preferred partnerships.',
          results: ['48-hour faster capital access (weekend settlement)', '15-20 hours monthly saved (unified reconciliation)', '30% higher peak throughput (2-second processing)'],
          investment: '£0 upfront | Volume-based monthly',
          timeline: '48-hour implementation',
          audience: 'Businesses processing £250K+ annually'
        },
        {
          id: 'integration-efficiency',
          title: 'Integration Efficiency',
          solution: 'Streamline disparate payment systems into unified infrastructure for multi-location operations.',
          results: ['75% reduction in reconciliation time', 'Single dashboard for entire operation', 'Zero retrofitting costs'],
          investment: 'Volume-based pricing',
          timeline: '48 hours per location',
          audience: 'Multi-location or expansion-stage businesses'
        }
      ]
    },
    'growth-capital': {
      title: 'Growth Capital Strategy',
      icon: TrendingUp,
      description: 'Operators need capital for seasonal inventory, expansion opportunities, equipment upgrades, marketing campaigns. But banks require personal guarantees and take 6-8 weeks for decisions.',
      options: [
        {
          id: 'revenue-funding',
          title: 'Revenue-Based Funding',
          solution: 'Revenue-based funding through our preferred partnerships. £1K-£1M approved in 48 hours. Repayments flex with takings. No personal guarantee required.',
          results: ['Restaurant seasonal stock purchase', 'Retail expansion inventory', 'Equipment replacement emergency', 'Marketing campaign execution'],
          investment: 'Based on approval amount + repayment terms',
          timeline: '48-hour approval',
          audience: 'Terminal users with transaction history'
        }
      ]
    },
    'multi-location': {
      title: 'Multi-Location Scaling',
      icon: MapPin,
      description: 'Restaurant groups and retail chains scale inefficiently with different payment systems per location, manual reconciliation, and £50K+ retrofitting costs later.',
      options: [
        {
          id: 'unified-infrastructure',
          title: 'Unified Infrastructure',
          solution: 'Unified payment infrastructure before expansion. Centralized reporting, consistent experience, integration once = deploy everywhere.',
          results: ['75% reduction in reconciliation time', 'Consistent 2-second processing all locations', 'Single dashboard for entire operation', 'Zero retrofitting costs'],
          investment: 'Volume-based pricing',
          timeline: '48 hours per location',
          audience: 'Multi-location or expansion-stage businesses'
        }
      ]
    }
  }

  const selectedServiceData = selectedService ? services[selectedService as keyof typeof services] : null
  const selectedOptionData = selectedServiceData && selectedOption 
    ? selectedServiceData.options.find(opt => opt.id === selectedOption) 
    : null

  // Auto-select single options
  if (selectedServiceData && selectedServiceData.options.length === 1 && selectedOption !== selectedServiceData.options[0].id) {
    setSelectedOption(selectedServiceData.options[0].id)
  }

  return (
    <section id="solutions" className="section-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Applied Intelligence</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Service Selection Dropdown */}
          <div className="mb-8">
            <label htmlFor="service-select" className="block text-lg font-semibold text-gray-900 mb-4">
              Select a Service Area:
            </label>
            <select
              id="service-select"
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value)
                setSelectedOption('') // Reset option when service changes
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-lg"
            >
              <option value="">Choose your area of interest...</option>
              <option value="payment-infrastructure">Payment Infrastructure Optimization</option>
              <option value="growth-capital">Growth Capital Strategy</option>
              <option value="multi-location">Multi-Location Scaling</option>
            </select>
          </div>

          {/* Service Description */}
          {selectedServiceData && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                  <selectedServiceData.icon className="text-accent-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{selectedServiceData.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{selectedServiceData.description}</p>

              {/* Option Selection Dropdown */}
              {selectedServiceData.options.length > 1 && (
                <div className="mb-6">
                  <label htmlFor="option-select" className="block text-sm font-semibold text-gray-900 mb-3">
                    Choose specific solution:
                  </label>
                  <select
                    id="option-select"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  >
                    <option value="">Select an option...</option>
                    {selectedServiceData.options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Option Details */}
          {selectedOptionData && (
            <div className="bg-white rounded-lg border-2 border-accent-200 p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{selectedOptionData.title}</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Our Solution:</h5>
                  <p className="text-gray-600">{selectedOptionData.solution}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Client Outcomes:</h5>
                  <ul className="space-y-2">
                    {selectedOptionData.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent-600 mr-2 mt-0.5">•</span>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-accent-800">Investment:</strong>
                      <div className="text-gray-700">{selectedOptionData.investment}</div>
                    </div>
                    <div>
                      <strong className="text-accent-800">Timeline:</strong>
                      <div className="text-gray-700">{selectedOptionData.timeline}</div>
                    </div>
                    <div>
                      <strong className="text-accent-800">Audience:</strong>
                      <div className="text-gray-700">{selectedOptionData.audience}</div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-8 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* No Selection State */}
          {!selectedService && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600 mb-6">
                Select a service area above to explore our strategic solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="text-accent-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Infrastructure</h4>
                  <p className="text-sm text-gray-600">Settlement speed, integration efficiency</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="text-accent-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Growth Capital</h4>
                  <p className="text-sm text-gray-600">Revenue-based funding solutions</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="text-accent-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Multi-Location</h4>
                  <p className="text-sm text-gray-600">Unified infrastructure scaling</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
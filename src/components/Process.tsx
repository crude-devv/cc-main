'use client'

import { Search, Target, Settings, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const toggleStep = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber)
  }

  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Audit & Analysis",
      content: "We analyze your current payment infrastructure:",
      details: [
        "Settlement timing and capital access",
        "Integration complexity and efficiency", 
        "Processing speed and customer experience",
        "Multi-location scaling readiness"
      ],
      deliverable: "Payment efficiency report with £ quantification"
    },
    {
      number: 2,
      icon: Target,
      title: "Strategic Recommendation", 
      content: "Based on your business model and growth trajectory, we recommend infrastructure optimization:",
      details: [
        "Settlement speed improvements",
        "Integration consolidation",
        "Processing capability upgrades", 
        "Funding access strategy"
      ],
      deliverable: "Implementation roadmap with ROI projections"
    },
    {
      number: 3,
      icon: Settings,
      title: "Implementation & Optimization",
      content: "We deploy recommended solutions through our strategic partnerships:",
      details: [
        <>
          <a href="https://dojo.tech/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 font-medium transition-colors">
            Dojo
          </a>
          {" payment terminals (next-day settlement 7 days/week)"}
        </>,
        "Business funding (£1K-£1M, revenue-based repayment)",
        "Booking system integration (unified platform)"
      ],
      deliverable: "Installed infrastructure + staff training"
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Ongoing Intelligence",
      content: "Market changes. Your business scales. We provide continuous optimization guidance:",
      details: [
        "Quarterly efficiency reviews",
        "Market intelligence briefings",
        "Strategic expansion support"
      ],
      deliverable: "Sustained competitive advantage"
    }
  ]

  return (
    <section id="process" className="section-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Intelligence-Driven Optimization</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step) => {
            const IconComponent = step.icon
            const isActive = activeStep === step.number
            
            return (
              <div 
                key={step.number}
                className={`process-card overflow-hidden ${
                  isActive ? 'border-accent-500 shadow-lg' : 'border-gray-200 hover:border-accent-300'
                }`}
                style={{ animationDelay: `${step.number * 150}ms` }}
              >
                <button
                  onClick={() => toggleStep(step.number)}
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-inset"
                >
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-6 transition-colors ${
                      isActive ? 'bg-accent-600 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <span className="font-bold">{step.number}</span>
                    </div>
                    <div className="flex items-center">
                      <IconComponent 
                        className={`mr-3 transition-colors ${
                          isActive ? 'text-accent-600' : 'text-gray-400'
                        }`} 
                        size={20} 
                      />
                      <h3 className={`text-xl font-semibold transition-colors ${
                        isActive ? 'text-accent-900' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 ${
                    isActive ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="text-gray-400" size={20} />
                  </div>
                </button>

                {isActive && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-6">
                      <p className="text-gray-600 mb-4">
                        {step.content}
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2 ml-4 mb-4">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent-600 mr-2 mt-0.5">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-accent-50 rounded-lg p-4">
                        <p className="text-sm font-medium text-accent-800">
                          <span className="font-semibold">Deliverable:</span> {step.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 hover:-translate-y-0.5 transition-all duration-200 cta-button shadow-lg"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
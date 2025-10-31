'use client'

import { Clock, Network, Zap, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function PatternRecognition() {
  const [openCard, setOpenCard] = useState<number | null>(null)

  const insights = [
    {
      icon: Clock,
      title: 'Settlement Timing Advantage',
      preview: 'Weekend takings, Tuesday access',
      content: 'Competitors wait 72 hours for weekend revenue. Next-day settlement gives 3 business days faster capital access. Compounds weekly.'
    },
    {
      icon: Network,
      title: 'Integration Efficiency Gap',
      preview: '15-20 hours lost monthly',
      content: 'Multi-location businesses waste time reconciling disparate systems. Unified infrastructure eliminates this. Market leaders plan ahead—amateurs retrofit.'
    },
    {
      icon: Zap,
      title: 'Processing Speed Impact',
      preview: 'Customer experience matters',
      content: 'Sub-2-second processing keeps lines moving. Slow terminals cost you customers during peak hours. Speed is competitive advantage.'
    }
  ]

  return (
    <section className="bg-white py-20 border-t-4 border-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Payment Intelligence For UK Merchants</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {insights.map((insight, index) => (
            <div
              key={index}
              onClick={() => setOpenCard(openCard === index ? null : index)}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-accent-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center shadow-lg">
                  <insight.icon className="text-white" size={24} />
                </div>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${openCard === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {insight.title}
              </h3>

              <p className="text-sm text-accent-600 font-semibold mb-3">
                {insight.preview}
              </p>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCard === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed pt-2 border-t border-gray-200">
                  {insight.content}
                </p>
              </div>

              {openCard !== index && (
                <p className="text-xs text-gray-500 mt-2">Click to learn more</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

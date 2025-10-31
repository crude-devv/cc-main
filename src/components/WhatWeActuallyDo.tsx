'use client'

import { Search, Target, Wrench } from 'lucide-react'

export default function WhatWeActuallyDo() {
  const services = [
    {
      icon: Search,
      title: 'Payment Infrastructure Analysis',
      description: 'Identify hidden costs, inefficiencies, and missed opportunities in your current setup.'
    },
    {
      icon: Target,
      title: 'Strategic Provider Selection',
      description: 'Choose the right infrastructure based on your needs—not commission deals.'
    },
    {
      icon: Wrench,
      title: 'Implementation & Optimization',
      description: 'Deploy solutions and provide ongoing intelligence to keep you ahead.'
    }
  ]

  return (
    <section id="what-we-do" className="bg-white py-20 border-t-4 border-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Actually Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Payment infrastructure consulting that turns your systems into competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-accent-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-accent-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <service.icon className="text-white" size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

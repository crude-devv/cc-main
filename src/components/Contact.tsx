'use client'

import { useState } from 'react'
import { Mail, Phone, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: '',
    volume: '',
    primaryGoal: '',
    name: '',
    email: '',
    phone: '',
    provider: '',
    additionalInterests: '',
    context: ''
  })

  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitted, setIsSubmitted] = useState(false)


  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required'
    if (!formData.volume) newErrors.volume = 'Please select your volume tier'
    if (!formData.primaryGoal) newErrors.primaryGoal = 'Please select your primary optimization goal'
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitted(true)

      // Submit to Netlify Forms
      const myForm = e.target as HTMLFormElement
      const formData = new FormData(myForm)

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      })
        .then(() => {
          alert('Consultation booked! Check your email for confirmation.')
          // Reset form
          setFormData({
            businessName: '',
            volume: '',
            primaryGoal: '',
            name: '',
            email: '',
            phone: '',
            provider: '',
            additionalInterests: '',
            context: ''
          })
          setIsSubmitted(false)
        })
        .catch(error => {
          alert('Error submitting form. Please try again.')
          setIsSubmitted(false)
          console.error(error)
        })
    }
  }

  return (
    <section id="contact" className="section-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Strategic Consultation</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We work closely with business owners and operators who process £250K+ annually. We are proud to help them turn their payment systems into their competitive advantage.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <form name="contact" method="POST" onSubmit={handleSubmit} className="contact-form">
              <input type="hidden" name="form-name" value="contact" />
              <div className="space-y-6">

                {/* 1. Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* 2. Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* 3. Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200"
                    placeholder="Your phone number (optional)"
                  />
                  <p className="text-gray-500 text-sm mt-1">(optional)</p>
                </div>

                {/* 4. Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.businessName ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200`}
                    placeholder="Your business name"
                  />
                  {errors.businessName && <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>}
                </div>

                {/* 5. Annual Card Processing Volume */}
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Card Processing Volume <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={(e) => setFormData(prev => ({ ...prev, volume: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.volume ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200`}
                  >
                    <option value="">Select your volume tier</option>
                    <option value="150k-300k">£150K-£300K</option>
                    <option value="300k-1m">£300K-£1M</option>
                    <option value="1m-5m">£1M-£5M</option>
                    <option value="5m+">£5M+</option>
                  </select>
                  <p className="text-gray-500 text-sm mt-1">Minimum £150K annual volume</p>
                  {errors.volume && <p className="text-red-600 text-sm mt-1">{errors.volume}</p>}
                </div>

                {/* 6. Primary Optimization Goal */}
                <div>
                  <label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Optimization Goal <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="primaryGoal"
                    name="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData(prev => ({ ...prev, primaryGoal: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.primaryGoal ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200`}
                  >
                    <option value="">Select your primary focus</option>
                    <option value="settlement-speed">Settlement speed (weekend capital access)</option>
                    <option value="multi-location">Multi-location scaling (unified infrastructure)</option>
                    <option value="business-funding">Business funding (growth capital)</option>
                    <option value="integration-efficiency">Integration efficiency (reconciliation time)</option>
                    <option value="processing-speed">Processing speed (customer throughput)</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.primaryGoal && <p className="text-red-600 text-sm mt-1">{errors.primaryGoal}</p>}
                </div>

                {/* 7. Current Payment Provider */}
                <div>
                  <label htmlFor="provider" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Payment Provider
                  </label>
                  <input
                    type="text"
                    id="provider"
                    name="provider"
                    value={formData.provider}
                    onChange={(e) => setFormData(prev => ({ ...prev, provider: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200"
                    placeholder="e.g., Worldpay, Square, SumUp"
                  />
                  <p className="text-gray-500 text-sm mt-1">(optional)</p>
                </div>

                {/* 8. Additional Areas of Interest */}
                <div>
                  <label htmlFor="additionalInterests" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Areas of Interest
                  </label>
                  <input
                    type="text"
                    id="additionalInterests"
                    name="additionalInterests"
                    value={formData.additionalInterests}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalInterests: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200"
                    placeholder="e.g., Integration efficiency, Processing speed"
                  />
                  <p className="text-gray-500 text-sm mt-1">(optional)</p>
                </div>

                {/* 9. Additional Context */}
                <div>
                  <label htmlFor="context" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Context
                  </label>
                  <textarea
                    id="context"
                    name="context"
                    rows={4}
                    value={formData.context}
                    onChange={(e) => setFormData(prev => ({ ...prev, context: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200"
                    placeholder="Describe infrastructure challenges, expansion plans, or specific inefficiencies..."
                  />
                  <p className="text-gray-500 text-sm mt-1">(optional)</p>
                </div>

              </div>

              <div className="text-center mt-12">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-accent-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-accent-800 hover:-translate-y-1 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontSize: '16px' }}
                >
                  {isSubmitted ? 'Booking...' : 'Book Payments System Audit'}
                </button>
              </div>
            </form>

            <div className="text-center mt-8 pt-8 border-t border-gray-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Your 30-Day Intelligence Trial:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-6">
                <div className="flex items-center justify-center">
                  <span className="mr-2">•</span>
                  Payment Efficiency Analysis
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-2">•</span>
                  Infrastructure Optimization Strategy
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-2">•</span>
                  30-Day Implementation Support
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-100 rounded-lg p-6 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Not qualified yet?</h4>
            <p className="text-gray-600 mb-4">
              Join our market intelligence brief for payment infrastructure insights and strategic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-white"
              />
              <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
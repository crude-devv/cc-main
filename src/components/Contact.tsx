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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitted(true)

      const myForm = e.target as HTMLFormElement
      const formData = new FormData(myForm)

      try {
        const response = await fetch('https://formspree.io/f/xblpyjlw', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })

        console.log('Response status:', response.status)
        const responseData = await response.json()
        console.log('Response data:', responseData)

        if (response.ok) {
          alert('Inquiry Received!\n\nWe review all submissions personally. Expect contact within 24 hours.')
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
        } else {
          console.error('Form submission failed:', responseData)
          alert(`Error: ${responseData.error || 'Form submission failed. Please try again.'}`)
          setIsSubmitted(false)
        }
      } catch (error) {
        console.error('Form submission error:', error)
        alert('Error submitting form. Please check console and try again.')
        setIsSubmitted(false)
      }
    }
  }

  return (
    <section id="contact" className="section-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Strategic Consultation</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We work closely with business owners and operators, helping them turn their payment systems into their competitive advantage.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <form name="contact" method="POST" onSubmit={handleSubmit} className="contact-form">
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
                  {isSubmitted ? 'Submitting...' : 'Book Consultation'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 bg-gray-100 rounded-lg p-6 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Stay In The Loop</h4>
            <p className="text-gray-600 mb-4">
              Join our market intelligence brief for payment infrastructure insights and strategic guidance.
            </p>
            <a
              href="https://crudecapital.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-700 text-white px-8 py-3 rounded-lg hover:bg-accent-800 transition-colors font-semibold"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
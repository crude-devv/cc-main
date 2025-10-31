'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'

export default function PaymentReviewForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    // Step 1
    businessName: '',
    volume: '',
    primaryGoal: '',

    // Step 2
    name: '',
    email: '',
    phone: '',
    provider: '',
    interests: [] as string[],
    context: ''
  })

  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateStep1 = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required'
    if (!formData.volume) newErrors.volume = 'Please select your volume range'
    if (!formData.primaryGoal) newErrors.primaryGoal = 'Please select your primary goal'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleBack = () => {
    setStep(1)
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateStep2()) {
      setIsSubmitted(true)

      try {
        const submissionData = new FormData()
        submissionData.append('access_key', '9b04c636-7380-446b-9269-f2a283b02a81')
        submissionData.append('subject', 'New Payment Infrastructure Review Request')
        submissionData.append('from_name', 'Crude Capital - Website Form')

        // Add all form fields
        submissionData.append('businessName', formData.businessName)
        submissionData.append('volume', formData.volume)
        submissionData.append('primaryGoal', formData.primaryGoal)
        submissionData.append('name', formData.name)
        submissionData.append('email', formData.email)
        submissionData.append('phone', formData.phone || 'Not provided')
        submissionData.append('provider', formData.provider || 'Not provided')
        submissionData.append('interests', formData.interests.join(', ') || 'None selected')
        submissionData.append('context', formData.context || 'None provided')

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: submissionData
        })

        if (response.ok) {
          // Success - show success state
          setStep(3)
        } else {
          alert('Error submitting form. Please try again.')
          setIsSubmitted(false)
        }
      } catch (error) {
        console.error('Form submission error:', error)
        alert('Error submitting form. Please try again.')
        setIsSubmitted(false)
      }
    }
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  // Success State
  if (step === 3) {
    return (
      <section id="contact" className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-12 shadow-lg border border-green-200 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Review Request Received!
              </h3>

              <p className="text-lg text-gray-600 mb-6">
                We'll personally review your submission and reach out within 24 hours with next steps.
              </p>

              <p className="text-gray-600">
                In the meantime, check out our <a href="/tools" className="text-accent-600 font-semibold hover:underline">payment calculators</a> to see exactly where you might be losing money.
              </p>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setStep(1)
                    setFormData({
                      businessName: '',
                      volume: '',
                      primaryGoal: '',
                      name: '',
                      email: '',
                      phone: '',
                      provider: '',
                      interests: [],
                      context: ''
                    })
                    setIsSubmitted(false)
                  }}
                  className="text-accent-600 font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Free Payment Infrastructure Review</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Get a clear picture of what you're actually paying and where you can save
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center ${step >= 1 ? 'text-accent-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${step >= 1 ? 'bg-accent-600 text-white border-accent-600' : 'bg-white border-gray-300'}`}>
                  1
                </div>
                <span className="ml-2 font-medium hidden sm:inline">Business Info</span>
              </div>

              <div className="w-16 h-0.5 bg-gray-300"></div>

              <div className={`flex items-center ${step >= 2 ? 'text-accent-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${step >= 2 ? 'bg-accent-600 text-white border-accent-600' : 'bg-white border-gray-300'}`}>
                  2
                </div>
                <span className="ml-2 font-medium hidden sm:inline">Contact Details</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.businessName ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base`}
                    placeholder="Your business name"
                  />
                  {errors.businessName && <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>}
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual Card Volume <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="volume"
                    value={formData.volume}
                    onChange={(e) => setFormData(prev => ({ ...prev, volume: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.volume ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base`}
                  >
                    <option value="">Select your volume (rough estimate is fine)</option>
                    <option value="150k-300k">£150K - £300K</option>
                    <option value="300k-1m">£300K - £1M</option>
                    <option value="1m-5m">£1M - £5M</option>
                    <option value="5m+">£5M+</option>
                  </select>
                  {errors.volume && <p className="text-red-600 text-sm mt-1">{errors.volume}</p>}
                </div>

                <div>
                  <label htmlFor="primaryGoal" className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Goal <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData(prev => ({ ...prev, primaryGoal: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.primaryGoal ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base`}
                  >
                    <option value="">What's your main priority?</option>
                    <option value="reduce-costs">Reduce processing costs</option>
                    <option value="improve-cashflow">Improve cash flow</option>
                    <option value="better-tech">Better payment technology</option>
                    <option value="switch-providers">Switch providers</option>
                    <option value="get-funding">Get funding options</option>
                  </select>
                  {errors.primaryGoal && <p className="text-red-600 text-sm mt-1">{errors.primaryGoal}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="w-full bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-800 transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    Continue
                    <ChevronRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-gray-500 text-xs">(optional - for faster response)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="provider" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Payment Provider
                  </label>
                  <input
                    type="text"
                    id="provider"
                    value={formData.provider}
                    onChange={(e) => setFormData(prev => ({ ...prev, provider: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base"
                    placeholder="e.g., Worldpay, Square, SumUp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Area of Interest <span className="text-gray-500 text-xs">(optional - select all that apply)</span>
                  </label>
                  <div className="space-y-2">
                    {['Cost analysis', 'Provider switching', 'Technology upgrade', 'Business funding'].map(interest => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => toggleInterest(interest)}
                          className="w-4 h-4 text-accent-600 border-gray-300 rounded focus:ring-accent-500"
                        />
                        <span className="ml-2 text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="context" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Context <span className="text-gray-500 text-xs">(optional)</span>
                  </label>
                  <textarea
                    id="context"
                    rows={4}
                    value={formData.context}
                    onChange={(e) => setFormData(prev => ({ ...prev, context: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 text-base"
                    placeholder="Tell us about any specific challenges or goals..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
                  >
                    <ChevronLeft className="mr-2" size={20} />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="flex-1 bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-800 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitted ? 'Submitting...' : 'Request Review'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Newsletter CTA */}
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

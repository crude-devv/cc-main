'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold brand-name">Crude Capital</h1>
              <p className="text-sm text-gold-600 font-mono">Payment Intelligence. Applied.</p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#process" className="nav-link text-sm font-medium">
                PROCESS
              </a>
              <a href="#solutions" className="nav-link text-sm font-medium">
                SOLUTIONS
              </a>
              <a href="#intelligence" className="nav-link text-sm font-medium">
                INTELLIGENCE
              </a>
              <a href="#contact" className="nav-link text-sm font-medium">
                CONTACT
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#calculator" className="nav-link text-sm font-medium">
              PAYMENT CALCULATORS
            </a>
            <a href="#contact" className="bg-accent-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-accent-700 hover:-translate-y-0.5 transition-all duration-200 cta-button shadow-md">
              Book Consultation
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#process" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium">
                PROCESS
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium">
                SOLUTIONS
              </a>
              <a href="#intelligence" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium">
                INTELLIGENCE
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium">
                CONTACT
              </a>
              <div className="pt-4 pb-2 border-t border-gray-200 space-y-3">
                <a href="#contact" className="bg-accent-600 text-white block px-4 py-3 rounded-lg text-sm font-semibold text-center cta-button">
                  Book Consultation
                </a>
                <a href="#calculator" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium text-center">
                  PAYMENT CALCULATORS
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
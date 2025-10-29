import { Mail, Phone, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-2 text-accent-400">Crude Capital</h3>
            <p className="text-gold-400 font-mono text-sm mb-6">Payment Intelligence. Applied.</p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">SOLUTIONS</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Payment Infrastructure
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Growth Capital
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Multi-Location Scaling
                </a>
              </li>
            </ul>
          </div>

          {/* Intelligence */}
          <div>
            <h4 className="font-semibold text-white mb-4">PAYMENT INTELLIGENCE</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="https://crudecapital.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Signal or Noise Newsletter
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Payment Efficiency Calculator
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-white transition-colors">
                  Market Analysis Archive
                </a>
              </li>
            </ul>
          </div>

          {/* Partnership & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">PARTNERSHIP</h4>
            <ul className="space-y-2 text-gray-400 text-sm mb-6">
              <li>Dojo Certified Partner</li>
              <li>PCI Compliant</li>
              <li>110,000+ UK businesses on network</li>
            </ul>

            <h4 className="font-semibold text-white mb-4">CONTACT</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@crude-capital.com" 
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                info@crude-capital.com
              </a>
              <a 
                href="tel:+447894561230" 
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} className="mr-2" />
                +44 7894 561 230
              </a>
              <a 
                href="https://linkedin.com/company/crude-capital" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Crude Capital. Payment intelligence for competitive advantage.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
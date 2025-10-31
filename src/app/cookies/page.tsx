import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy | Crude Capital',
  description: 'Cookie Policy for Crude Capital - How we use cookies and tracking technologies.',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-accent-600 hover:text-accent-700 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: October 31, 2024</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              Crude Capital uses cookies and similar tracking technologies to improve your experience on our website, analyze site performance, and understand how visitors interact with our content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Session management</li>
              <li>Security features</li>
              <li>Form submission handling</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
            <p className="text-gray-700 mb-4">
              We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Vercel Analytics:</strong> Tracks page views and user navigation patterns</li>
              <li><strong>Vercel Speed Insights:</strong> Monitors website performance and Core Web Vitals</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Language preferences</li>
              <li>Region selection</li>
              <li>Calculator input persistence</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
            <p className="text-gray-700 mb-4">
              We may use marketing cookies to track visitors across websites and display relevant advertisements. These cookies are used to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Deliver more relevant advertisements</li>
              <li>Limit the number of times you see an advertisement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              In addition to our own cookies, we use various third-party services that may set cookies on your device:
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Vercel Analytics & Speed Insights</h3>
              <p className="text-gray-700 mb-2">
                Purpose: Website analytics and performance monitoring
              </p>
              <p className="text-gray-700">
                Privacy Policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">https://vercel.com/legal/privacy-policy</a>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Web3Forms</h3>
              <p className="text-gray-700 mb-2">
                Purpose: Form submission and processing
              </p>
              <p className="text-gray-700">
                Privacy Policy: <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">https://web3forms.com/privacy</a>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Calendly</h3>
              <p className="text-gray-700 mb-2">
                Purpose: Appointment scheduling
              </p>
              <p className="text-gray-700">
                Privacy Policy: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">https://calendly.com/privacy</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie Duration</h2>
            <p className="text-gray-700 mb-4">Cookies may be temporary (session cookies) or persistent:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Note</h3>
            <p className="text-gray-700 mb-4">
              Blocking or deleting cookies may impact your ability to use certain features of our website. Some functionality may not work properly without cookies enabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track Signals</h2>
            <p className="text-gray-700 mb-4">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activities tracked. We currently do not respond to DNT signals, as there is no industry standard for how to respond to such signals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this page periodically for the latest information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Consent</h2>
            <p className="text-gray-700 mb-4">
              By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. More Information</h2>
            <p className="text-gray-700 mb-4">
              For more information about how we handle your personal data, please see our <Link href="/privacy-policy" className="text-accent-600 hover:text-accent-700">Privacy Policy</Link>.
            </p>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:info@crude-capital.com" className="text-accent-600 hover:text-accent-700">info@crude-capital.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

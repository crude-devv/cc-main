import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Crude Capital',
  description: 'Terms of Service for Crude Capital - Terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-accent-600 hover:text-accent-700 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: October 31, 2024</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Crude Capital website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 mb-4">
              Crude Capital provides payment infrastructure consulting and advisory services for UK merchants. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Payment infrastructure analysis and optimization</li>
              <li>Payment provider selection and comparison</li>
              <li>Implementation support and guidance</li>
              <li>Educational resources and calculators</li>
              <li>Strategic consultation for payment processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Services</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Eligibility</h3>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old and have the authority to enter into these Terms on behalf of your business to use our services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Acceptable Use</h3>
            <p className="text-gray-700 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide false or misleading information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access our services without permission</li>
              <li>Interfere with or disrupt our services</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consultations and Recommendations</h2>
            <p className="text-gray-700 mb-4">
              Our consultation services and recommendations are provided for informational purposes. While we strive to provide accurate and helpful guidance:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>We do not guarantee specific outcomes or results</li>
              <li>You are responsible for your own business decisions</li>
              <li>We recommend conducting your own due diligence</li>
              <li>Our recommendations are based on information you provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Calculators and Tools</h2>
            <p className="text-gray-700 mb-4">
              The calculators and tools provided on our website are for estimation purposes only. Results are based on the information you input and general industry assumptions. Actual costs, savings, and outcomes may vary significantly based on your specific circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may recommend or facilitate introductions to third-party payment providers and services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>The services, terms, or conduct of third-party providers</li>
              <li>Any agreements you enter into with third parties</li>
              <li>The accuracy of third-party information or pricing</li>
              <li>Disputes between you and third-party providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on the Crude Capital website, including text, graphics, logos, and software, is the property of Crude Capital or its licensors and is protected by UK and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              We treat business information you share with us as confidential. However, you should not share sensitive financial data, passwords, or account access credentials through our forms or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law, Crude Capital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Your use or inability to use our services</li>
              <li>Any conduct or content of any third party</li>
              <li>Unauthorized access to or use of our servers</li>
              <li>Any business decisions made based on our recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers</h2>
            <p className="text-gray-700 mb-4">
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Crude Capital and its affiliates from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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

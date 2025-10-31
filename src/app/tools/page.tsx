import Link from 'next/link';
import { Search, Clock, Settings, TrendingUp, LineChart, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Payment Calculators For Merchants | Crude Capital',
  description: 'Quantify hidden costs, measure inefficiencies, and calculate optimization potential across your payment infrastructure.',
};

const calculators = [
  {
    id: 'hidden-costs',
    title: 'True Cost of Ownership',
    description: 'Calculate hidden costs your current provider doesn\'t show you. Delayed capital, compliance overhead, integration inefficiencies.',
    cta: 'Analyze My Infrastructure',
    icon: Search,
  },
  {
    id: 'inaction-cost',
    title: 'Cost of Delayed Action',
    description: 'Quantify how payment inefficiencies compound over time. Every month of inaction costs measurable competitive advantage.',
    cta: 'Calculate Inaction Cost',
    icon: Clock,
  },
  {
    id: 'operational-efficiency',
    title: 'Operational Efficiency Gap',
    description: 'Multi-location businesses lose 15-20 hours monthly reconciling disparate systems. Measure your operational drag.',
    cta: 'Measure Efficiency Loss',
    icon: Settings,
  },
  {
    id: 'revenue-liberation',
    title: 'Revenue Liberation Analysis',
    description: 'Faster settlement timing = improved working capital. Calculate how next-day funding unlocks revenue trapped in payment cycles.',
    cta: 'Calculate Capital Impact',
    icon: TrendingUp,
  },
  {
    id: 'growth-funding',
    title: 'Growth Capital Optimization',
    description: 'Strategic payment infrastructure can fund growth without external capital. Quantify your internal funding capacity.',
    cta: 'Analyze Funding Potential',
    icon: LineChart,
  },
  {
    id: 'team-incentive',
    title: 'Team Performance Impact',
    description: 'Transaction speed affects customer experience. Calculate how payment efficiency translates to team productivity gains.',
    cta: 'Calculate Team Impact',
    icon: Users,
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Payment Intelligence Calculators
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Quantify what you're leaving on the table. Then optimize strategic infrastructure to capture it.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {calculators.map((calculator, index) => {
            const IconComponent = calculator.icon;
            return (
              <Link
                key={calculator.id}
                href={`/tools/${calculator.id}`}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-teal-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with background */}
                <div className="mb-6 w-16 h-16 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-teal-600 group-hover:text-teal-700" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                  {calculator.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[96px] text-[15px]">
                  {calculator.description}
                </p>

                {/* CTA Button */}
                <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700 transition-colors text-sm">
                  <span>{calculator.cta}</span>
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need Strategic Payment Infrastructure Analysis?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our calculators quantify specific inefficiencies. For comprehensive infrastructure optimization, book a consultation.
          </p>
          <Link
            href="https://calendly.com/crude-capital-consulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Book Consultation
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

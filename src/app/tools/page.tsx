import Link from 'next/link';

export const metadata = {
  title: 'Payment Intelligence Calculators | Crude Capital',
  description: 'Quantify hidden costs, measure inefficiencies, and calculate optimization potential across your payment infrastructure.',
};

const calculators = [
  {
    id: 'hidden-costs',
    title: 'True Cost of Ownership',
    description: 'Calculate hidden costs your current provider doesn\'t show you. Delayed capital, compliance overhead, integration inefficiencies.',
    cta: 'Analyze My Infrastructure',
    icon: '💰',
  },
  {
    id: 'inaction-cost',
    title: 'Cost of Delayed Action',
    description: 'Quantify how payment inefficiencies compound over time. Every month of inaction costs measurable competitive advantage.',
    cta: 'Calculate Inaction Cost',
    icon: '⏳',
  },
  {
    id: 'operational-efficiency',
    title: 'Operational Efficiency Gap',
    description: 'Multi-location businesses lose 15-20 hours monthly reconciling disparate systems. Measure your operational drag.',
    cta: 'Measure Efficiency Loss',
    icon: '⚙️',
  },
  {
    id: 'revenue-liberation',
    title: 'Revenue Liberation Analysis',
    description: 'Faster settlement timing = improved working capital. Calculate how next-day funding unlocks revenue trapped in payment cycles.',
    cta: 'Calculate Capital Impact',
    icon: '🚀',
  },
  {
    id: 'growth-funding',
    title: 'Growth Capital Optimization',
    description: 'Strategic payment infrastructure can fund growth without external capital. Quantify your internal funding capacity.',
    cta: 'Analyze Funding Potential',
    icon: '📈',
  },
  {
    id: 'team-incentive',
    title: 'Team Performance Impact',
    description: 'Transaction speed affects customer experience. Calculate how payment efficiency translates to team productivity gains.',
    cta: 'Calculate Team Impact',
    icon: '👥',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Payment Intelligence Calculators
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              Quantify what you're leaving on the table. Then optimize strategic infrastructure to capture it.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/tools/${calculator.id}`}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/80 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {calculator.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {calculator.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed min-h-[96px]">
                {calculator.description}
              </p>

              {/* CTA Button */}
              <div className="flex items-center text-teal-400 font-semibold group-hover:text-teal-300 transition-colors">
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

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 to-purple-500/0 group-hover:from-teal-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <div className="bg-gradient-to-r from-teal-500/10 to-purple-500/10 border border-teal-500/30 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Strategic Payment Infrastructure Analysis?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Our calculators quantify specific inefficiencies. For comprehensive infrastructure optimization, book a consultation.
          </p>
          <Link
            href="https://calendly.com/crude-capital-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50"
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
  );
}

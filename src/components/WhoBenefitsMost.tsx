import { ShoppingCart, Store, Scissors, Building2 } from 'lucide-react'

export default function WhoBenefitsMost() {
  const businessTypes = [
    {
      icon: ShoppingCart,
      category: 'High-Volume Retailers',
      painPoint: 'Cash tied up for days while fees quietly erode your margins',
      color: 'from-blue-50 to-blue-100 border-blue-200'
    },
    {
      icon: Building2,
      category: 'Multi-Location Hospitality',
      painPoint: 'Different terminals, different rates, different problems at every location',
      color: 'from-green-50 to-green-100 border-green-200'
    },
    {
      icon: Scissors,
      category: 'Service Businesses',
      subtext: 'Salons, Barbers, Beauty',
      painPoint: 'Premium rates locked in with contracts you signed years ago',
      color: 'from-purple-50 to-purple-100 border-purple-200'
    },
    {
      icon: Store,
      category: 'Independent Groceries',
      painPoint: 'Old equipment, inflexible terms, and rates that haven\'t improved in years',
      color: 'from-amber-50 to-amber-100 border-amber-200'
    }
  ]

  return (
    <section className="bg-gray-50 py-20 border-t-4 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who Benefits Most</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            UK Merchants who accept & process card payments In-Store
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${business.color} border-2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <business.icon className="text-gray-800" size={26} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {business.category}
              </h3>

              {business.subtext && (
                <p className="text-xs text-gray-600 mb-3 italic">{business.subtext}</p>
              )}

              <p className="text-gray-800 font-medium text-sm leading-snug">
                {business.painPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Check } from "lucide-react";

export function PricingCard({ title, price, features, featured = false }) {
    return (
      <div className={`p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white ring-4 ring-cyan-300 dark:ring-cyan-500/30 relative z-10 transform-gpu hover:shadow-xl hover:shadow-cyan-500/20'
          : 'bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-500/5'
      }`}>
        {featured && (
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
              Most Popular
            </div>
          </div>
        )}
        <h3 className={`text-xl font-semibold mb-4 ${
          featured ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}>{title}</h3>
        <div className="mb-6">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-sm ml-1">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                featured ? 'bg-white/20' : 'bg-cyan-100 dark:bg-cyan-900/30'
              }`}>
                <Check className={`h-4 w-4 ${featured ? 'text-white' : 'text-cyan-500'}`} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-3.5 rounded-xl transition-all duration-300 ${
            featured
              ? 'bg-white text-cyan-600 hover:bg-gray-100 hover:shadow-lg'
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'
          }`}
        >
          Get Started
        </button>
      </div>
    );
  }
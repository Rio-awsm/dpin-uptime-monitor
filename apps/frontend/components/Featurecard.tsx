export function FeatureCard({ icon, title, description }) {
    return (
      <div className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 group">
        <div className="mb-5 p-3 bg-cyan-50 dark:bg-cyan-900/30 inline-block rounded-lg transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    );
  }
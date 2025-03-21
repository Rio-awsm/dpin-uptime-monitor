export function StatCard({ value, label }) {
    return (
      <div className="text-center p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1">
        <div className="text-4xl font-bold text-cyan-500 mb-2">{value}</div>
        <div className="text-gray-600 dark:text-gray-400">{label}</div>
      </div>
    );
  }
export function TestimonialCard({ quote, author, role, avatarLetter }) {
    return (
      <div className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
        <div className="flex items-center space-x-1 mb-4 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-medium mr-3">
            {avatarLetter}
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{author}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
          </div>
        </div>
      </div>
    );
  }
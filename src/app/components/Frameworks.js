// components/Frameworks.js
export default function Frameworks() {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.03]">
      <h3 className="text-xl font-semibold text-white mb-5 border-b border-gray-600 pb-2 w-full">
        Frameworks &amp; Libraries
      </h3>
      <div className="flex flex-col items-center gap-3 w-full">

        {/* React */}
        <div className="flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-colors justify-center">
          <svg className="w-5 h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" fill="currentColor"><path d="...React Path..."/></svg>
          <span className="text-sm text-gray-200 font-medium">React.js</span>
        </div>

            <div className="flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-colors justify-center">
          <svg className="w-5 h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" fill="currentColor"><path d="...React Path..."/></svg>
          <span className="text-sm text-gray-200 font-medium">Next.js</span>
        </div>

        <div className="flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-colors justify-center">
          <svg className="w-5 h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" fill="currentColor"><path d="...React Path..."/></svg>
          <span className="text-sm text-gray-200 font-medium">Node.js</span>
        </div>
        
        <div className="flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-colors justify-center">
          <svg className="w-5 h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" fill="currentColor"><path d="...React Path..."/></svg>
          <span className="text-sm text-gray-200 font-medium">Springboot</span>
        </div>

        <div className="flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-colors justify-center">
          <svg className="w-5 h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" fill="currentColor"><path d="...React Path..."/></svg>
          <span className="text-sm text-gray-200 font-medium">Thymeleaf</span>
        </div>

                <div className="flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-colors justify-center">
          <svg className="w-5 h-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" fill="currentColor"><path d="...React Path..."/></svg>
          <span className="text-sm text-gray-200 font-medium">Express</span>
        </div>
      </div>
    </div>
  );
}

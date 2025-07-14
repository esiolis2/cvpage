'use client'

export default function Education() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">
          {/* First degree card */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open w-8 h-8 text-purple-400 mt-1"
                aria-hidden="true"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Information Technology</h3>
                <p className="text-purple-400 font-semibold mb-2">RMIT University, Melbourne • 2023 - 2025</p>
                <p className="text-gray-300">
                  Concentrations in Cloud Computing, Software Engineering and Web Development.
                </p>
              </div>
            </div>
          </div>

          {/* Second degree card */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open w-8 h-8 text-purple-400 mt-1"
                aria-hidden="true"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Data Science</h3>
                <p className="text-purple-400 font-semibold mb-2">RMIT University, Melbourne • 2022 • (discontinued)</p>
              </div>
            </div>
          </div>

          {/* Third degree card */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open w-8 h-8 text-purple-400 mt-1"
                aria-hidden="true"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Science</h3>
                <p className="text-purple-400 font-semibold mb-2">Deakin University, Melbourne • 2021 • (discontinued)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

export default function About() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Paragraphs */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
            I'm a full stack developer with a strong emphasis on frontend development and a passion for crafting intuitive 
            user friendly interfaces. I love building clean responsive applications that solve real problems and make life
             easier. With experience across the stack from React and Tailwind on the frontend to Express and Spring Boot
            on the backend, I aim to create seamless digital experiences powered by modern efficient systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
             My experience includes collaborating with a PhD student to automate and present complex data workflows,
             working in teams to build full-stack web applications, and independently developing personal projects that
             solve real world problems in my daily life. Across these experiences, I've thrived using Agile methodologies 
             and developed a strong foundation in both frontend and backend development.
            </p>
          </div>

          {/* Right - Quick Facts Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Melbourne, Australia</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
                <span>Information Technology Graduate (July 2025)</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m16 18 6-6-6-6" />
                  <path d="m8 6-6 6 6 6" />
                </svg>
                <span>Specialist in Javascript, Java Spring Boot, React and Python</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
                <span>Cloud & Full Stack enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

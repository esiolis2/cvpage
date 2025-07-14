'use client'

import { useState } from "react";
import { FileDown, X } from "lucide-react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10">
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-8xl font-bold text-white">ETHAN SIOLIS</h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
          Full-Stack Developer
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          {/* Email */}
          <a
            href="mailto:ethansiolis1234@gmail.com"
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/esiolis2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ethan-siolis-a24316355/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* CV Download Icon */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <FileDown className="w-6 h-6" />
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl p-6 shadow-xl w-80 text-center relative">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                View or Download Ethan's CV?
              </h3>

              <div className="flex justify-center space-x-4">
                <a
                  href="/Ethan-Siolis-CV.pdf"
                  target="_blank"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition"
                >
                  View
                </a>
                <a
                  href="/Ethan-Siolis-CV.pdf"
                  download
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="flex justify-center space-x-4">
          <a href="/projects">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
          </a>
        </div>
      </div>

      {/* Chevron Down */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-chevron-down absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-purple-400 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </section>
  );
}

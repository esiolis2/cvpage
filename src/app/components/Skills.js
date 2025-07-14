import LanguageItem from "./LanguageItem";
import Frameworks from './Frameworks'; 
import Others from "./OtherSkills";



export default function Skills() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.03]">
            <h3 className="text-xl font-semibold text-white mb-5 border-b border-gray-600 pb-2 w-full">
              Programming Languages
            </h3>

            <div className="flex flex-col items-center gap-3 w-full">
              <LanguageItem
                name="JavaScript"
                colorClass="text-yellow-400"
                iconPath={`<path d="M14.25.18l.9.2..."/>`} // your full icon path here
              />
              <LanguageItem
                name="Java"
                colorClass="text-orange-500"
                iconPath={`<path d="M277.74 312.9c9.8-6.7..."/>`}
              />
              <LanguageItem
                name="Python"
                colorClass="text-blue-500"
                iconPath={`<path d="M22.394 6c-.167..."/>`}
              />
              <LanguageItem
                name="TypeScript"
                colorClass="text-blue-500"
                iconPath={`<path d="M22.394 6c-.167..."/>`}
              />
             <LanguageItem
                name="PHP"
                colorClass="text-blue-500"
                iconPath={`<path d="M22.394 6c-.167..."/>`}
              />
                 <LanguageItem
                name="HTML"
                colorClass="text-blue-500"
                iconPath={`<path d="M22.394 6c-.167..."/>`}
              />
                 <LanguageItem
                name="CSS"
                colorClass="text-blue-500"
                iconPath={`<path d="M22.394 6c-.167..."/>`}
              />
                 <LanguageItem
                name="SQL"
                colorClass="text-blue-500"
                iconPath={`<path d="M22.394 6c-.167..."/>`}
              />
            </div>
          </div>

            <Frameworks />
            <Others />
        </div>

               
      </div>
 
    </section>
  );
}

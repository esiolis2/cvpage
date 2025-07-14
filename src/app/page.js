import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Education />
      <Skills />
    </main>
  )
}

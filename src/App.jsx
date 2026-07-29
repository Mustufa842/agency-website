// App.jsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    // Smooth scroll with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href')
        if (href === '#') return
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const headerOffset = 80
          const elementPosition = target.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper via-white to-paper/50">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
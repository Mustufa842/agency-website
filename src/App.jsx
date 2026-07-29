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
import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) {
      el.style.display = 'none'
      return
    }

    let rafId
    const onMove = (e) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        el.style.left = e.clientX + 'px'
        el.style.top = e.clientY + 'px'
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={ref} className="cursor-glow hidden md:block" />
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  )
}

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
    <div className="min-h-screen bg-gradient-to-b from-paper via-white to-paper/50 relative">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Cursor glow follower */}
      <CursorGlow />

      {/* Subtle noise overlay for depth */}
      <div className="noise-overlay" aria-hidden="true" />

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
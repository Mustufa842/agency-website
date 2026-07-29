// components/Nav.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      
      // Update active section
      const sections = LINKS.map(l => l.href.substring(1))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-ink/5 shadow-[0_8px_32px_rgba(0,0,0,0.06)]' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="font-display font-bold text-xl tracking-tight focus-ring rounded relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative">
            Tech Web Studio
            <span className="text-teal">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal to-coral transition-all duration-300 group-hover:w-full" />
          </span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a 
                href={l.href} 
                className={`relative py-1 transition-colors duration-300 focus-ring rounded ${
                  activeSection === l.href.substring(1) 
                    ? 'text-ink' 
                    : 'text-ink/60 hover:text-ink'
                }`}
              >
                {l.label}
                {activeSection === l.href.substring(1) && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal to-coral rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-teal to-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-teal/20 hover:shadow-teal/30 transition-all duration-300 focus-ring"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get Free Audit</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>

        <button
          className="md:hidden p-2 focus-ring rounded relative w-8 h-8"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-5 h-5 flex flex-col justify-between items-center relative">
            <motion.span 
              className="h-0.5 bg-ink rounded-full w-5 absolute top-0"
              animate={{ 
                rotate: open ? 45 : 0,
                y: open ? 8 : 0
              }}
              transition={{ duration: 0.25 }}
            />
            <motion.span 
              className="h-0.5 bg-ink rounded-full w-5 absolute top-2"
              animate={{ 
                opacity: open ? 0 : 1,
                x: open ? -10 : 0
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="h-0.5 bg-ink rounded-full w-5 absolute top-4"
              animate={{ 
                rotate: open ? -45 : 0,
                y: open ? -8 : 0
              }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-ink/5 px-6 pb-6 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col gap-1 pt-2">
              {LINKS.map((l, i) => (
                <motion.li 
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 px-3 rounded-lg font-medium transition-colors duration-200 focus-ring ${
                      activeSection === l.href.substring(1)
                        ? 'bg-teal/10 text-teal-dark'
                        : 'text-ink/80 hover:bg-ink/5'
                    }`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li 
                className="pt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: LINKS.length * 0.05 }}
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-teal/20 w-full justify-center"
                >
                  Get Free Audit
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
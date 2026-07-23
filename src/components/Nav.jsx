import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg tracking-tight focus-ring rounded">
          Tech Web Studio<span className="text-teal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors focus-ring rounded">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-paper text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-dark transition-colors focus-ring"
        >
          Get Free Audit
        </a>

        <button
          className="md:hidden p-2 focus-ring rounded"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`h-0.5 bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-b border-ink/10 px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-ink/80 font-medium focus-ring rounded"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-semibold px-4 py-2.5 rounded-full focus-ring"
              >
                Get Free Audit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

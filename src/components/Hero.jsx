// components/Hero.jsx
import { useState, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from 'framer-motion'

const VERTICALS = [
  {
    key: 'restaurants',
    label: 'Restaurants',
    pitch:
      'Mobile-friendly restaurant websites with menus, online ordering, reservations, maps and clear calls to action.',
    stat: '24/7',
    statLabel: 'online presence'
  },
  {
    key: 'dentists',
    label: 'Dentists',
    pitch:
      'Professional dental websites with treatment information, appointment requests, FAQs and patient-friendly navigation.',
    stat: 'Easy',
    statLabel: 'appointment requests'
  },
  {
    key: 'gyms',
    label: 'Gyms',
    pitch:
      'Modern gym websites for memberships, classes, personal training, trial offers and lead generation.',
    stat: 'Mobile',
    statLabel: 'friendly experience'
  },
  {
    key: 'salons',
    label: 'Salons',
    pitch:
      'Beautiful salon websites with services, pricing, booking information, FAQs and customer enquiries.',
    stat: 'Online',
    statLabel: 'booking information'
  },
  {
    key: 'clinics',
    label: 'Clinics',
    pitch:
      'Professional clinic websites with services, appointment requests, patient information and contact options.',
    stat: 'Clear',
    statLabel: 'patient information'
  },
  {
    key: 'law',
    label: 'Law Firms',
    pitch:
      'Professional law firm websites that explain legal services and make consultation enquiries easier.',
    stat: 'Simple',
    statLabel: 'consultation path'
  },
  {
    key: 'realestate',
    label: 'Real Estate',
    pitch:
      'Real estate websites designed to showcase properties and make buyer and seller enquiries easier.',
    stat: 'Lead',
    statLabel: 'focused design'
  }
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0.3]
  )

  const v = VERTICALS[active]

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-teal/20 via-teal/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute top-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-coral/20 via-coral/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal/5 via-coral/5 to-amber/5 blur-3xl rounded-full" />

        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-2xl bg-teal rotate-12 opacity-[0.05] animate-float-slow mix-blend-multiply" />

        <div
          className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full bg-coral rotate-45 opacity-[0.05] animate-float-slow mix-blend-multiply"
          style={{ animationDelay: '1s' }}
        />

        <div
          className="absolute top-1/2 right-1/3 w-12 h-12 rounded-xl bg-amber rotate-[30deg] opacity-[0.06] animate-float mix-blend-multiply"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 relative will-change-transform"
        style={{ y, opacity }}
      >
        {/* Eyebrow */}
        <motion.p
          className="shimmer font-mono text-xs uppercase tracking-widest text-teal-dark mb-5 inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Web Development &amp; AI Automation
        </motion.p>

        {/* Main H1 */}
        <motion.h1
          id="hero-title"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Development &amp; AI Automation for Growing Businesses.
          <br />

          <span className="bg-gradient-to-r from-teal via-teal-dark to-teal bg-clip-text text-transparent">
            Websites that turn visitors into customers.
          </span>
        </motion.h1>

        {/* SEO-friendly introductory content */}
        <motion.p
          className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Tech Web Studio builds fast, mobile-friendly websites,
          e-commerce stores, AI chatbots and business automation
          systems for restaurants, dentists, clinics, gyms, salons,
          law firms, real estate businesses and other small businesses.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-coral-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-coral/30 hover:shadow-elevated hover:shadow-glow-coral transition-all duration-300 focus-ring"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Free Website Audit</span>

            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>

          <motion.a
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-ink/20 bg-white/50 backdrop-blur-sm font-semibold px-8 py-4 rounded-full hover:border-ink/40 hover:bg-white/80 hover:shadow-elevated transition-all duration-300 focus-ring"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Work
          </motion.a>
        </motion.div>

        {/* Business verticals */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-4">
            Website solutions for different industries
          </p>

          <div
            className="flex flex-wrap gap-2 mb-6"
            role="tablist"
            aria-label="Industries we serve"
          >
            {VERTICALS.map((item, i) => (
              <motion.button
                key={item.key}
                id={`industry-tab-${item.key}`}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls={`industry-panel-${item.key}`}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 focus-ring relative ${
                  active === i
                    ? 'bg-ink text-paper border-ink shadow-premium'
                    : 'border-ink/15 text-ink/60 hover:border-ink/30 hover:text-ink/80 bg-white/30 backdrop-blur-sm hover:shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}

                {active === i && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-ink/5"
                    layoutId="activeTab"
                    aria-hidden="true"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="perspective-container">
            <AnimatePresence mode="wait">
              <motion.article
                key={v.key}
                id={`industry-panel-${v.key}`}
                role="tabpanel"
                aria-labelledby={`industry-tab-${v.key}`}
                className="glass card-inner-light rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 shadow-premium"
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.98,
                  rotateX: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                  rotateX: -10
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut'
                }}
              >
                <p className="text-ink/80 max-w-xl leading-relaxed">
                  {v.pitch}
                </p>

                <div className="md:ml-auto flex items-center gap-4 shrink-0">
                  <motion.span
                    className="font-display font-bold text-4xl bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                    key={v.stat}
                    initial={{
                      scale: 0.5,
                      opacity: 0
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {v.stat}
                  </motion.span>

                  <span className="text-sm text-ink/50 max-w-[9rem] leading-tight">
                    {v.statLabel}
                  </span>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
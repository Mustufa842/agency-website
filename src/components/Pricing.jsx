// components/Pricing.jsx
import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PLANS = [
  {
    name: 'Starter',
    price: '$300',
    desc: 'A clean, working website to get you online.',
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO setup'],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$600',
    desc: 'Everything in Starter, plus booking and an AI chatbot.',
    features: ['Everything in Starter', 'Online booking', 'AI chatbot (FAQ + leads)', 'Google Maps integration'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$1,000',
    desc: 'The full system: site, chatbot and automation working together.',
    features: ['Everything in Professional', 'WhatsApp / email automation', 'CRM integration', 'Priority support'],
    featured: false,
  },
]

function PricingCard({ p, index, inView }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-200, 200], [4, -4])
  const rotateY = useTransform(x, [-200, 200], [-4, 4])

  function handleMouseMove(event) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX - width / 2
    const yPct = mouseY - height / 2
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="perspective-container" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ rotateX, rotateY }}
        className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
          p.featured
            ? 'gradient-border bg-gradient-to-br from-ink to-ink-dark text-paper shadow-[0_0_80px_-16px_rgba(14,110,94,0.15)] md:-translate-y-3 relative overflow-hidden'
            : 'card-inner-light bg-white/80 backdrop-blur-xl border border-ink/10 shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-ink/10'
        }`}
      >
        {p.featured && (
          <>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal/10 to-coral/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber/5 to-teal/5 rounded-full blur-3xl -ml-32 -mb-32" />
            <span className="shimmer relative z-10 self-start text-[11px] font-semibold uppercase tracking-widest bg-amber text-ink px-3 py-1 rounded-full mb-4 overflow-hidden">
              Most popular
            </span>
          </>
        )}
        <h3 className={`relative z-10 font-display font-semibold text-lg ${p.featured ? 'text-paper' : 'text-ink'}`}>
          {p.name}
        </h3>
        <p 
          className={`relative z-10 font-display font-bold text-5xl mt-2 drop-shadow-sm ${p.featured ? 'text-paper' : 'text-ink'}`}
        >
          {p.price}
        </p>
        <p className={`relative z-10 text-sm mt-3 mb-6 ${p.featured ? 'text-paper/70' : 'text-ink/60'}`}>{p.desc}</p>
        <ul className="relative z-10 space-y-2.5 mb-8 flex-1">
          {p.features.map((f) => (
            <li
              key={f}
              className={`text-sm flex items-start gap-2.5 ${p.featured ? 'text-paper/85' : 'text-ink/75'}`}
            >
              <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-gradient-to-br from-teal to-coral" />
              {f}
            </li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          className={`relative z-10 text-center font-semibold px-5 py-3.5 rounded-full transition-all duration-300 focus-ring hover:shadow-premium ${
            p.featured
              ? 'bg-gradient-to-r from-coral to-coral-dark text-white shadow-lg shadow-coral/30 hover:shadow-coral/40'
              : 'border border-ink/20 bg-white/50 backdrop-blur-sm hover:border-ink/40 hover:bg-white/80'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </div>
  )
}

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-teal/5 via-coral/5 to-amber/5 blur-3xl" />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="shimmer font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20 overflow-hidden relative">
            Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl leading-[1.1] mb-14">
            Simple pricing, <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">no surprises</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {PLANS.map((p, index) => (
            <PricingCard key={p.name} p={p} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
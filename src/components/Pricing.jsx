// components/Pricing.jsx
import { motion } from 'framer-motion'
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

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20">
            Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl leading-[1.1] mb-14">
            Simple pricing, <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">no surprises</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: p.featured ? -6 : -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                p.featured
                  ? 'bg-gradient-to-br from-ink to-ink-dark text-paper border border-ink shadow-2xl shadow-ink/20 md:-translate-y-3 relative overflow-hidden'
                  : 'bg-white/80 backdrop-blur-xl border border-ink/10 shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-ink/10'
              }`}
            >
              {p.featured && (
                <>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal/10 to-coral/10 rounded-full blur-3xl -mr-32 -mt-32" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber/5 to-teal/5 rounded-full blur-3xl -ml-32 -mb-32" />
                  <span className="relative z-10 self-start text-[11px] font-semibold uppercase tracking-widest bg-amber text-ink px-3 py-1 rounded-full mb-4">
                    Most popular
                  </span>
                </>
              )}
              <h3 className={`relative z-10 font-display font-semibold text-lg ${p.featured ? 'text-paper' : 'text-ink'}`}>
                {p.name}
              </h3>
              <p className={`relative z-10 font-display font-bold text-5xl mt-2 ${p.featured ? 'text-paper' : 'text-ink'}`}>
                {p.price}
              </p>
              <p className={`relative z-10 text-sm mt-3 mb-6 ${p.featured ? 'text-paper/70' : 'text-ink/60'}`}>{p.desc}</p>
              <ul className="relative z-10 space-y-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex items-start gap-2.5 ${p.featured ? 'text-paper/85' : 'text-ink/75'}`}
                  >
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${p.featured ? 'bg-amber' : 'bg-gradient-to-r from-teal to-coral'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className={`relative z-10 text-center font-semibold px-5 py-3.5 rounded-full transition-all duration-300 focus-ring ${
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
          ))}
        </div>
      </div>
    </section>
  )
}
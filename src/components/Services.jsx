// components/Services.jsx
import { Globe, MessageCircle, Workflow, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SERVICES = [
  {
    icon: Globe,
    accent: 'teal',
    title: 'Website Development',
    desc: 'A modern site built to convert visitors into customers, not just look good.',
    items: ['Modern, responsive design', 'Online booking built in', 'SEO fundamentals done right', 'Fast loading, every device', 'Google Maps integration', 'Forms that route to your inbox'],
  },
  {
    icon: MessageCircle,
    accent: 'coral',
    title: 'AI Chatbots',
    desc: 'A front desk that never clocks out, on your site and in your inbox.',
    items: ['24/7 customer support', 'Lead collection', 'FAQ answering', 'Appointment booking'],
  },
  {
    icon: Workflow,
    accent: 'amber',
    title: 'AI Automation',
    desc: 'The busywork between "new lead" and "paying customer" \u2014 handled.',
    items: ['Lead capture', 'WhatsApp automation', 'Email automation', 'CRM integration'],
  },
]

const ACCENTS = {
  teal: { bg: 'bg-teal/15', text: 'text-teal-dark', ring: 'hover:border-teal/40', gradient: 'from-teal to-teal-dark' },
  coral: { bg: 'bg-coral/15', text: 'text-coral-dark', ring: 'hover:border-coral/40', gradient: 'from-coral to-coral-dark' },
  amber: { bg: 'bg-amber/20', text: 'text-ink', ring: 'hover:border-amber/60', gradient: 'from-amber to-amber-dark' },
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-coral/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20">
            Services
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl leading-[1.1] mb-14">
            Everything you need to <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">get found</span> and stay responsive.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, index) => {
            const Icon = s.icon
            const a = ACCENTS[s.accent]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                className={`group bg-white/80 backdrop-blur-xl border border-ink/10 rounded-2xl p-8 transition-all duration-300 shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-ink/10 ${a.ring} relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${a.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${a.bg} relative`}>
                  <Icon className={`w-5 h-5 ${a.text}`} strokeWidth={2} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-ink/60 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${a.text}`} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
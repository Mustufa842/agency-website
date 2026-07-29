// components/FAQ.jsx
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FAQS = [
  { q: 'How long does it take?', a: 'Most sites go live in 3\u20137 days, depending on the plan and how quickly we get your content and feedback.' },
  { q: 'Do I need my own hosting?', a: 'No \u2014 we handle hosting for you. If you already have a domain, we can point it to your new site; if not, we\u2019ll help you get one.' },
  { q: 'Can AI actually answer my customers?', a: 'Yes. The chatbot is trained on your business info \u2014 hours, services, pricing, FAQs \u2014 and can also collect leads or book appointments around the clock.' },
  { q: 'What if I need changes after launch?', a: 'Small edits are included for the first 30 days. After that, we offer simple monthly maintenance or you can request one-off updates.' },
  { q: 'Do you work with businesses outside these industries?', a: 'These are where we\u2019ve built the most experience, but we take on other local service businesses too \u2014 just reach out.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal/[0.02] to-white" />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20">
            FAQ
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-14 leading-[1.1]">
            Questions, <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">answered</span>.
          </h2>
        </motion.div>

        <div className="divide-y divide-ink/10 border-t border-b border-ink/10 bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-ink/5">
          {FAQS.map((item, i) => {
            const open = openIndex === i
            return (
              <motion.div 
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="px-6"
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left focus-ring rounded group"
                >
                  <span className={`font-medium transition-colors duration-300 ${open ? 'text-teal-dark' : 'text-ink'}`}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      open ? 'bg-teal/15 text-teal-dark' : 'bg-ink/5 text-ink/40 group-hover:bg-ink/10'
                    }`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={2} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-ink/65 leading-relaxed text-sm pr-8">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
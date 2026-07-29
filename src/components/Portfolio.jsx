// components/Portfolio.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PROJECTS = [
  { title: 'Restaurant Website', tag: 'Live', desc: 'Full menu, online ordering and reservations for a local restaurant.', ready: true },
  { title: 'Gym Website', tag: 'Coming Soon', ready: false },
  { title: 'Dental Clinic', tag: 'Coming Soon', ready: false },
  { title: 'Law Firm', tag: 'Coming Soon', ready: false },
  { title: 'Salon', tag: 'Coming Soon', ready: false },
]

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal/[0.02] to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20">
            Portfolio
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl leading-[1.1] mb-14">
            Real work, <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">real industries</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={p.ready ? { 
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              } : {}}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                p.ready 
                  ? 'border-ink/10 bg-white/80 backdrop-blur-xl shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-ink/10' 
                  : 'border-dashed border-ink/15 bg-white/30 backdrop-blur-sm'
              }`}
            >
              <div className={`aspect-[4/3] flex items-center justify-center relative ${
                p.ready ? 'bg-gradient-to-br from-teal/[0.06] to-amber/[0.04]' : 'bg-ink/[0.02]'
              }`}>
                {!p.ready && (
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/30">
                    Preview coming soon
                  </span>
                )}
                {p.ready && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />
                    <span className="font-display font-bold text-2xl text-teal-dark/70 relative z-10">
                      {p.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      p.ready 
                        ? 'bg-gradient-to-r from-teal/15 to-teal/5 text-teal-dark' 
                        : 'bg-ink/5 text-ink/40'
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
                {p.ready && <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
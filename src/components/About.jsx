// components/About.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal/5 via-coral/5 to-amber/5 blur-3xl" />
      </div>

      <motion.div 
        ref={ref}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20">
            About
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-sm leading-[1.1]">
            One team, two jobs: <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">get you found</span>, then handle the busywork.
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-5 text-ink/70 leading-relaxed text-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Most local businesses lose customers before a phone ever rings &mdash; to a slow site,
            a missing Google listing, or a message that sits unanswered overnight. We fix that.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We&apos;re a small studio that builds fast, modern websites and pairs them with AI
            systems that answer questions, capture leads and follow up automatically &mdash; so
            you spend less time on admin and more time running your business.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-teal before:to-coral before:rounded-full"
          >
            No bloated agency overhead, no six-month timelines. Just a site and a system that
            work from week one.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
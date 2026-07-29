// components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FIELD_CLASS =
  'w-full bg-white/80 backdrop-blur-sm border border-ink/15 rounded-xl px-4 py-3.5 text-sm placeholder:text-ink/35 focus-ring focus-visible:border-teal transition-all duration-300 hover:border-ink/30'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    fetch('https://formspree.io/f/xqerlnpd', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          setStatus('sent')
        } else {
          setStatus('idle')
          alert('Something went wrong — please try again or email us directly.')
        }
      })
      .catch(() => {
        setStatus('idle')
        alert('Something went wrong — please try again or email us directly.')
      })
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-teal/15 via-coral/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-coral/15 via-amber/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20">
            Contact
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 leading-[1.1]">
            Get your <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">free website audit</span>.
          </h2>
          <p className="text-ink/60 mb-10 max-w-lg text-lg">
            Tell us about your business and we&apos;ll get back to you within one business day.
          </p>
        </motion.div>

        {status === 'sent' ? (
          <motion.div 
            className="rounded-2xl border border-teal/30 bg-gradient-to-br from-teal/10 to-teal/5 p-10 text-center backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="w-16 h-16 rounded-full bg-teal/20 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-display font-semibold text-xl mb-1">Message sent.</p>
            <p className="text-ink/60 text-sm">We&apos;ll be in touch soon.</p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit} 
            className="grid sm:grid-cols-2 gap-5 bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-ink/10 shadow-xl shadow-ink/5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-xs font-semibold text-ink/60 mb-1.5">Name</label>
              <input id="name" name="name" type="text" required className={FIELD_CLASS} placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="business" className="block text-xs font-semibold text-ink/60 mb-1.5">Business</label>
              <input id="business" name="business" type="text" required className={FIELD_CLASS} placeholder="Jane's Diner" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-ink/60 mb-1.5">Phone</label>
              <input id="phone" name="phone" type="tel" className={FIELD_CLASS} placeholder="+92 300 1234567" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-xs font-semibold text-ink/60 mb-1.5">Email</label>
              <input id="email" name="email" type="email" required className={FIELD_CLASS} placeholder="jane@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs font-semibold text-ink/60 mb-1.5">Message</label>
              <textarea id="message" name="message" rows={4} className={FIELD_CLASS} placeholder="Tell us a bit about what you need..." />
            </div>
            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-coral-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-coral/30 hover:shadow-coral/40 transition-all duration-300 focus-ring disabled:opacity-60"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
import { useState } from 'react'

const FIELD_CLASS =
  'w-full bg-white border border-ink/15 rounded-lg px-4 py-3 text-sm placeholder:text-ink/35 focus-ring focus-visible:border-teal'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // TODO: replace with your Formspree endpoint (or any form backend), e.g.:
    // fetch('https://formspree.io/f/yourFormId', { method: 'POST', body: new FormData(e.target), headers: { Accept: 'application/json' } })
    setTimeout(() => setStatus('sent'), 600)
  }

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-ink/10 bg-white/40">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4">Contact</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
          Get your free website audit.
        </h2>
        <p className="text-ink/60 mb-10 max-w-lg">
          Tell us about your business and we&apos;ll get back to you within one business day.
        </p>

        {status === 'sent' ? (
          <div className="rounded-2xl border border-teal/30 bg-teal/10 p-8 text-center">
            <p className="font-display font-semibold text-lg mb-1">Message sent.</p>
            <p className="text-ink/60 text-sm">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
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
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-6 py-3.5 rounded-full hover:bg-coral-dark transition-colors focus-ring disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

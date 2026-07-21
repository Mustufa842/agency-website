import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  { q: 'How long does it take?', a: 'Most sites go live in 3\u20137 days, depending on the plan and how quickly we get your content and feedback.' },
  { q: 'Do I need my own hosting?', a: 'No \u2014 we handle hosting for you. If you already have a domain, we can point it to your new site; if not, we\u2019ll help you get one.' },
  { q: 'Can AI actually answer my customers?', a: 'Yes. The chatbot is trained on your business info \u2014 hours, services, pricing, FAQs \u2014 and can also collect leads or book appointments around the clock.' },
  { q: 'What if I need changes after launch?', a: 'Small edits are included for the first 30 days. After that, we offer simple monthly maintenance or you can request one-off updates.' },
  { q: 'Do you work with businesses outside these industries?', a: 'These are where we\u2019ve built the most experience, but we take on other local service businesses too \u2014 just reach out.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-ink/10">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4">FAQ</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-14">
          Questions, answered.
        </h2>

        <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {FAQS.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left focus-ring rounded"
                >
                  <span className="font-medium">{item.q}</span>
                  <Plus
                    className={`w-4 h-4 shrink-0 text-teal-dark transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    open ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-ink/65 leading-relaxed text-sm">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

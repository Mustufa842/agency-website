import { Globe, MessageCircle, Workflow, Check } from 'lucide-react'

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
  teal: { bg: 'bg-teal/10', text: 'text-teal-dark', ring: 'group-hover:border-teal/40' },
  coral: { bg: 'bg-coral/10', text: 'text-coral-dark', ring: 'group-hover:border-coral/40' },
  amber: { bg: 'bg-amber/20', text: 'text-ink', ring: 'group-hover:border-amber/60' },
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-ink/10 bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4">Services</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight max-w-xl mb-14">
          Everything you need to get found and stay responsive.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon
            const a = ACCENTS[s.accent]
            return (
              <div
                key={s.title}
                className={`group bg-paper border border-ink/10 rounded-2xl p-7 transition-colors ${a.ring}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${a.bg}`}>
                  <Icon className={`w-5 h-5 ${a.text}`} strokeWidth={2} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-ink/60 text-sm mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${a.text}`} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

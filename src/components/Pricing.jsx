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
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-ink/10 bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4">Pricing</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight max-w-xl mb-14">
          Simple pricing, no surprises.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col ${
                p.featured
                  ? 'bg-ink text-paper border border-ink shadow-xl md:-translate-y-3'
                  : 'bg-paper border border-ink/10'
              }`}
            >
              {p.featured && (
                <span className="self-start text-[11px] font-semibold uppercase tracking-widest bg-amber text-ink px-2.5 py-1 rounded-full mb-4">
                  Most popular
                </span>
              )}
              <h3 className={`font-display font-semibold text-lg ${p.featured ? 'text-paper' : 'text-ink'}`}>
                {p.name}
              </h3>
              <p className={`font-display font-bold text-4xl mt-2 ${p.featured ? 'text-paper' : 'text-ink'}`}>
                {p.price}
              </p>
              <p className={`text-sm mt-3 mb-6 ${p.featured ? 'text-paper/70' : 'text-ink/60'}`}>{p.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex items-start gap-2.5 ${p.featured ? 'text-paper/85' : 'text-ink/75'}`}
                  >
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${p.featured ? 'bg-amber' : 'bg-teal'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center font-semibold px-5 py-3 rounded-full transition-colors focus-ring ${
                  p.featured
                    ? 'bg-coral text-white hover:bg-coral-dark'
                    : 'border border-ink/20 hover:border-ink/40'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

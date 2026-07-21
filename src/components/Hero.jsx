import { useState } from 'react'

const VERTICALS = [
  { key: 'restaurants', label: 'Restaurants', pitch: 'Menus, online ordering and Google Maps visibility that fill tables on a Friday night.', stat: '+32%', statLabel: 'more reservations' },
  { key: 'dentists', label: 'Dentists', pitch: 'Booking pages patients can use at midnight, with reminders that cut no-shows.', stat: '-40%', statLabel: 'missed appointments' },
  { key: 'gyms', label: 'Gyms', pitch: 'Membership pages and lead forms that turn scrollers into sign-ups.', stat: '3x', statLabel: 'more trial sign-ups' },
  { key: 'salons', label: 'Salons', pitch: 'Instant booking and AI FAQs so your front desk isn\u2019t glued to the phone.', stat: '6 hrs', statLabel: 'saved on calls / week' },
  { key: 'clinics', label: 'Clinics', pitch: 'Patient intake and appointment reminders that run themselves.', stat: '24/7', statLabel: 'patient support' },
  { key: 'law', label: 'Law Firms', pitch: 'Consultation requests captured and qualified before you even see them.', stat: '2x', statLabel: 'consultation requests' },
  { key: 'realestate', label: 'Real Estate', pitch: 'Listing pages and lead follow-up that never sleeps.', stat: '<5 min', statLabel: 'lead response time' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const v = VERTICALS[active]

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute top-40 -left-32 w-80 h-80 rounded-full bg-coral/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-5">
          Websites &amp; AI Automation for Local Business
        </p>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          Websites that bring you customers.
          <br />
          <span className="text-teal">AI automation</span> that saves you hours every week.
        </h1>

        <p className="mt-6 text-lg text-ink/70 max-w-xl">
          We build high-converting websites and AI systems for restaurants, dentists, gyms, salons, clinics, law firms and real estate businesses.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-6 py-3.5 rounded-full hover:bg-coral-dark transition-colors focus-ring"
          >
            Get Free Website Audit
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-ink/20 font-semibold px-6 py-3.5 rounded-full hover:border-ink/40 transition-colors focus-ring"
          >
            See Live Demo
          </a>
        </div>

        {/* Signature element: vertical switcher */}
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-3">
            Built for your kind of business
          </p>
          <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Business type">
            {VERTICALS.map((item, i) => (
              <button
                key={item.key}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors focus-ring ${
                  active === i
                    ? 'bg-ink text-paper border-ink'
                    : 'border-ink/15 text-ink/60 hover:border-ink/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            key={v.key}
            className="bg-white/70 border border-ink/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 animate-[fadeIn_0.3s_ease]"
          >
            <p className="text-ink/80 max-w-xl leading-relaxed">{v.pitch}</p>
            <div className="md:ml-auto flex items-center gap-3 shrink-0">
              <span className="font-display font-bold text-3xl text-teal-dark">{v.stat}</span>
              <span className="text-sm text-ink/50 max-w-[9rem] leading-tight">{v.statLabel}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  )
}

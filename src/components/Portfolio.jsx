const PROJECTS = [
  { title: 'Restaurant Website', tag: 'Live', desc: 'Full menu, online ordering and reservations for a local restaurant.', ready: true },
  { title: 'Gym Website', tag: 'Coming Soon', ready: false },
  { title: 'Dental Clinic', tag: 'Coming Soon', ready: false },
  { title: 'Law Firm', tag: 'Coming Soon', ready: false },
  { title: 'Salon', tag: 'Coming Soon', ready: false },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4">Portfolio</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight max-w-xl mb-14">
          Real work, real industries.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-2xl border overflow-hidden ${
                p.ready ? 'border-ink/10 bg-white/60' : 'border-dashed border-ink/15 bg-transparent'
              }`}
            >
              <div
                className={`aspect-[4/3] flex items-center justify-center ${
                  p.ready ? 'bg-gradient-to-br from-teal/15 to-amber/10' : 'bg-ink/[0.03]'
                }`}
              >
                {!p.ready && (
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/30">
                    Preview coming soon
                  </span>
                )}
                {p.ready && (
                  <span className="font-display font-bold text-2xl text-teal-dark/70">{p.title}</span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      p.ready ? 'bg-teal/15 text-teal-dark' : 'bg-ink/5 text-ink/40'
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
                {p.ready && <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

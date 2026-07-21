export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4">About</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight max-w-sm">
            One team, two jobs: get you found, then handle the busywork.
          </h2>
        </div>
        <div className="space-y-5 text-ink/70 leading-relaxed text-lg">
          <p>
            Most local businesses lose customers before a phone ever rings &mdash; to a slow site,
            a missing Google listing, or a message that sits unanswered overnight. We fix that.
          </p>
          <p>
            We&apos;re a small studio that builds fast, modern websites and pairs them with AI
            systems that answer questions, capture leads and follow up automatically &mdash; so
            you spend less time on admin and more time running your business.
          </p>
          <p>
            No bloated agency overhead, no six-month timelines. Just a site and a system that
            work from week one.
          </p>
        </div>
      </div>
    </section>
  )
}

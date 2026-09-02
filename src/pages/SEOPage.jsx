// src/pages/SEOPage.jsx

import { useEffect } from 'react'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { SERVICE_PAGES } from './ServicePages'

const SITE_URL =
  'https://agency-website.mustufaaijaz1234.workers.dev'

export default function SEOPage({ path }) {
  const page = SERVICE_PAGES[path]

  useEffect(() => {
    if (!page) return

    document.title = page.title

    const setMeta = (name, content) => {
      let element = document.querySelector(
        `meta[name="${name}"]`
      )

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    const setProperty = (property, content) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      )

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    const canonicalUrl =
      `${SITE_URL}${path === '/' ? '' : path}`

    setMeta('description', page.description)
    setMeta('robots', 'index, follow')

    setProperty(
      'og:title',
      page.title
    )

    setProperty(
      'og:description',
      page.description
    )

    setProperty(
      'og:url',
      canonicalUrl
    )

    setProperty(
      'og:type',
      'website'
    )

    setProperty(
      'og:image',
      `${SITE_URL}/og-image.png`
    )

    setProperty(
      'og:site_name',
      'Tech Web Studio'
    )

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute(
        'rel',
        'canonical'
      )
      document.head.appendChild(canonical)
    }

    canonical.setAttribute(
      'href',
      canonicalUrl
    )

    /*
     * Service structured data
     */
    const oldSchema =
      document.getElementById(
        'seo-service-schema'
      )

    if (oldSchema) {
      oldSchema.remove()
    }

    const script =
      document.createElement('script')

    script.id =
      'seo-service-schema'

    script.type =
      'application/ld+json'

    script.textContent =
      JSON.stringify({
        '@context':
          'https://schema.org',

        '@type':
          'Service',

        name:
          page.schemaName,

        description:
          page.description,

        provider: {
          '@type':
            'ProfessionalService',

          name:
            'Tech Web Studio',

          url:
            SITE_URL,
        },

        areaServed: {
          '@type':
            'Place',

          name:
            'Worldwide',
        },

        url:
          canonicalUrl,

        serviceType:
          page.schemaName,
      })

    document.head.appendChild(script)

    return () => {
      const schema =
        document.getElementById(
          'seo-service-schema'
        )

      if (schema) {
        schema.remove()
      }
    }
  }, [page, path])

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Page Not Found
          </h1>

          <a
            href="/"
            className="text-teal-dark underline"
          >
            Return to homepage
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper via-white to-paper/50">

      <header className="border-b border-ink/10 bg-white/80 backdrop-blur-md sticky top-0 z-50">

        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          <a
            href="/"
            className="font-display font-bold text-xl"
          >
            Tech Web Studio
          </a>

          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-teal-dark transition-colors"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>

        </div>

      </header>

      <main>

        {/* HERO */}

        <section className="py-20 md:py-28">

          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
              }}

              className="max-w-4xl"
            >

              <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-5">
                {page.category}
              </p>

              <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-7">
                {page.h1}
              </h1>

              <p className="text-lg md:text-xl text-ink/65 leading-relaxed max-w-3xl mb-9">
                {page.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white px-7 py-3.5 font-medium hover:bg-teal-dark transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 font-medium hover:border-teal/40 hover:text-teal-dark transition-colors"
                >
                  View Our Work
                </a>

              </div>

            </motion.div>

          </div>

        </section>

        {/* SERVICES */}

        <section className="py-20 bg-white border-y border-ink/5">

          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-2xl mb-12">

              <p className="font-mono text-xs uppercase tracking-widest text-coral-dark mb-4">
                What You Get
              </p>

              <h2 className="font-display font-bold text-3xl md:text-4xl mb-5">
                A website built around your business goals
              </h2>

              <p className="text-ink/60 leading-relaxed">
                We focus on clear messaging, mobile usability,
                performance, search visibility and simple customer
                journeys.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {page.features.map(
                (feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-ink/10 bg-paper/40 p-6"
                  >

                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                      <Check
                        className="w-5 h-5 text-teal-dark"
                        strokeWidth={2.5}
                      />
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-2">
                      {feature}
                    </h3>

                    <p className="text-sm text-ink/55 leading-relaxed">
                      Designed to provide a clear and useful
                      experience for your visitors and customers.
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="py-20 md:py-28">

          <div className="max-w-6xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-14 items-start">

              <div>

                <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4">
                  Our Process
                </p>

                <h2 className="font-display font-bold text-3xl md:text-4xl mb-5">
                  From idea to launch without the complexity
                </h2>

                <p className="text-ink/60 leading-relaxed max-w-xl">
                  We keep the development process straightforward,
                  with clear milestones and a focus on getting your
                  business online with a professional customer experience.
                </p>

              </div>

              <div className="space-y-4">

                {page.process.map(
                  (step, index) => (
                    <div
                      key={step.title}
                      className="flex gap-5 rounded-2xl border border-ink/10 bg-white p-6"
                    >

                      <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-mono text-sm shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div>

                        <h3 className="font-display font-semibold text-lg mb-1">
                          {step.title}
                        </h3>

                        <p className="text-sm text-ink/55 leading-relaxed">
                          {step.description}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* WHY */}

        <section className="py-20 bg-ink text-white">

          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-3xl">

              <p className="font-mono text-xs uppercase tracking-widest text-teal mb-4">
                Why Tech Web Studio
              </p>

              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Built for businesses that want more than a basic website
              </h2>

              <p className="text-white/60 leading-relaxed mb-8">
                Your website should make it easy for potential
                customers to understand what you offer, trust your
                business and take the next step.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  'Mobile-first experience',
                  'Clear calls to action',
                  'SEO-friendly structure',
                  'Fast and modern interface',
                  'Conversion-focused content',
                  'Easy customer contact',
                ].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <Check
                        size={18}
                        className="text-teal shrink-0"
                      />

                      <span className="text-sm text-white/80">
                        {item}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="py-20 md:py-28">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">

              <MessageCircle
                className="text-teal-dark"
                size={26}
              />

            </div>

            <h2 className="font-display font-bold text-3xl md:text-5xl mb-5">
              Ready to improve your online presence?
            </h2>

            <p className="text-ink/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us what your business needs and we'll help you
              plan a website or automation system that fits.
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-8 py-4 font-medium hover:bg-teal-dark transition-colors"
            >
              Start a Project
              <ArrowRight size={18} />
            </a>

          </div>

        </section>

        {/* RELATED */}

        <section className="pb-20">

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="font-display font-bold text-2xl mb-6">
              Explore more services
            </h2>

            <div className="flex flex-wrap gap-3">

              {Object.entries(SERVICE_PAGES)
                .filter(
                  ([servicePath]) =>
                    servicePath !== path
                )
                .slice(0, 8)
                .map(
                  ([servicePath, service]) => (
                    <a
                      key={servicePath}
                      href={servicePath}
                      className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm hover:border-teal/30 hover:text-teal-dark transition-colors"
                    >
                      {service.shortName}
                    </a>
                  )
                )}

            </div>

          </div>

        </section>

      </main>

      <footer className="border-t border-ink/10 py-8">

        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-ink/50">

          <span>
            © {new Date().getFullYear()} Tech Web Studio
          </span>

          <a
            href="/"
            className="hover:text-teal-dark transition-colors"
          >
            Back to homepage
          </a>

        </div>

      </footer>

    </div>
  )
}
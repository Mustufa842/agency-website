// components/FAQ.jsx
import { useState } from 'react'
import { Plus } from 'lucide-react'
import {
  motion,
  AnimatePresence
} from 'framer-motion'
import {
  useInView
} from 'react-intersection-observer'

const FAQS = [
  {
    q: 'How long does it take to build a website?',
    a: 'Most small business websites can go live in 3–7 days, depending on the number of pages, features, content and feedback required.'
  },
  {
    q: 'Do I need my own hosting?',
    a: 'No. Tech Web Studio can handle hosting setup for you. If you already have a domain, we can connect it to your new website. If you do not have one, we can help you choose and configure a domain.'
  },
  {
    q: 'Can an AI chatbot answer my customers?',
    a: 'Yes. An AI chatbot can answer common questions about your business, services, opening hours and other information. It can also collect leads and assist with appointment requests.'
  },
  {
    q: 'Can you build an e-commerce website?',
    a: 'Yes. We can build e-commerce websites with product pages, shopping carts, checkout functionality, order management and other features required for selling products online.'
  },
  {
    q: 'Do you build websites for restaurants?',
    a: 'Yes. Restaurant websites can include menus, online ordering, reservation options, Google Maps integration, contact information and mobile-friendly layouts.'
  },
  {
    q: 'Do you build websites for dentists and clinics?',
    a: 'Yes. We create professional dental and clinic websites with service pages, appointment request forms, FAQs, contact information and clear patient-focused navigation.'
  },
  {
    q: 'Do you work with businesses outside these industries?',
    a: 'Yes. Restaurants, healthcare businesses, gyms, salons, law firms and real estate businesses are some of the industries we target, but we can also work with other small and local businesses.'
  },
  {
    q: 'What happens after my website launches?',
    a: 'We can help with small updates, maintenance, hosting and future improvements. Ongoing support can be arranged depending on your needs.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal/[0.02] to-white" />
      </div>

      <div
        className="section-divider absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0
                }
              : {}
          }
          transition={{
            duration: 0.6
          }}
        >
          <p className="shimmer font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20 overflow-hidden relative">
            FAQ
          </p>

          <h2
            id="faq-title"
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 leading-[1.1]"
          >
            Frequently asked questions about our web development and AI automation services.
          </h2>

          <p className="text-ink/65 text-lg leading-relaxed mb-14">
            Find answers to common questions about website development,
            e-commerce websites, AI chatbots, automation and ongoing support.
          </p>
        </motion.div>

        <div className="glass divide-y divide-ink/10 border-t border-b border-ink/10 rounded-2xl overflow-hidden shadow-lg shadow-ink/5">

          {FAQS.map((item, i) => {
            const open = openIndex === i

            const answerId =
              `faq-answer-${i}`

            const buttonId =
              `faq-question-${i}`

            return (
              <motion.div
                key={item.q}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0
                      }
                    : {}
                }
                transition={{
                  duration: 0.4,
                  delay: i * 0.06
                }}
                className="px-6 relative hover:bg-teal/[0.02] transition-colors duration-300"
              >

                {open && (
                  <motion.div
                    layoutId="active-faq-border"
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-teal to-coral"
                    aria-hidden="true"
                  />
                )}

                <button
                  id={buttonId}
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      open ? -1 : i
                    )
                  }
                  aria-expanded={open}
                  aria-controls={answerId}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left focus-ring rounded group"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      open
                        ? 'text-teal-dark'
                        : 'text-ink'
                    }`}
                  >
                    {item.q}
                  </span>

                  <motion.div
                    animate={{
                      rotate: open ? 45 : 0
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      open
                        ? 'bg-teal/15 text-teal-dark'
                        : 'bg-ink/5 text-ink/40 group-hover:bg-ink/10'
                    }`}
                    aria-hidden="true"
                  >
                    <Plus
                      className="w-4 h-4"
                      strokeWidth={2}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: -8
                        }}
                        animate={{
                          opacity: 1,
                          y: 0
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1
                        }}
                        className="pb-5 text-ink/65 leading-relaxed text-sm pr-8"
                      >
                        {item.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
// src/components/Services.jsx

import {
  Globe,
  MessageCircle,
  Workflow,
  Check,
} from 'lucide-react'

import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

const SERVICES = [
  {
    icon: Globe,
    accent: 'teal',
    title: 'Website Development',
    href: '/web-development',
    desc: 'Modern, fast and responsive websites designed to turn visitors into customers.',
    items: [
      'Modern responsive design',
      'Online booking integration',
      'SEO fundamentals',
      'Fast loading performance',
      'Google Maps integration',
      'Contact and lead forms',
    ],
  },

  {
    icon: MessageCircle,
    accent: 'coral',
    title: 'AI Chatbots',
    href: '/ai-automation',
    desc: 'An AI-powered front desk that can answer questions, capture leads and help customers 24/7.',
    items: [
      '24/7 customer support',
      'Lead collection',
      'FAQ answering',
      'Appointment assistance',
      'Website chat integration',
      'Customer qualification',
    ],
  },

  {
    icon: Workflow,
    accent: 'amber',
    title: 'AI Automation',
    href: '/ai-automation',
    desc: 'Automate repetitive business processes so your team can spend more time serving customers.',
    items: [
      'Lead capture automation',
      'WhatsApp automation',
      'Email automation',
      'CRM integration',
      'Lead notifications',
      'Workflow automation',
    ],
  },
]

const INDUSTRIES = [
  {
    href: '/restaurant-websites',
    label: 'Restaurant Websites',
    description: 'Websites for restaurants, cafes and food businesses.',
  },
  {
    href: '/dental-websites',
    label: 'Dental Websites',
    description: 'Professional websites for dentists and dental practices.',
  },
  {
    href: '/clinic-websites',
    label: 'Clinic Websites',
    description: 'Modern websites for clinics and healthcare businesses.',
  },
  {
    href: '/gym-websites',
    label: 'Gym & Fitness Websites',
    description: 'Websites designed for gyms, trainers and fitness studios.',
  },
  {
    href: '/salon-websites',
    label: 'Salon Websites',
    description: 'Beautiful websites for salons, barbers and beauty businesses.',
  },
  {
    href: '/law-firm-websites',
    label: 'Law Firm Websites',
    description: 'Professional websites for law firms and legal professionals.',
  },
  {
    href: '/real-estate-websites',
    label: 'Real Estate Websites',
    description: 'Lead-focused websites for agents and real estate companies.',
  },
]

const ACCENTS = {
  teal: {
    bg: 'bg-teal/15',
    text: 'text-teal-dark',
    ring: 'hover:border-teal/40',
    gradient: 'from-teal to-teal-dark',
  },

  coral: {
    bg: 'bg-coral/15',
    text: 'text-coral-dark',
    ring: 'hover:border-coral/40',
    gradient: 'from-coral to-coral-dark',
  },

  amber: {
    bg: 'bg-amber/20',
    text: 'text-ink',
    ring: 'hover:border-amber/60',
    gradient: 'from-amber to-amber-dark',
  },
}

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon
  const accent = ACCENTS[service.accent]

  const cardRef = useRef(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springConfig = {
    damping: 20,
    stiffness: 300,
  }

  const smoothRotateX = useSpring(
    rotateX,
    springConfig
  )

  const smoothRotateY = useSpring(
    rotateY,
    springConfig
  )

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect =
      cardRef.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rY =
      ((mouseX / rect.width) - 0.5) * 8

    const rX =
      ((mouseY / rect.height) - 0.5) * -8

    rotateX.set(rX)
    rotateY.set(rY)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const glowClass =
    service.accent === 'teal'
      ? 'hover:shadow-glow-teal'
      : service.accent === 'coral'
        ? 'hover:shadow-glow-coral'
        : 'hover:shadow-glow-amber'

  return (
    <div className="perspective-container">

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }

        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}

        whileHover={{
          y: -8,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}

        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
        }}

        className={`group glass card-inner-light border border-ink/10 rounded-2xl p-8 transition-all duration-300 shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-ink/10 ${accent.ring} ${glowClass} relative overflow-hidden`}
      >

        <a
          href={service.href}
          className="absolute inset-0 z-20 rounded-2xl focus-ring"
          aria-label={`Learn more about ${service.title}`}
        />

        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accent.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${accent.bg} shadow-premium ring-1 ring-white/50 relative`}
        >
          <Icon
            className={`w-5 h-5 ${accent.text}`}
            strokeWidth={2}
          />
        </div>

        <h3 className="font-display font-semibold text-xl mb-2">
          {service.title}
        </h3>

        <p className="text-ink/60 text-sm mb-6 leading-relaxed">
          {service.desc}
        </p>

        <ul className="space-y-2.5">

          {service.items.map(
            (item, itemIndex) => (
              <motion.li
                key={item}

                initial={{
                  opacity: 0,
                  x: -10,
                }}

                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }

                transition={{
                  delay:
                    index * 0.1 +
                    0.05 * itemIndex,
                }}

                className="flex items-start gap-2.5 text-sm text-ink/75"
              >
                <Check
                  className={`w-4 h-4 mt-0.5 shrink-0 ${accent.text}`}
                  strokeWidth={2.5}
                />

                <span>{item}</span>
              </motion.li>
            )
          )}

        </ul>

      </motion.div>

    </div>
  )
}

export default function Services() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      <div className="section-divider" />

      <section
        id="services"
        className="py-20 md:py-28 relative overflow-hidden"
      >

        <div className="absolute inset-0 -z-10">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal/5 via-transparent to-transparent blur-3xl" />

          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-coral/5 via-transparent to-transparent blur-3xl" />

        </div>

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            ref={ref}

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }

            transition={{
              duration: 0.6,
            }}
          >

            <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20 shimmer">
              Services
            </p>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl leading-[1.1] mb-14">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
                get found
              </span>{' '}
              and stay responsive.
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">

            {SERVICES.map(
              (service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  inView={inView}
                />
              )
            )}

          </div>

          <div className="mt-16">

            <p className="font-mono text-xs uppercase tracking-widest text-coral-dark mb-4">
              Industries
            </p>

            <h3 className="font-display font-semibold text-2xl mb-3">
              Websites built for your type of business
            </h3>

            <p className="text-ink/60 max-w-2xl mb-7">
              Explore industry-specific website solutions designed around the
              needs of local businesses.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

              {INDUSTRIES.map(
                (industry) => (
                  <a
                    key={industry.href}
                    href={industry.href}
                    className="group rounded-xl border border-ink/10 bg-white/70 px-5 py-4 hover:border-teal/30 hover:shadow-md transition-all"
                  >

                    <div className="flex items-center justify-between gap-4">

                      <span className="text-sm font-medium">
                        {industry.label}
                      </span>

                      <span className="text-ink/30 group-hover:text-teal transition-colors">
                        →
                      </span>

                    </div>

                    <p className="text-xs text-ink/50 mt-2 leading-relaxed">
                      {industry.description}
                    </p>

                  </a>
                )
              )}

            </div>

          </div>

        </div>

      </section>
    </>
  )
}
// components/Portfolio.jsx
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useState } from 'react'
import restaurantPreview from './preview/restaurant.png'
import salonPreview from './preview/salon.png'

const PROJECTS = [
  {
    title: 'Restaurant Website',
    tag: 'Live',
    desc: 'Full menu, online ordering and reservations for a local restaurant.',
    ready: true,
    link: 'https://ember-and-bloom-cafe-4qdua24xa-mustufa842s-projects.vercel.app/',
    screenshot: restaurantPreview,
  },
  {
    title: 'Salon',
    tag: 'Live',
    ready: true,
    desc: 'Full-stack booking platform for a luxury salon — ASP.NET Core + SQL Server backend, live admin dashboard, and a public site with real-time booking and email confirmations, deployed free on Azure and Cloudflare.',
    link: 'https://maison-elegance-frontend.mustufaaijaz1234.workers.dev/',
    screenshot: salonPreview,
  },
  { title: 'Dental Clinic', tag: 'Live', ready: true, desc: 'Modern dental clinic website with online appointment booking and patient portal.', link: 'https://aurelia-dental.mustufaaijaz1234.workers.dev/', screenshot: DentalPreview },
  { title: 'Gym Website', tag: 'Coming Soon', ready: false },
  { title: 'Law Firm', tag: 'Coming Soon', ready: false },


function BrowserTabPreview({ url, title, screenshot }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className="w-full h-full flex flex-col">
      {/* fake browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-ink/[0.04] border-b border-ink/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 ml-2 px-2.5 py-1 rounded-md bg-white/70 border border-ink/10 truncate">
          <span className="font-mono text-[10px] text-ink/40 truncate">
            {url.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </div>

      {/* screenshot area */}
      <div className="relative flex-1 overflow-hidden bg-white">
        {!loaded && !errored && screenshot && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal/[0.08] to-amber/[0.06] shimmer">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30 animate-pulse-subtle">
              Loading preview…
            </span>
          </div>
        )}

        {screenshot && !errored && (
          <img
            src={screenshot}
            alt={`Preview of ${title}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {(!screenshot || errored) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal/5 to-transparent">
            <span className="font-display font-bold text-2xl text-teal-dark/70">
              {title}
            </span>
          </div>
        )}

        {/* subtle gradient overlay so text/badges above stay readable if placed on top */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </div>
  )
}

function ProjectCard({ p, index, inView }) {
  const cardRef = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springConfig = { damping: 20, stiffness: 300 }
  const smoothRotateX = useSpring(rotateX, springConfig)
  const smoothRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e) => {
    if (!p.ready || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const rY = ((mouseX / width) - 0.5) * 8 // max 4 degrees
    const rX = ((mouseY / height) - 0.5) * -8 // max -4 degrees
    rotateX.set(rX)
    rotateY.set(rY)
  }

  const handleMouseLeave = () => {
    if (!p.ready) return
    rotateX.set(0)
    rotateY.set(0)
  }

  const cardContent = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={p.ready ? { 
        y: -8,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {}}
      style={p.ready ? { rotateX: smoothRotateX, rotateY: smoothRotateY } : {}}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
        p.ready 
          ? 'border border-ink/10 bg-white/80 backdrop-blur-xl shadow-lg shadow-ink/5 hover:shadow-xl hover:shadow-ink/10 card-inner-light' 
          : 'border border-dashed border-ink/10 hover:border-ink/20 bg-white/30 backdrop-blur-sm'
      }`}
    >
      <div className={`aspect-[4/3] flex items-center justify-center relative ${
        p.ready ? '' : 'bg-ink/[0.02]'
      }`}>
        {!p.ready && (
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink/30 animate-pulse-subtle">
            Preview coming soon
          </span>
        )}
        {p.ready && p.link && (
          <BrowserTabPreview url={p.link} title={p.title} screenshot={p.screenshot} />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="font-semibold">{p.title}</h3>
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
              p.ready 
                ? 'bg-gradient-to-r from-teal/15 to-teal/5 text-teal-dark status-live' 
                : 'bg-ink/5 text-ink/40'
            }`}
          >
            {p.tag}
          </span>
        </div>
        {p.ready && <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>}
      </div>
    </motion.div>
  )

  if (p.ready && p.link) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-pointer"
        aria-label={`Open ${p.title} project`}
      >
        <div className="perspective-container h-full">{cardContent}</div>
      </a>
    )
  }

  if (p.ready) {
    return <div className="perspective-container h-full">{cardContent}</div>
  }

  return cardContent
}

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <>
      <div className="section-divider" />
      <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-teal/[0.02] to-white" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-teal-dark mb-4 inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20 shimmer">
              Portfolio
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl leading-[1.1] mb-14">
              Real work, <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">real industries</span>.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, index) => (
              <ProjectCard key={p.title} p={p} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
// components/Footer.jsx
import { Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

const LINKS = [
  { icon: Mail, label: 'Email', href: 'mailto:techlearn.908@gmail.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustufa-aijaz-03b672351/' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Mustufa842' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/03302753975' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 py-16 bg-white/40 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 -z-10" />
      <div className="section-divider absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <div className="group cursor-pointer">
          <p className="font-display font-bold text-xl relative inline-block">
            Tech Web Studio<span className="text-teal">.</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-bottom-right scale-x-0 bg-gradient-to-r from-teal to-coral transition-transform duration-300 ease-out group-hover:origin-bottom-left group-hover:scale-x-100" />
          </p>
        </div>

        <ul className="flex items-center gap-4">
          {LINKS.map((l, i) => {
            const Icon = l.icon
            return (
              <motion.li 
                key={l.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-ink/15 text-ink/50 bg-white/50 focus-ring group transition-all duration-300 ease-premium hover:text-ink hover:border-transparent hover:shadow-premium hover:scale-110 hover:bg-gradient-to-br hover:from-teal/10 hover:to-coral/10"
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                </a>
              </motion.li>
            )
          })}
        </ul>

        <p className="text-xs text-ink/40 tracking-wide">&copy; {new Date().getFullYear()} Tech Web Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
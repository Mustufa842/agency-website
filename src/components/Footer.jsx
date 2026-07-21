import { Mail, MessageCircle } from 'lucide-react'

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
  { icon: Mail, label: 'Email', href: 'mailto:hello@youragency.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/yourusername' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/00000000000' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display font-bold text-lg">
         Tech Web Studio<span className="text-teal">.</span>
        </p>

        <ul className="flex items-center gap-5">
          {LINKS.map((l) => {
            const Icon = l.icon
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-ink/15 text-ink/60 hover:text-ink hover:border-ink/30 transition-colors focus-ring"
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </a>
              </li>
            )
          })}
        </ul>

       <p className="text-xs text-ink/40">&copy; {new Date().getFullYear()} Tech Web Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

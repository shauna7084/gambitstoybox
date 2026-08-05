import { useState } from 'react'
import { logoLockup } from '../data/images'

interface WindowWithKlaviyo extends Window {
  klaviyo?: Array<unknown> & {
    push: (args: [string, Record<string, string>]) => void
  }
}

interface FooterProps {
  className?: string
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gambits.toy.box/?hl=en',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm9.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/GambitsToyBoxLLC/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/discover/gambits-toy-box',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M16.6 2h-2.95v13.45a2.55 2.55 0 1 1-2.55-2.55V9.9a5.5 5.5 0 1 0 5.5 5.5V7.6A7.4 7.4 0 0 0 19 8.2V5.35a4.6 4.6 0 0 1-2.4-.65V2Z" />
      </svg>
    ),
  },
]

const footerLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Visit', href: '#visit' },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Footer({ className = '' }: FooterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValid) {
      setStatus('error')
      return
    }

    if (typeof window !== 'undefined' && (window as WindowWithKlaviyo).klaviyo) {
      const klaviyo = (window as WindowWithKlaviyo).klaviyo!
      klaviyo.push(['identify', {
        '$email': email,
        'site_source': 'gambitstoybox',
      }])
      klaviyo.push(['subscribe', {
        'list_id': 'WReMxa',
        '$email': email,
      }])
    }

    setStatus('success')
    setEmail('')
  }

  return (
    <footer
      id="footer"
      className={`relative overflow-hidden border-t border-[#ff2a6d]/30 bg-[#0a0a12] pt-16 pb-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff2a6d] to-[#ffea00] shadow-[0_0_20px_rgba(255,42,109,0.6)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-3">
              <img
                src={logoLockup}
                alt=""
                className="h-12 w-auto rounded-md object-contain"
                loading="lazy"
              />
              <span
                className="text-3xl font-black uppercase tracking-tighter text-[#fff8e7]"
                style={{
                  textShadow: '0 0 14px #00f0ff, 0 0 28px #ff2a6d',
                }}
              >
                G<span style={{ textShadow: '0 0 7px #00f0ff, 0 0 14px rgba(0,240,255,0.6)' }}>a</span>mbit&apos;s Toy<span style={{ textShadow: '0 0 7px #ff2a6d, 0 0 14px rgba(255,42,109,0.6)' }}>b</span>ox
              </span>
            </a>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-[#fff8e7]/80">
              A neon-lit temple of vintage toys, retro games, and Route 66 roadside magic in Bethany, Oklahoma.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00f0ff]/40 text-[#00f0ff] transition hover:scale-110 hover:bg-[#00f0ff] hover:text-[#0a0a12] hover:shadow-[0_0_18px_rgba(0,240,255,0.5)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-lg font-black uppercase tracking-wide text-[#ffea00]">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-[#fff8e7]/80 transition hover:pl-2 hover:text-[#00f0ff]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-lg font-black uppercase tracking-wide text-[#ff2a6d]">
              Newsletter
            </h4>
            <p className="mt-3 text-base text-[#fff8e7]/80">
              Get the drop on new arrivals, secret sales, and retro events before anyone else.
            </p>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  placeholder="your@email.com"
                  aria-label="Email address for newsletter"
                  className="flex-1 rounded-full border border-[#00f0ff]/40 bg-[#1a1a24] px-5 py-3 text-[#fff8e7] placeholder:text-[#fff8e7]/40 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/30"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#ff2a6d] px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_18px_rgba(255,42,109,0.4)] transition hover:-translate-y-0.5 hover:bg-[#ff2a6d]/90 hover:shadow-[0_0_28px_rgba(255,42,109,0.6)]"
                >
                  Join
                </button>
              </div>
              {status === 'success' && (
                <p className="mt-3 text-sm font-bold text-[#00f0ff]">
                  You are in! Watch your inbox for toy-drop alerts.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-sm font-bold text-[#ff2a6d]">
                  Please enter a valid email address.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#fff8e7]/10 pt-8 sm:flex-row">
          <p className="text-sm text-[#fff8e7]/50">
            © {new Date().getFullYear()} Gambit&apos;s Toybox. All rights reserved.
          </p>
          <p className="text-sm text-[#fff8e7]/50">
            Made with neon, nostalgia, and a little bit of pixie dust.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </footer>
  )
}

export default Footer

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { logoLockup } from '../data/images'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose?: () => void) {
  e.preventDefault()
  onClose?.()

  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#00f0ff]/20 bg-[#0a0a12]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          onClick={(e) => handleNav(e, '#')}
          className="group relative flex items-center gap-3 font-black uppercase tracking-tight"
        >
          <img
            src={logoLockup}
            alt=""
            className="h-10 w-auto rounded-md object-contain sm:h-12"
            loading="eager"
          />
          <span className="sr-only">Gambit&apos;s Toy Box</span>
          <span
            className="hidden text-xl sm:inline-block sm:text-2xl"
            style={{
              color: '#00f0ff',
              textShadow:
                '0 0 4px #00f0ff, 0 0 10px rgba(0,240,255,0.75), 0 0 22px rgba(0,240,255,0.35)',
            }}
          >
            G<span style={{ textShadow: '0 0 2px #00f0ff, 0 0 5px rgba(0,240,255,0.75), 0 0 11px rgba(0,240,255,0.35)' }}>a</span>mbit&apos;s
          </span>
          <span
            className="hidden text-xl sm:inline-block sm:text-2xl"
            style={{
              color: '#ff2a6d',
              textShadow:
                '0 0 4px #ff2a6d, 0 0 10px rgba(255,42,109,0.75), 0 0 22px rgba(255,42,109,0.35)',
            }}
          >
            Toy <span style={{ textShadow: '0 0 2px #ff2a6d, 0 0 5px rgba(255,42,109,0.75), 0 0 11px rgba(255,42,109,0.35)' }}>B</span>ox
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm font-semibold uppercase tracking-widest text-[#fff8e7]/80 transition-colors duration-300 hover:text-[#00f0ff]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#visit"
              onClick={(e) => handleNav(e, '#visit')}
              className="rounded-full border border-[#ff2a6d] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#ff2a6d] transition-all duration-300 hover:bg-[#ff2a6d] hover:text-[#0a0a12] hover:shadow-[0_0_20px_rgba(255,42,109,0.5)]"
            >
              Plan Your Visit
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#fff8e7] transition-colors hover:text-[#00f0ff] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-[#00f0ff]/20 bg-[#0a0a12]/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-2 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href, () => setOpen(false))}
                  className="block py-3 text-base font-semibold uppercase tracking-widest text-[#fff8e7]/80 transition-colors hover:text-[#00f0ff]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#visit"
                onClick={(e) => handleNav(e, '#visit', () => setOpen(false))}
                className="block rounded-full bg-[#ff2a6d] px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-[#0a0a12] shadow-[0_0_20px_rgba(255,42,109,0.45)]"
              >
                Plan Your Visit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

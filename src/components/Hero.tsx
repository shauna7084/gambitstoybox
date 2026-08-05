import { Nav } from './Nav'
import { MapPin, Calendar, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a12]">
      <Nav />

      {/* Background: glowing storefront window grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00f0ff 1px, transparent 1px), linear-gradient(to bottom, #ff2a6d 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse at 50% 40%, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 50% 40%, black 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0,240,255,0.25) 0%, rgba(255,42,109,0.18) 45%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-60"
          style={{ boxShadow: '0 0 24px #00f0ff' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff2a6d] to-transparent opacity-60"
          style={{ boxShadow: '0 0 24px #ff2a6d' }}
        />
      </div>

      {/* Toy-shelf pixel rhythm decorations */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-8 top-1/4 flex flex-col gap-3 opacity-40">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-sm"
              style={{
                backgroundColor: i % 2 === 0 ? '#00f0ff' : '#ff2a6d',
                boxShadow: `0 0 12px ${i % 2 === 0 ? '#00f0ff' : '#ff2a6d'}`,
              }}
            />
          ))}
        </div>
        <div className="absolute right-8 top-1/3 flex flex-col gap-3 opacity-40">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-sm"
              style={{
                backgroundColor: i % 2 === 0 ? '#ff2a6d' : '#00f0ff',
                boxShadow: `0 0 12px ${i % 2 === 0 ? '#ff2a6d' : '#00f0ff'}`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Route 66 badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#ffea00]/40 bg-[#ffea00]/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#ffea00]">
              Route 66
            </span>
            <span className="h-1 w-1 rounded-full bg-[#ffea00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fff8e7]/80">
              Bethany, Oklahoma
            </span>
          </div>

          {/* Neon logo treatment */}
          <h1 className="mb-4 select-none">
            <span
              className="block font-black uppercase tracking-tighter sm:tracking-[-0.04em]"
              style={{
                fontSize: 'clamp(3rem, 12vw, 8.5rem)',
                lineHeight: 0.9,
                color: '#00f0ff',
                textShadow:
                  '0 0 6px #00f0ff, 0 0 16px rgba(0,240,255,0.75), 0 0 32px rgba(0,240,255,0.35)',
              }}
            >
              G<span style={{ textShadow: '0 0 3px #00f0ff, 0 0 8px rgba(0,240,255,0.75), 0 0 16px rgba(0,240,255,0.35)' }}>a</span>mbit&apos;s
            </span>
            <span
              className="block font-black uppercase tracking-tighter sm:tracking-[-0.04em]"
              style={{
                fontSize: 'clamp(3rem, 12vw, 8.5rem)',
                lineHeight: 0.9,
                color: '#ff2a6d',
                textShadow:
                  '0 0 6px #ff2a6d, 0 0 16px rgba(255,42,109,0.75), 0 0 32px rgba(255,42,109,0.35)',
              }}
            >
              Toy <span style={{ textShadow: '0 0 3px #ff2a6d, 0 0 8px rgba(255,42,109,0.75), 0 0 16px rgba(255,42,109,0.35)' }}>B</span>ox
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-[#fff8e7]/85 sm:text-xl sm:leading-relaxed">
            A retro wonderland packed with vintage toys, classic action figures,
            LEGO masterpieces, and the kind of neon-soaked nostalgia that only
            Route 66 can deliver.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#visit"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#ff2a6d] px-8 py-4 text-base font-black uppercase tracking-widest text-[#0a0a12] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,42,109,0.6)]"
            >
              <span className="relative z-10">Plan Your Visit</span>
              <MapPin className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-[#fff8e7] transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/60 px-8 py-4 text-base font-black uppercase tracking-widest text-[#00f0ff] transition-all duration-300 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)]"
            >
              Explore the Collection
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-[#fff8e7]/70 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              <Calendar className="h-4 w-4 text-[#00f0ff]" />
              Open 7 Days
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              <MapPin className="h-4 w-4 text-[#ff2a6d]" />
              Bethany, OK on Route 66
            </div>
          </div>
        </div>

        <a
          href="#shop"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#fff8e7]/50 transition-colors hover:text-[#00f0ff]"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  )
}

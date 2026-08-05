import { useEffect, useState } from 'react'
import { Gamepad2, MapPin, Sparkles, Star } from 'lucide-react'
import { retroGameRoom } from '../data/images'

interface Hours {
  open?: string
  close?: string
  closed?: boolean
}

const hours: Record<string, Hours> = {
  Sunday: { open: '1:00 PM', close: '5:00 PM' },
  Monday: { closed: true },
  Tuesday: { closed: true },
  Wednesday: { open: '1:00 PM', close: '7:00 PM' },
  Thursday: { open: '1:00 PM', close: '7:00 PM' },
  Friday: { open: '1:00 PM', close: '7:00 PM' },
  Saturday: { open: '11:00 AM', close: '7:00 PM' },
}

function parseTime(timeStr: string): number {
  const [time, modifier] = timeStr.split(' ')
  let [h, minutes] = time.split(':').map(Number)
  if (modifier === 'PM' && h !== 12) h += 12
  if (modifier === 'AM' && h === 12) h = 0
  return h + (minutes || 0) / 60
}

function getOpenStatus(): { label: string; color: 'cyan' | 'magenta' | 'yellow' } {
  const now = new Date()
  const days = Object.keys(hours)
  const dayIndex = now.getDay()
  const dayKey = days[dayIndex]
  const today = hours[dayKey]
  const currentHour = now.getHours() + now.getMinutes() / 60

  if (today?.closed) {
    for (let i = 1; i <= 7; i++) {
      const idx = (dayIndex + i) % 7
      const nextDay = days[idx]
      const next = hours[nextDay]
      if (!next.closed && next.open) {
        return { label: `OPEN SOON — ${nextDay} ${next.open}`, color: 'yellow' }
      }
    }
    return { label: 'OPEN SOON', color: 'yellow' }
  }

  if (!today?.open || !today?.close) {
    return { label: 'OPEN SOON', color: 'yellow' }
  }

  const openNum = parseTime(today.open)
  const closeNum = parseTime(today.close)

  if (currentHour >= openNum && currentHour < closeNum) {
    return { label: `OPEN NOW — until ${today.close}`, color: 'cyan' }
  }

  if (currentHour < openNum) {
    return { label: `OPEN SOON — today ${today.open}`, color: 'yellow' }
  }

  for (let i = 1; i <= 7; i++) {
    const idx = (dayIndex + i) % 7
    const nextDay = days[idx]
    const next = hours[nextDay]
    if (!next.closed && next.open) {
      return { label: `OPEN SOON — ${nextDay} ${next.open}`, color: 'yellow' }
    }
  }

  return { label: 'OPEN SOON', color: 'yellow' }
}

export function About() {
  const [status, setStatus] = useState<{ label: string; color: 'cyan' | 'magenta' | 'yellow' }>({
    label: 'Open Daily',
    color: 'magenta',
  })

  useEffect(() => {
    setStatus(getOpenStatus())
    const timer = setInterval(() => setStatus(getOpenStatus()), 60000)
    return () => clearInterval(timer)
  }, [])

  const colorClasses = {
    cyan: 'border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.4)]',
    magenta: 'border-[#ff2a6d] text-[#ff2a6d] shadow-[0_0_20px_rgba(255,42,109,0.4)]',
    yellow: 'border-[#ffea00] text-[#ffea00] shadow-[0_0_20px_rgba(255,234,0,0.4)]',
  }

  const shelfTags = [
    'Route 66',
    'Vintage Toys',
    'Arcade Glow',
    'Bethany, OK',
    'Collectibles',
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a12] py-24 sm:py-32"
    >
      {/* Pixel-confetti wallpaper */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(#00f0ff 1.5px, transparent 1.5px), radial-gradient(#ff2a6d 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Marquee shelf of retro badges */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {shelfTags.map((tag, i) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-2 rounded-full border bg-[#0a0a12] px-4 py-1.5 text-xs font-black uppercase tracking-widest ${
                i % 2 === 0
                  ? 'border-[#00f0ff] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.35)]'
                  : 'border-[#ff2a6d] text-[#ff2a6d] shadow-[0_0_12px_rgba(255,42,109,0.35)]'
              }`}
            >
              <Star className="h-3 w-3 fill-current" />
              {tag}
            </span>
          ))}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story text */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-[#fff8e7] sm:text-5xl lg:text-6xl">
              Where{' '}
              <span
                className="inline-block text-[#00f0ff]"
                style={{ textShadow: '0 0 22px rgba(0,240,255,0.65)' }}
              >
                Route 66
              </span>{' '}
              meets the{' '}
              <span
                className="inline-block text-[#ff2a6d]"
                style={{ textShadow: '0 0 22px rgba(255,42,109,0.65)' }}
              >
                toy aisle
              </span>
              .
            </h2>

            <div className="space-y-4 text-[17px] leading-relaxed text-[#fff8e7]/80">
              <p>
                Gambit&apos;s Toy Box started as a wild idea under the neon glow
                of an old Bethany sign: what if a roadside stop could feel like
                the best Saturday morning of your childhood?
              </p>
              <p>
                We fill our shelves with the stuff that made growing up epic —
                action figures still in their blisters, LEGO sets waiting to be
                built, cartridges that demand a quick blow into the slot, and
                Route 66 souvenirs that prove you stopped somewhere magical.
              </p>
              <p>
                Every aisle is a time machine. Every find is a high-score.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-[#ffea00]/30 bg-[#1a1a24] p-4">
                <MapPin className="h-6 w-6 text-[#ffea00]" />
                <div>
                  <p className="text-sm font-bold text-[#fff8e7]">
                    Bethany, Oklahoma
                  </p>
                  <p className="text-xs text-[#fff8e7]/60">
                    Right on Route 66
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-[#00f0ff]/30 bg-[#1a1a24] p-4">
                <Gamepad2 className="h-6 w-6 text-[#00f0ff]" />
                <div>
                  <p className="text-sm font-bold text-[#fff8e7]">
                    Playtested & Approved
                  </p>
                  <p className="text-xs text-[#fff8e7]/60">
                    By kids & grown-up kids
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo frame with neon glow */}
          <div className="relative">
            <div className="relative rotate-1 rounded-2xl border-4 border-[#00f0ff] bg-[#0a0a12] p-2 shadow-[0_0_45px_rgba(0,240,255,0.25)] transition-transform duration-300 hover:rotate-0">
              <img
                src={retroGameRoom}
                alt="Retro game lounge corner at Gambit's Toy Box"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />

              <button
                onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
                className={`absolute -bottom-4 -right-4 cursor-pointer rounded-full border-2 bg-[#0a0a12] px-5 py-3 transition hover:scale-105 ${colorClasses[status.color]}`}
              >
                <span className="font-black uppercase tracking-widest">
                  {status.label}
                </span>
              </button>
            </div>

            {/* Floating toy tag */}
            <div className="absolute -left-6 top-1/4 hidden rounded-lg border border-[#ffea00] bg-[#1a1a24] px-3 py-2 text-[#ffea00] shadow-lg lg:block">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

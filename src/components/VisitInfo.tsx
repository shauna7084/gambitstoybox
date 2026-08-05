import { useEffect, useState } from 'react'
import { bethanyRoute66Shield } from '@/data/images'

interface WindowWithKlaviyo extends Window {
  klaviyo?: Array<unknown> & {
    push: (args: [string, Record<string, string>]) => void
  }
}

interface Hours {
  open?: string
  close?: string
  closed?: boolean
}

interface VisitInfoProps {
  className?: string
  address?: string
  phone?: string
  hours?: Record<string, Hours>
}

const defaultAddress = "6708 NW 39th Expy\nBethany, OK 73008\nLook for the neon sign — you can't miss it!"
const defaultPhone = '405-225-TOYS'

const defaultHours: Record<string, Hours> = {
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
  let [hours, minutes] = time.split(':').map(Number)
  if (modifier === 'PM' && hours !== 12) hours += 12
  if (modifier === 'AM' && hours === 12) hours = 0
  return hours + (minutes || 0) / 60
}

function getNextOpenDay(
  todayIndex: number,
  hours: Record<string, Hours>
): { day: string; open: string } | null {
  const days = Object.keys(hours)
  for (let i = 1; i <= 7; i++) {
    const idx = (todayIndex + i) % 7
    const day = days[idx]
    if (hours[day] && !hours[day].closed && hours[day].open) {
      return { day, open: hours[day].open }
    }
  }
  return null
}

export function VisitInfo({
  className = '',
  address = defaultAddress,
  phone = defaultPhone,
  hours = defaultHours,
}: VisitInfoProps) {
  const [openStatus, setOpenStatus] = useState<string>('')
  const [todayKey, setTodayKey] = useState<string>('')

  useEffect(() => {
    const now = new Date()
    const days = Object.keys(hours)
    const dayIndex = now.getDay()
    const dayKey = days[dayIndex]
    setTodayKey(dayKey)

    const currentHour = now.getHours() + now.getMinutes() / 60
    const todayHours = hours[dayKey]

    if (todayHours?.closed) {
      const next = getNextOpenDay(dayIndex, hours)
      setOpenStatus(
        next
          ? `Closed today — opens ${next.day} at ${next.open}`
          : 'Closed today'
      )
      return
    }

    const { open, close } = todayHours || {}
    if (!open || !close) {
      setOpenStatus('Closed today')
      return
    }

    const openNum = parseTime(open)
    const closeNum = parseTime(close)

    if (currentHour >= openNum && currentHour < closeNum) {
      setOpenStatus(`OPEN NOW until ${close}`)
    } else if (currentHour < openNum) {
      setOpenStatus(`Opens today at ${open}`)
    } else {
      const next = getNextOpenDay(dayIndex, hours)
      setOpenStatus(
        next
          ? `Closed — opens ${next.day} at ${next.open}`
          : 'Closed now'
      )
    }
  }, [hours])

  const mapEmbedUrl =
    'https://www.google.com/maps?q=6708+NW+39th+Expy,Bethany,OK+73008&z=17&output=embed'
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=6708+NW+39th+Expy,Bethany,OK+73008'

  return (
    <section
      id="visit"
      className={`relative overflow-hidden bg-[#0a0a12] py-20 lg:py-28 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#00f0ff] blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#ff2a6d] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full border border-[#00f0ff] px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.5)]">
            Road-Trip Destination
          </span>
          <h2
            className="text-5xl font-black uppercase tracking-tighter text-[#fff8e7] sm:text-6xl lg:text-7xl"
            style={{
              textShadow: '0 0 18px #00f0ff, 0 0 36px #ff2a6d',
            }}
          >
            Come Find Us
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#fff8e7]/80 sm:text-xl">
            We are impossible to miss — just follow the glow on Historic Route 66.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="relative w-56 rotate-[-2deg] transform drop-shadow-[0_0_25px_rgba(255,42,109,0.6)] transition hover:rotate-0 hover:scale-105 sm:w-64">
            <img
              src={bethanyRoute66Shield}
              alt="Bethany Route 66 shield sign"
              className="w-full rounded-xl"
            />
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#00f0ff]/40 bg-[#1a1a24] p-6 shadow-[0_0_20px_rgba(0,240,255,0.15)] transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]">
              <h3 className="mb-3 text-xl font-black uppercase tracking-wide text-[#00f0ff]">
                Address
              </h3>
              <address className="not-italic text-lg leading-relaxed whitespace-pre-line text-[#fff8e7]">
                {address}
              </address>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border-2 border-[#ffea00] px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#ffea00] transition hover:bg-[#ffea00] hover:text-[#0a0a12]"
              >
                Get Directions
              </a>
            </div>

            <div className="rounded-2xl border border-[#ff2a6d]/40 bg-[#1a1a24] p-6 shadow-[0_0_20px_rgba(255,42,109,0.15)] transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,42,109,0.25)]">
              <h3 className="mb-3 text-xl font-black uppercase tracking-wide text-[#ff2a6d]">
                Hours
              </h3>
              <div className="mb-4 inline-block rounded-full bg-[#ff2a6d]/20 px-3 py-1 text-sm font-black uppercase tracking-wider text-[#ff2a6d]">
                {openStatus}
              </div>
              <ul className="space-y-2 text-base text-[#fff8e7]">
                {Object.entries(hours).map(([day, info]) => (
                  <li
                    key={day}
                    className={`flex justify-between ${day === todayKey ? 'font-bold text-[#00f0ff]' : 'text-[#fff8e7]/80'}`}
                  >
                    <span>{day}</span>
                    <span>
                      {info.closed ? (
                        <span className="text-[#fff8e7]/50">Closed</span>
                      ) : (
                        `${info.open} – ${info.close}`
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#ffea00]/40 bg-[#1a1a24] p-6 shadow-[0_0_20px_rgba(255,234,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,234,0,0.25)] sm:col-span-2 lg:col-span-1">
              <h3 className="mb-3 text-xl font-black uppercase tracking-wide text-[#ffea00]">
                Phone
              </h3>
              <a
                href="tel:+14052258697"
                className="block text-2xl font-black text-[#fff8e7] transition hover:text-[#00f0ff]"
              >
                {phone}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-[#fff8e7]/70">
                Call ahead to check stock, ask about trade-ins, or reserve the rare piece you have been hunting for.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] lg:mt-14">
          <div className="aspect-video w-full">
            <iframe
              src={mapEmbedUrl}
              title="Gambit's Toybox location"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div
          id="contact"
          className="mt-16 rounded-3xl border border-[#ff2a6d]/40 bg-[#1a1a24] p-8 shadow-[0_0_30px_rgba(255,42,109,0.12)] sm:p-10 lg:mt-20"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3
                className="text-3xl font-black uppercase tracking-tighter text-[#fff8e7] sm:text-4xl"
                style={{
                  textShadow: '0 0 14px #00f0ff, 0 0 28px #ff2a6d',
                }}
              >
                Get In Touch
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-[#fff8e7]/80">
                Questions about stock, trades, or planning a Route 66 pit stop? Send a message and we will get back to you before the next high-score.
              </p>

              <div className="mt-6 space-y-3 text-[#fff8e7]">
                <a
                  href="tel:+14052258697"
                  className="flex items-center gap-3 transition hover:text-[#00f0ff]"
                >
                  <span className="text-[#ffea00]">Phone:</span>
                  <span className="font-bold">{phone}</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="text-[#ffea00]">Address:</span>
                  <address className="not-italic font-bold whitespace-pre-line">
                    {address}
                  </address>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                const name = String(formData.get('name') || '').trim()
                const email = String(formData.get('email') || '').trim()
                const message = String(formData.get('message') || '').trim()
                const subscribe = formData.get('subscribe') === 'on'

                if (subscribe && email && typeof window !== 'undefined' && (window as WindowWithKlaviyo).klaviyo) {
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

                const subject = encodeURIComponent('Message from GambitsToybox.com')
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`
                )
                window.location.href = `mailto:andrew.doncoxinsurance@yahoo.com?subject=${subject}&body=${body}`
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  aria-label="Your name"
                  className="rounded-xl border border-[#00f0ff]/40 bg-[#0a0a12] px-4 py-3 text-[#fff8e7] placeholder:text-[#fff8e7]/40 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/30"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  aria-label="Your email"
                  className="rounded-xl border border-[#00f0ff]/40 bg-[#0a0a12] px-4 py-3 text-[#fff8e7] placeholder:text-[#fff8e7]/40 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/30"
                />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="What are you hunting for?"
                aria-label="Your message"
                className="w-full rounded-xl border border-[#00f0ff]/40 bg-[#0a0a12] px-4 py-3 text-[#fff8e7] placeholder:text-[#fff8e7]/40 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/30"
              />

              <p className="text-sm leading-relaxed text-[#ffea00]/90">
                For the fastest reply, give us a call at {phone}. Email is checked less frequently, so a quick ring is the better way to reach us.
              </p>

              <label className="flex cursor-pointer items-start gap-3 text-[#fff8e7]/90">
                <input
                  type="checkbox"
                  name="subscribe"
                  className="mt-1 h-4 w-4 rounded border-[#00f0ff]/40 bg-[#0a0a12] text-[#ff2a6d] focus:ring-[#ff2a6d] focus:ring-offset-0"
                />
                <span className="text-sm">Subscribe to our email list for toy drops, events, and secret sales.</span>
              </label>

              <button
                type="submit"
                className="rounded-full bg-[#ff2a6d] px-8 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_18px_rgba(255,42,109,0.4)] transition hover:-translate-y-0.5 hover:bg-[#ff2a6d]/90 hover:shadow-[0_0_28px_rgba(255,42,109,0.6)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitInfo

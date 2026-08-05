import { useState } from 'react'
import { ChevronDown, CircleHelp } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'Do you buy or trade toys?',
    a: 'Yes — bring in your vintage toys, action figures, games, and collectibles. We offer cash or store credit, and we love a good trade.',
  },
  {
    q: 'Is everything in the shop vintage?',
    a: 'Mostly, but we also stock retro-inspired new items, arcade cabinets, and a few modern collectibles that fit the vibe.',
  },
  {
    q: 'Can I call ahead to check stock?',
    a: 'Absolutely. Dial 405-225-TOYS and we will check the shelf for the piece you are hunting.',
  },
  {
    q: 'Collectors note',
    a: 'Our inventory turns fast. If you see something you love, grab it — the next traveler down Route 66 probably wants it too.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2)

  return (
    <section id="faq" className="relative bg-[#0a0a12] py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-center gap-3 text-center">
          <CircleHelp className="h-6 w-6 text-[#ffea00]" />
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#fff8e7] sm:text-4xl">
            Quick Answers
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition ${isOpen ? 'border-[#00f0ff] bg-[#1a1a24] shadow-[0_0_20px_rgba(0,240,255,0.15)]' : 'border-[#fff8e7]/10 bg-[#1a1a24]/60 hover:border-[#fff8e7]/30'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                >
                  <span className="text-lg font-bold text-[#fff8e7] sm:text-xl">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#00f0ff] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="leading-relaxed text-[#fff8e7]/80">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ

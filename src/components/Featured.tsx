import { ArrowRight, Gamepad2, Puzzle, Route, Star } from 'lucide-react'
import { storefrontNight, toyShelves, retroGameRoom, storefrontDay } from '../data/images'

const collections = [
  {
    title: 'Action Figures',
    description:
      'Heroes, villains, and everything in between — still ready for adventure.',
    color: '#00f0ff',
    icon: Star,
    image: storefrontNight,
  },
  {
    title: 'LEGO Bricks',
    description:
      'Build worlds brick by brick, from classic sets to hard-to-find minifigs.',
    color: '#ffea00',
    icon: Puzzle,
    image: toyShelves,
  },
  {
    title: 'Retro Games',
    description:
      'Cartridges, consoles, and the kind of pixelated joy that never gets old.',
    color: '#ff2a6d',
    icon: Gamepad2,
    image: retroGameRoom,
  },
  {
    title: 'Route 66 Souvenirs',
    description:
      'Take home a piece of the Mother Road with souvenirs made for the journey.',
    color: '#00f0ff',
    icon: Route,
    image: storefrontDay,
  },
]

export function Featured() {
  return (
    <section
      id="shop"
      className="relative overflow-hidden bg-[#1a1a24] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#ffea00] bg-[#0a0a12] px-4 py-1 text-xs font-black uppercase tracking-widest text-[#ffea00] shadow-[0_0_12px_rgba(255,234,0,0.3)]">
            Take Your Pick
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#fff8e7] sm:text-5xl lg:text-6xl">
            Featured{' '}
            <span
              className="text-[#ff2a6d]"
              style={{ textShadow: '0 0 20px rgba(255,42,109,0.55)' }}
            >
              Collections
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#fff8e7]/70">
            Our shelves are packed. Grab a basket and hunt through the good
            stuff.
          </p>
        </div>

        {/* Toy-shelf grid with staggered heights */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => {
            const Icon = collection.icon
            return (
              <article
                key={collection.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#fff8e7]/10 bg-[#0a0a12] transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index % 2 === 0 ? 'lg:mt-8' : 'lg:mt-0'
                }`}
                style={{
                  borderColor: `${collection.color}33`,
                  boxShadow: `0 12px 40px ${collection.color}1a`,
                }}
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute left-3 top-3 rounded-lg border bg-[#0a0a12]/90 p-2 backdrop-blur"
                    style={{
                      borderColor: collection.color,
                      color: collection.color,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-black text-[#fff8e7]">
                    {collection.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#fff8e7]/70">
                    {collection.description}
                  </p>
                  <a
                    href="#shop"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
                    style={{ color: collection.color }}
                  >
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Shelf-ledge accent */}
                <div
                  className="h-2 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${collection.color}, transparent)`,
                  }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

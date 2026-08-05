import {
  neonSign,
  bruceLeeShirts,
  arcadeCabinets,
  wuzzlesDisplay,
  ponyDisplay,
  storeInterior,
} from '@/data/images'

interface GalleryPhoto {
  src: string
  alt: string
}

const photos: GalleryPhoto[] = [
  {
    src: neonSign,
    alt: "Gambit's Toy Box neon sign glowing in cyan and magenta.",
  },
  {
    src: bruceLeeShirts,
    alt: "Mint-green Gambit's Toy Box T-shirts hanging on wooden hangers.",
  },
  {
    src: arcadeCabinets,
    alt: "Classic arcade cabinets including X-Men, Star Wars, and Teenage Mutant Ninja Turtles.",
  },
  {
    src: wuzzlesDisplay,
    alt: "Vintage 1980s Wuzzles and Clubhouse Caboose figures in a glass display case.",
  },
  {
    src: ponyDisplay,
    alt: "Colorful My Little Pony collection with boxed and loose vintage ponies.",
  },
  {
    src: storeInterior,
    alt: "Gambit's Toy Box showroom floor with arcade machines, toy shelves, and holiday lights.",
  },
]

const confetti = [
  { top: 8, left: 6, color: '#00f0ff', delay: 0, size: 2 },
  { top: 14, left: 88, color: '#ff2a6d', delay: 1.2, size: 1.5 },
  { top: 22, left: 42, color: '#ffea00', delay: 0.6, size: 2 },
  { top: 35, left: 12, color: '#00f0ff', delay: 1.8, size: 1.5 },
  { top: 44, left: 76, color: '#ff2a6d', delay: 0.3, size: 2 },
  { top: 58, left: 28, color: '#ffea00', delay: 1.5, size: 1.5 },
  { top: 67, left: 64, color: '#00f0ff', delay: 0.9, size: 2 },
  { top: 78, left: 18, color: '#ff2a6d', delay: 2.1, size: 1.5 },
  { top: 85, left: 82, color: '#ffea00', delay: 1.1, size: 2 },
  { top: 92, left: 48, color: '#00f0ff', delay: 0.4, size: 1.5 },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0a0a12] py-20 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#00f0ff]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#ff2a6d]/10 blur-3xl" />
        {confetti.map((dot, i) => (
          <span
            key={i}
            className="absolute animate-pulse rounded-none"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              width: `${dot.size * 0.25}rem`,
              height: `${dot.size * 0.25}rem`,
              backgroundColor: dot.color,
              opacity: 0.25,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <span className="inline-block rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-[#00f0ff]">
            Peek Inside
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Inside the Toy Box
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#fff8e7]/80">
            Aisles of nostalgia, cabinets full of high scores, and shelves stacked
            with the toys you never stopped hunting for.
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a24] shadow-lg transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

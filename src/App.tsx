import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { About } from './components/About'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import { VisitInfo } from './components/VisitInfo'
import { Footer } from './components/Footer'
import Watermark from './components/Watermark'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-[#fff8e7]">
      <Hero />
      <Featured />
      <About />
      <Gallery />
      <FAQ />
      <VisitInfo />
      <Footer />
      <Watermark />
    </div>
  )
}

export default App

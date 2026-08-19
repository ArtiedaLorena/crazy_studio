import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { BookingSection } from './components/BookingSection'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { LocalSeo } from './components/LocalSeo'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { SeoSchema } from './components/SeoSchema'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <>
      <SeoSchema />
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <BookingSection />
        <Testimonials />
        <About />
        <FAQ />
        <LocalSeo />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

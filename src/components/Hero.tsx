import { ArrowDown, Sparkles } from 'lucide-react'
import { brand } from '../config/brand'
import { LocationCard } from './LocationCard'
import { TrustBar } from './TrustBar'
import { CTAButton } from './ui/CTAButton'

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 text-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card to-dark" />
      <div className="absolute top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neon/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/5 blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center">
        <div className="animate-fade-up animate-delay-100 mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-sm text-neon-light">
          <Sparkles size={14} />
          <span>
            {brand.tagline} · {brand.locationArea}
          </span>
        </div>

        <p className="animate-fade-up animate-delay-100 font-script text-5xl leading-tight text-neon neon-glow md:text-7xl">
          {brand.name}
        </p>

        <h1
          id="hero-heading"
          className="animate-fade-up animate-delay-200 mt-4 text-xl font-semibold tracking-wide text-white md:text-3xl"
        >
          Uñas y pestañas en Bernal Centro
        </h1>

        <p className="animate-fade-up animate-delay-200 mt-2 text-sm font-medium tracking-[0.22em] text-white/70 uppercase">
          {brand.tagline}
        </p>

        <p className="animate-fade-up animate-delay-200 mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
          {brand.slogan}. Extensiones de pestañas premium, uñas esculpidas y nail art en el corazón
          de Bernal. Tu glow up empieza acá.
        </p>

        <div className="animate-fade-up animate-delay-300 mt-10">
          <CTAButton />
        </div>

        <div className="animate-fade-up animate-delay-300 mt-8 w-full">
          <LocationCard />
        </div>

        <div className="animate-fade-up animate-delay-300 mt-14 w-full">
          <TrustBar />
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-neon/50 transition-colors hover:text-neon"
        aria-label="Ver servicios"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}

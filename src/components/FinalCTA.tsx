import { brand } from '../config/brand'
import { CTAButton } from './ui/CTAButton'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20" aria-label="Reservá tu turno">
      <div className="absolute inset-0 bg-gradient-to-r from-neon/10 via-neon/5 to-neon/10" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[100px]" />

      <div className="section-container relative">
        <p className="font-script text-3xl text-neon neon-glow md:text-4xl">
          ¿Lista para brillar?
        </p>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          Turnos disponibles esta semana en {brand.locationArea}. Reservá online en menos de 2
          minutos o escribinos por WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton />
          <a
            href="#trabajos"
            className="inline-flex items-center justify-center rounded-full border border-neon/40 px-8 py-4 text-sm font-medium text-white transition-all hover:border-neon hover:bg-neon/10"
          >
            Ver trabajos
          </a>
        </div>
      </div>
    </section>
  )
}

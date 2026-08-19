import { Star } from 'lucide-react'
import { testimonials } from '../config/brand'
import { SectionHeader } from './ui/SectionHeader'

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card/50 to-dark" />
      <div className="section-wide relative">
        <SectionHeader
          headingId="testimonials-heading"
          eyebrow="Testimonios"
          title="Ellas ya confiaron"
          description="Experiencias reales de clientas que eligen Studiocrazy para su mirada y sus uñas."
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="glass-card flex flex-col items-center p-6 text-center transition-transform hover:-translate-y-1 hover:border-neon/40"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-neon text-neon" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/70 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-neon/10 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="mt-0.5 text-xs text-neon">{t.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

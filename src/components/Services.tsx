import { Clock, Star } from 'lucide-react'
import { useState } from 'react'
import { brand } from '../config/brand'
import {
  formatDuration,
  formatPrice,
  serviceCategories,
  services,
} from '../data/services'
import { CTAButton } from './ui/CTAButton'
import { SectionHeader } from './ui/SectionHeader'

export function Services() {
  const [activeCategory, setActiveCategory] = useState<'pestañas' | 'uñas' | 'all'>('all')

  const filtered =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <section id="servicios" className="bg-dark-card py-24" aria-labelledby="services-heading">
      <div className="section-wide">
        <SectionHeader
          headingId="services-heading"
          eyebrow="Nuestros servicios"
          title="Uñas y pestañas en Bernal"
          description={`Extensiones de pestañas, volumen ruso, uñas esculpidas y nail art en ${brand.locationArea}. Elegí el servicio y reservá online.`}
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-neon text-white shadow-[0_0_20px_rgba(255,51,153,0.3)]'
                : 'border border-neon/30 text-white/70 hover:border-neon'
            }`}
          >
            Todos
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-neon text-white shadow-[0_0_20px_rgba(255,51,153,0.3)]'
                  : 'border border-neon/30 text-white/70 hover:border-neon'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col items-center rounded-2xl border border-neon/15 bg-dark-elevated p-6 text-center transition-all hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_8px_30px_rgba(255,51,153,0.12)]"
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-neon px-3 py-1 text-xs font-semibold text-white">
                  <Star size={12} fill="currentColor" />
                  Más elegido
                </span>
              )}

              <span className="mb-3 rounded-full bg-neon/10 px-3 py-0.5 text-[10px] font-semibold tracking-wider text-neon uppercase">
                {service.category}
              </span>

              <h3 className="text-lg font-semibold text-white">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                {service.description}
              </p>

              <div className="mt-6 flex w-full items-center justify-between border-t border-neon/10 pt-4">
                <span className="flex items-center gap-1.5 text-sm text-white/50">
                  <Clock size={14} />
                  {formatDuration(service.duration)}
                </span>
                <span className="text-xl font-semibold text-neon">
                  {formatPrice(service.price)}
                </span>
              </div>

              <a
                href="#reservar"
                className="mt-4 w-full rounded-xl border border-neon/30 py-2.5 text-sm font-medium text-white transition-all group-hover:border-neon group-hover:bg-neon"
              >
                Quiero este
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}

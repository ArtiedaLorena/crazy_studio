import { Heart, Shield, Sparkles } from 'lucide-react'
import { brand } from '../config/brand'
import { LocationCard } from './LocationCard'
import { SectionHeader } from './ui/SectionHeader'

const values = [
  {
    icon: Sparkles,
    title: 'Nails Babe Energy',
    description:
      'Un espacio con onda, estilo y actitud. Cada servicio es una experiencia glam que te hace sentir increíble.',
  },
  {
    icon: Shield,
    title: 'Productos premium',
    description:
      'Materiales hipoalergénicos de primera calidad para pestañas y uñas con resultados seguros y duraderos.',
  },
  {
    icon: Heart,
    title: 'Look personalizado',
    description:
      'Diseñamos tu mirada y tus uñas a medida. Desde natural hasta mega volumen, tu estilo manda.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-pastel/5 to-dark" />
      <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neon/5 blur-[100px]" />

      <div className="section-container relative">
        <SectionHeader headingId="about-heading" eyebrow="Sobre nosotros" title={brand.slogan} />

        <p className="mx-auto max-w-2xl leading-relaxed text-white/65">
          <strong className="text-white">{brand.name}</strong> es un estudio de belleza en{' '}
          {brand.locationArea} especializado en extensiones de pestañas y uñas. Combinamos técnica
          profesional con un ambiente único donde tu belleza, tu estilo y tu energía son lo más
          importante.
        </p>

        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/65">
          Seguinos en{' '}
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neon underline underline-offset-4 hover:text-neon-light"
          >
            {brand.instagramHandle}
          </a>{' '}
          (pestañas) y{' '}
          <a
            href={brand.instagramNails}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neon underline underline-offset-4 hover:text-neon-light"
          >
            {brand.instagramNailsHandle}
          </a>{' '}
          (uñas) para ver trabajos, promos y novedades.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5">
          {values.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-card flex flex-col items-center p-6 text-center sm:flex-row sm:items-start sm:text-left"
            >
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon/15 sm:mb-0 sm:mr-5">
                <Icon size={22} className="text-neon" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <LocationCard />
        </div>
      </div>
    </section>
  )
}

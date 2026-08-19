import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { galleryItems, instagramProfiles, type GalleryCategory } from '../data/gallery'
import { InstagramIcon } from './icons/InstagramIcon'
import { SectionHeader } from './ui/SectionHeader'

type Filter = 'all' | GalleryCategory

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')

  const profiles =
    filter === 'all' ? instagramProfiles : instagramProfiles.filter((p) => p.id === filter)

  const photos =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  useEffect(() => {
    const existing = document.querySelector('script[data-instagram-embed]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.dataset.instagramEmbed = 'true'
      script.onload = () => window.instgrm?.Embeds.process()
      document.body.appendChild(script)
    } else {
      window.instgrm?.Embeds.process()
    }
  }, [filter])

  return (
    <section id="trabajos" className="relative overflow-hidden py-24" aria-labelledby="gallery-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card to-dark" />
      <div className="absolute top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-neon/8 blur-[120px]" />

      <div className="section-wide relative">
        <SectionHeader
          headingId="gallery-heading"
          eyebrow="Nuestros trabajos"
          title="Mirá lo que hacemos"
          description="Trabajos reales de pestañas y uñas en Bernal. Inspirate y pedí el look que más te guste."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {([
            { id: 'all', label: 'Todos' },
            { id: 'pestañas', label: 'Pestañas' },
            { id: 'uñas', label: 'Uñas' },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === tab.id
                  ? 'bg-neon text-white shadow-[0_0_20px_rgba(255,51,153,0.3)]'
                  : 'border border-neon/30 text-white/70 hover:border-neon'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={`mx-auto grid max-w-5xl justify-items-center gap-8 ${
            profiles.length > 1 ? 'lg:grid-cols-2' : ''
          }`}
        >
          {profiles.map((profile) => (
            <article
              key={profile.id}
              className="glass-card w-full max-w-md overflow-hidden p-4 text-center sm:p-6"
            >
              <div className="mb-4 flex flex-col items-center gap-1">
                <p className="text-xs font-semibold tracking-[0.25em] text-neon uppercase">
                  {profile.label}
                </p>
                <h3 className="text-lg font-semibold text-white">{profile.handle}</h3>
                <p className="text-sm text-white/55">{profile.description}</p>
              </div>

              <div className="instagram-embed overflow-hidden rounded-2xl bg-black">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`${profile.url}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: '#000',
                    border: 0,
                    margin: '0 auto',
                    maxWidth: '540px',
                    minWidth: '280px',
                    width: '100%',
                  }}
                >
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    Ver {profile.handle} en Instagram
                  </a>
                </blockquote>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-neon/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-neon hover:bg-neon/10"
              >
                <InstagramIcon size={16} />
                Abrir perfil
                <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>

        {photos.length > 0 && (
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {photos.map((item) => (
              <figure
                key={item.src}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-neon/15"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left">
                  <p className="text-[10px] font-semibold tracking-wider text-neon uppercase">
                    {item.category}
                  </p>
                  <p className="text-xs text-white/80">{item.handle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

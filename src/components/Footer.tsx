import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { brand, businessHours, getAddressLines, getWhatsAppUrl } from '../config/brand'
import { InstagramIcon } from './icons/InstagramIcon'
import { CTAButton } from './ui/CTAButton'

export function Footer() {
  const addressLines = getAddressLines()

  return (
    <footer id="contacto" className="border-t border-neon/20 bg-dark py-16">
      <div className="section-wide">
        <div className="mb-12 text-center">
          <CTAButton />
        </div>

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center text-center md:items-center">
            <div className="flex flex-col items-center gap-3">
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="h-16 w-16 rounded-full object-cover neon-border"
                width={64}
                height={64}
                loading="lazy"
              />
              <div>
                <p className="font-script text-2xl text-neon">{brand.name}</p>
                <p className="text-[10px] font-semibold tracking-[0.3em] text-white/60 uppercase">
                  {brand.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {brand.slogan}. Salón de uñas y pestañas en {brand.location}.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-neon"
              >
                <InstagramIcon size={18} />
                {brand.instagramHandle} · Pestañas
              </a>
              <a
                href={brand.instagramNails}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-neon"
              >
                <InstagramIcon size={18} />
                {brand.instagramNailsHandle} · Uñas
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-sm font-semibold tracking-widest text-neon uppercase">Contacto</h4>
            <address className="mt-4 space-y-3 text-sm text-white/50 not-italic">
              <div className="flex flex-col items-center gap-2">
                <MapPin size={18} className="text-neon" />
                <div>
                  <p className="font-medium text-white/80">{brand.cta}</p>
                  {addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>{brand.locationFull}, Argentina</p>
                  <a
                    href={brand.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-neon hover:text-neon-light"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
              <p className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-neon" />
                <a href={`tel:${brand.phone}`} className="hover:text-neon">
                  {brand.phone}
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MessageCircle size={16} className="text-[#25D366]" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366]"
                >
                  WhatsApp
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail size={16} className="text-neon" />
                <a href={`mailto:${brand.email}`} className="hover:text-neon">
                  {brand.email}
                </a>
              </p>
            </address>
          </div>

          <div className="text-center">
            <h4 className="text-sm font-semibold tracking-widest text-neon uppercase">Horarios</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              {businessHours.map((h) => (
                <li key={h.day}>
                  <Clock size={14} className="mr-2 inline text-neon" />
                  {h.day}: {h.opens ? `${h.opens} – ${h.closes}` : 'Cerrado'}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neon/10 pt-8 text-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {brand.name} — {brand.tagline}. {brand.address.street},{' '}
            {brand.address.area}.
          </p>
        </div>
      </div>
    </footer>
  )
}

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

        <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-3 md:gap-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {brand.slogan}. Salón de uñas y pestañas en {brand.location}.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2 md:items-start">
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

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-sm font-semibold tracking-widest text-neon uppercase">Contacto</h4>
            <address className="mt-4 space-y-3 text-sm text-white/50 not-italic">
              <div className="flex items-start justify-center gap-2.5 md:justify-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-neon" />
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
                    className="mt-1 inline-block text-neon hover:text-neon-light"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
              <p className="flex items-center justify-center gap-2.5 md:justify-start">
                <Phone size={16} className="shrink-0 text-neon" />
                <a href={`tel:${brand.phone}`} className="hover:text-neon">
                  {brand.phone}
                </a>
              </p>
              <p className="flex items-center justify-center gap-2.5 md:justify-start">
                <MessageCircle size={16} className="shrink-0 text-[#25D366]" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366]"
                >
                  WhatsApp
                </a>
              </p>
              <p className="flex items-center justify-center gap-2.5 md:justify-start">
                <Mail size={16} className="shrink-0 text-neon" />
                <a href={`mailto:${brand.email}`} className="hover:text-neon">
                  {brand.email}
                </a>
              </p>
            </address>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="flex items-center gap-2 text-sm font-semibold tracking-widest text-neon uppercase">
              <Clock size={14} />
              Horarios
            </h4>
            <ul className="mt-4 w-full max-w-[240px] text-sm">
              {businessHours.map((h) => (
                <li
                  key={h.day}
                  className="grid grid-cols-[7.5rem_1fr] items-baseline gap-x-3 border-b border-white/5 py-1.5 last:border-b-0"
                >
                  <span className="text-white/55">{h.day}</span>
                  <span
                    className={`text-right tabular-nums ${
                      h.opens ? 'text-white/80' : 'text-white/35'
                    }`}
                  >
                    {h.opens ? `${h.opens} – ${h.closes}` : 'Cerrado'}
                  </span>
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
          <p className="mt-2">
            Hecho por{' '}
            <a
              href="https://www.instagram.com/meraki.responsivewebs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold tracking-wide text-white/70 transition-colors hover:text-neon"
            >
              Meraki Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

import { MapPin } from 'lucide-react'
import { brand, getAddressLines } from '../config/brand'

export function LocationCard({ className = '' }: { className?: string }) {
  const lines = getAddressLines()

  return (
    <div
      className={`glass-card mx-auto max-w-sm p-5 text-center shadow-[0_0_30px_rgba(255,51,153,0.08)] ${className}`}
    >
      <p className="text-sm font-semibold text-neon">{brand.cta}</p>
      <div className="mt-3 flex flex-col items-center gap-2">
        <MapPin size={20} className="text-neon" aria-hidden="true" />
        <address className="space-y-0.5 not-italic">
          {lines.map((line) => (
            <p key={line} className="text-sm text-white/80">
              {line}
            </p>
          ))}
        </address>
      </div>
      <a
        href={brand.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-xs font-medium text-neon underline underline-offset-4 hover:text-neon-light"
      >
        Ver en Google Maps
      </a>
    </div>
  )
}

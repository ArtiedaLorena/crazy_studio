import { brand, getWhatsAppUrl } from '../config/brand'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_5px_22px_rgba(37,211,102,0.55)] md:right-6 md:bottom-6"
      aria-label={`Consultar por WhatsApp a ${brand.name}`}
    >
      <WhatsAppIcon size={24} />
    </a>
  )
}

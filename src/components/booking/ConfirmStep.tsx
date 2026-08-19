import { parseISO } from 'date-fns'
import { CheckCircle, MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { brand, getWhatsAppUrl } from '../../config/brand'
import { formatDateLabel } from '../../data/schedule'
import { formatDuration, formatPrice, services } from '../../data/services'
import type { BookingData, SavedBooking } from '../../types/booking'

interface ConfirmStepProps {
  data: BookingData
  onReset: () => void
}

function saveBooking(data: BookingData): SavedBooking {
  const booking: SavedBooking = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }

  try {
    const existing = JSON.parse(localStorage.getItem('studiocrazy_bookings') || '[]') as SavedBooking[]
    localStorage.setItem('studiocrazy_bookings', JSON.stringify([...existing, booking]))
  } catch {
    // Si el navegador bloquea storage, igual devolvemos el turno para WhatsApp
  }

  return booking
}

function buildBookingMessage(data: BookingData): string {
  const service = services.find((s) => s.id === data.serviceId)
  const dateLabel = formatDateLabel(parseISO(data.date))

  return (
    `¡Hola! Quiero confirmar mi turno en ${brand.name}:\n\n` +
    `📋 Servicio: ${service?.name}\n` +
    `📅 Fecha: ${dateLabel}\n` +
    `🕐 Horario: ${data.time} hs\n` +
    `👤 Nombre: ${data.name}\n` +
    `📱 Tel: ${data.phone}` +
    (data.notes ? `\n📝 Notas: ${data.notes}` : '')
  )
}

export function ConfirmStep({ data, onReset }: ConfirmStepProps) {
  const saved = useRef(false)
  const service = services.find((s) => s.id === data.serviceId)
  const whatsappUrl = getWhatsAppUrl(buildBookingMessage(data))

  useEffect(() => {
    if (!saved.current) {
      saveBooking(data)
      saved.current = true
    }
  }, [data])

  return (
    <div className="py-4 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neon/15">
        <CheckCircle size={40} className="text-neon" />
      </div>

      <h3 className="font-script mt-6 text-3xl text-neon">¡Solicitud enviada!</h3>
      <p className="mt-2 text-white/60">
        Recibimos tu pedido. Confirmalo por WhatsApp para que podamos anotarlo en la agenda.
      </p>

      <div className="mt-8 rounded-2xl border border-neon/20 bg-dark-elevated p-6 text-left">
        <h4 className="text-sm font-semibold tracking-widest text-neon uppercase">Resumen</h4>
        <dl className="mt-4 space-y-3">
          <div className="flex justify-between">
            <dt className="text-white/50">Servicio</dt>
            <dd className="font-medium text-white">{service?.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/50">Duración</dt>
            <dd className="font-medium text-white">
              {service ? formatDuration(service.duration) : '—'}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/50">Fecha</dt>
            <dd className="font-medium text-white capitalize">
              {formatDateLabel(parseISO(data.date))}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/50">Horario</dt>
            <dd className="font-medium text-white">{data.time} hs</dd>
          </div>
          <div className="flex justify-between border-t border-neon/15 pt-3">
            <dt className="text-white/50">Total estimado</dt>
            <dd className="text-xl font-semibold text-neon">
              {service ? formatPrice(service.price) : '—'}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle size={18} />
          Confirmar por WhatsApp
        </a>
        <button
          type="button"
          onClick={onReset}
          className="flex-1 rounded-xl border border-neon/30 py-4 text-sm font-medium text-white transition-colors hover:bg-neon/10"
        >
          Reservar otro turno
        </button>
      </div>

      <p className="mt-6 text-xs text-white/40">
        Podés cancelar o reprogramar con 24hs de anticipación sin cargo.
      </p>
    </div>
  )
}

import type { BookingData } from '../../types/booking'

interface DetailsStepProps {
  data: BookingData
  onChange: (partial: Partial<BookingData>) => void
  onNext: () => void
  onBack: () => void
}

const inputClass =
  'w-full rounded-xl border border-neon/20 bg-dark-elevated px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-neon focus:ring-2 focus:ring-neon/20'

export function DetailsStep({ data, onChange, onNext, onBack }: DetailsStepProps) {
  const isValid =
    data.name.trim().length >= 2 &&
    data.phone.trim().length >= 8 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)

  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-white">Tus datos de contacto</h3>
      <p className="mt-1 text-sm text-white/50">
        Te enviaremos la confirmación por WhatsApp o email.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
            Nombre completo *
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Ej: María González"
            className={inputClass}
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/80">
            WhatsApp / Teléfono *
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="Ej: 11 1234 5678"
            className={inputClass}
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="Ej: maria@email.com"
            className={inputClass}
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-white/80">
            Notas (opcional)
          </label>
          <textarea
            id="notes"
            value={data.notes}
            onChange={(e) => onChange({ notes: e.target.value })}
            placeholder="Alergias, preferencias de look, etc."
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-xl border border-neon/30 py-4 text-sm font-medium text-white transition-colors hover:bg-neon/10"
        >
          Volver
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className="flex-1 rounded-xl bg-neon py-4 text-sm font-semibold tracking-wide text-white uppercase transition-all hover:bg-neon-light disabled:cursor-not-allowed disabled:opacity-40"
        >
          Confirmar reserva
        </button>
      </div>
    </div>
  )
}

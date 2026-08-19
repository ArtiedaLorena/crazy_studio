import { formatDuration, formatPrice, services } from '../../data/services'

interface ServiceStepProps {
  selected: string
  onSelect: (id: string) => void
  onNext: () => void
}

export function ServiceStep({ selected, onSelect, onNext }: ServiceStepProps) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-white">¿Qué servicio querés?</h3>
      <p className="mt-1 text-sm text-white/50">Pestañas, uñas esculpidas, nail art y más.</p>

      <div className="mt-6 max-h-80 space-y-3 overflow-y-auto pr-1">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service.id)}
            className={`w-full rounded-xl border p-4 text-left transition-all ${
              selected === service.id
                ? 'border-neon bg-neon/10 ring-2 ring-neon/30'
                : 'border-neon/15 bg-dark-elevated hover:border-neon/40'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-white">{service.name}</p>
                <p className="mt-0.5 text-sm text-white/45">{formatDuration(service.duration)}</p>
              </div>
              <p className="text-lg font-semibold text-neon">{formatPrice(service.price)}</p>
            </div>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!selected}
        className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continuar
      </button>
    </div>
  )
}

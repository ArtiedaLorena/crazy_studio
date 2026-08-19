import { parseISO } from 'date-fns'
import { getTimeSlots, formatDateLabel } from '../../data/schedule'
import { services } from '../../data/services'

interface TimeStepProps {
  serviceId: string
  date: string
  selected: string
  onSelect: (time: string) => void
  onNext: () => void
  onBack: () => void
}

export function TimeStep({
  serviceId,
  date,
  selected,
  onSelect,
  onNext,
  onBack,
}: TimeStepProps) {
  const service = services.find((s) => s.id === serviceId)
  const slots = service ? getTimeSlots(service.duration, date) : []

  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-white">Elegí un horario</h3>
      <p className="mt-1 text-sm text-white/50 capitalize">
        {formatDateLabel(parseISO(date))}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {slots.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => onSelect(time)}
            className={`rounded-xl border py-3 text-sm font-medium transition-all ${
              selected === time
                ? 'border-neon bg-neon/10 text-white ring-2 ring-neon/30'
                : 'border-neon/15 bg-dark-elevated text-white hover:border-neon/40'
            }`}
          >
            {time} hs
          </button>
        ))}
      </div>

      {slots.length === 0 && (
        <p className="mt-6 text-center text-white/50">
          No hay horarios disponibles para este día. Probá con otra fecha.
        </p>
      )}

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
          disabled={!selected}
          className="flex-1 rounded-xl bg-neon py-4 text-sm font-semibold tracking-wide text-white uppercase transition-all hover:bg-neon-light disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

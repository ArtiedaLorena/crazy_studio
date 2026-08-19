import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import {
  formatDateISO,
  formatDateLabel,
  getAvailableDates,
} from '../../data/schedule'

interface DateStepProps {
  selected: string
  onSelect: (date: string) => void
  onNext: () => void
  onBack: () => void
}

export function DateStep({ selected, onSelect, onNext, onBack }: DateStepProps) {
  const dates = getAvailableDates(21)

  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-white">Elegí una fecha</h3>
      <p className="mt-1 text-sm text-white/50">Atendemos de lunes a sábado. Domingos cerrado.</p>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
        {dates.map((date) => {
          const iso = formatDateISO(date)
          const isSelected = selected === iso

          return (
            <button
              key={iso}
              type="button"
              onClick={() => onSelect(iso)}
              className={`flex flex-col items-center rounded-xl border py-3 transition-all ${
                isSelected
                  ? 'border-neon bg-neon/10 ring-2 ring-neon/30'
                  : 'border-neon/15 bg-dark-elevated hover:border-neon/40'
              }`}
            >
              <span className="text-xs text-white/45 capitalize">
                {format(date, 'EEE', { locale: es })}
              </span>
              <span className="text-xl font-semibold text-white">{date.getDate()}</span>
              <span className="text-[10px] text-white/45 capitalize">
                {format(date, 'MMM', { locale: es })}
              </span>
            </button>
          )
        })}
      </div>

      {selected && (
        <p className="mt-4 text-center text-sm text-white/50 capitalize">
          {formatDateLabel(parseISO(selected))} seleccionado
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

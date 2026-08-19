const STEP_LABELS = ['Servicio', 'Fecha', 'Horario', 'Datos']

interface StepIndicatorProps {
  current: number
  total: number
}

export function StepIndicator({ current, total }: StepIndicatorProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {STEP_LABELS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                i < current
                  ? 'bg-neon text-white'
                  : i === current
                    ? 'bg-neon text-white ring-4 ring-neon/30'
                    : 'bg-dark-elevated text-white/40'
              }`}
            >
              {i < current ? '✓' : i + 1}
            </div>
            <span
              className={`mt-2 hidden text-xs sm:block ${
                i <= current ? 'font-medium text-white' : 'text-white/40'
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-4 h-1 rounded-full bg-dark-elevated">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-neon transition-all duration-500"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  )
}

import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { brand } from '../config/brand'
import type { BookingData, BookingStep } from '../types/booking'
import { ConfirmStep } from './booking/ConfirmStep'
import { DateStep } from './booking/DateStep'
import { DetailsStep } from './booking/DetailsStep'
import { ServiceStep } from './booking/ServiceStep'
import { StepIndicator } from './booking/StepIndicator'
import { TimeStep } from './booking/TimeStep'
import { SectionHeader } from './ui/SectionHeader'

const STEPS: BookingStep[] = ['service', 'date', 'time', 'details', 'confirm']

const initialData: BookingData = {
  serviceId: '',
  date: '',
  time: '',
  name: '',
  phone: '',
  email: '',
  notes: '',
}

const trustPoints = [
  'Confirmación rápida por WhatsApp',
  'Sin seña para reservar online',
  'Cancelación flexible con 24hs',
]

export function BookingSection() {
  const [step, setStep] = useState<BookingStep>('service')
  const [data, setData] = useState<BookingData>(initialData)

  const stepIndex = STEPS.indexOf(step)

  const updateData = (partial: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...partial }))
  }

  const goNext = () => {
    const next = STEPS[stepIndex + 1]
    if (next) setStep(next)
  }

  const goBack = () => {
    const prev = STEPS[stepIndex - 1]
    if (prev) setStep(prev)
  }

  const reset = () => {
    setData(initialData)
    setStep('service')
  }

  return (
    <section id="reservar" className="relative py-24" aria-labelledby="booking-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card via-dark to-dark-card" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[120px]" />

      <div className="section-container relative">
        <SectionHeader
          headingId="booking-heading"
          eyebrow="Reservá online"
          title="Tu turno en 4 pasos"
          description={`Reservá extensiones de pestañas, uñas esculpidas y más en ${brand.location}. Rápido, fácil y sin vueltas.`}
        />

        <ul className="mb-8 flex flex-wrap justify-center gap-3">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 rounded-full border border-neon/20 bg-dark-card/60 px-4 py-2 text-xs text-white/70"
            >
              <CheckCircle2 size={14} className="shrink-0 text-neon" />
              {point}
            </li>
          ))}
        </ul>

        <div className="glass-card mx-auto max-w-2xl p-6 shadow-[0_0_40px_rgba(255,51,153,0.08)] md:p-10">
          {step !== 'confirm' && <StepIndicator current={stepIndex} total={STEPS.length - 1} />}

          {step === 'service' && (
            <ServiceStep
              selected={data.serviceId}
              onSelect={(serviceId) => updateData({ serviceId })}
              onNext={goNext}
            />
          )}

          {step === 'date' && (
            <DateStep
              selected={data.date}
              onSelect={(date) => updateData({ date, time: '' })}
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {step === 'time' && (
            <TimeStep
              serviceId={data.serviceId}
              date={data.date}
              selected={data.time}
              onSelect={(time) => updateData({ time })}
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {step === 'details' && (
            <DetailsStep data={data} onChange={updateData} onNext={goNext} onBack={goBack} />
          )}

          {step === 'confirm' && <ConfirmStep data={data} onReset={reset} />}
        </div>
      </div>
    </section>
  )
}

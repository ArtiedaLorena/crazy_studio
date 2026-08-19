import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { brand, faqItems } from '../config/brand'
import { SectionHeader } from './ui/SectionHeader'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-dark py-24" aria-labelledby="faq-heading">
      <div className="section-container">
        <SectionHeader
          headingId="faq-heading"
          eyebrow="Preguntas frecuentes"
          title="Uñas y pestañas en Bernal"
          description={`Respuestas sobre extensiones, uñas esculpidas y reservas en Studiocrazy ${brand.location}.`}
        />

        <div className="mx-auto max-w-2xl space-y-3 text-left">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-neon/20 bg-dark-card transition-colors hover:border-neon/35"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-medium text-white">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-neon transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-neon/10 px-6 pb-5">
                    <p className="pt-4 text-sm leading-relaxed text-white/65">{item.answer}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

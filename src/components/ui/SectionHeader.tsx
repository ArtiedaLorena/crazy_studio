interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  headingId?: string
}

export function SectionHeader({ eyebrow, title, description, headingId }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-[0.25em] text-neon uppercase">{eyebrow}</p>
      <h2 id={headingId} className="font-script mt-3 text-4xl text-white md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 leading-relaxed text-white/60">{description}</p>}
    </div>
  )
}

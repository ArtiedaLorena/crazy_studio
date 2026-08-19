import { Sparkles, Star, Shield, Heart } from 'lucide-react'

const stats = [
  { icon: Heart, value: '+500', label: 'Clientas felices' },
  { icon: Shield, value: '100%', label: 'Productos premium' },
  { icon: Star, value: '5★', label: 'Experiencia top' },
  { icon: Sparkles, value: 'Bernal', label: 'Centro · Local 5' },
]

export function TrustBar() {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center rounded-2xl border border-neon/15 bg-dark-card/60 px-4 py-5 transition-colors hover:border-neon/35"
        >
          <Icon size={18} className="mb-2 text-neon" />
          <p className="font-script text-2xl text-neon md:text-3xl">{value}</p>
          <p className="mt-1 text-center text-xs text-white/50">{label}</p>
        </div>
      ))}
    </div>
  )
}

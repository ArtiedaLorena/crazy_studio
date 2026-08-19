import type { Service } from '../types/booking'

export const services: Service[] = [
  {
    id: 'clasica',
    name: 'Extensiones Clásicas 1:1',
    description:
      'Extensiones de pestañas pelo por pelo con look natural y elegante. Ideal para el día a día.',
    duration: 120,
    price: 18000,
    category: 'pestañas',
  },
  {
    id: 'hibrida',
    name: 'Extensiones Híbridas',
    description:
      'Combinación de clásico y volumen ruso. Más densidad sin perder naturalidad.',
    duration: 150,
    price: 22000,
    popular: true,
    category: 'pestañas',
  },
  {
    id: 'volumen',
    name: 'Volumen Ruso',
    description:
      'Técnica de abanicado para un look dramático, glamoroso y de alto impacto.',
    duration: 180,
    price: 28000,
    popular: true,
    category: 'pestañas',
  },
  {
    id: 'mega',
    name: 'Mega Volumen',
    description:
      'Máxima densidad y efecto wow. Para quienes aman el drama y las pestañas XL.',
    duration: 210,
    price: 32000,
    category: 'pestañas',
  },
  {
    id: 'lifting',
    name: 'Lifting de Pestañas',
    description:
      'Curvatura, tinte y nutrición de pestañas naturales. Sin extensiones.',
    duration: 60,
    price: 12000,
    category: 'pestañas',
  },
  {
    id: 'retouch',
    name: 'Retoque de Pestañas',
    description:
      'Mantenimiento de extensiones existentes. Recomendado cada 2-3 semanas.',
    duration: 90,
    price: 14000,
    category: 'pestañas',
  },
  {
    id: 'esculpidas',
    name: 'Uñas Esculpidas',
    description:
      'Uñas esculpidas en gel o acrílico con forma y largo personalizado.',
    duration: 120,
    price: 15000,
    popular: true,
    category: 'uñas',
  },
  {
    id: 'semipermanente',
    name: 'Esmaltado Semipermanente',
    description: 'Manicura con esmalte semipermanente. Duración de hasta 3 semanas.',
    duration: 60,
    price: 8000,
    category: 'uñas',
  },
  {
    id: 'nailart',
    name: 'Nail Art',
    description:
      'Diseños personalizados, decoración y nail art sobre uñas esculpidas o naturales.',
    duration: 90,
    price: 12000,
    category: 'uñas',
  },
]

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(amount)
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
}

export const serviceCategories = [
  { id: 'pestañas', label: 'Pestañas' },
  { id: 'uñas', label: 'Uñas' },
] as const

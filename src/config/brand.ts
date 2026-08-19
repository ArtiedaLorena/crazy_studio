export const brand = {
  name: 'Studiocrazy',
  tagline: 'Uñas & Pestañas',
  slogan: 'Tu belleza, tu estilo, tu energía',
  cta: 'Pedí tu turno hoy',
  location: 'Bernal',
  locationArea: 'Bernal Centro',
  locationFull: 'Bernal, Buenos Aires',
  instagram: 'https://www.instagram.com/crazy_lashestudio/',
  instagramHandle: '@crazy_lashestudio',
  instagramNails: 'https://www.instagram.com/crazy._nail/',
  instagramNailsHandle: '@crazy._nail',
  phone: '+54 9 11 1234-5678',
  phoneRaw: '5491112345678',
  email: 'hola@studiocrazy.com.ar',
  address: {
    area: 'Bernal Centro',
    street: 'Galería 9 de Julio – Local 5',
    city: 'Bernal',
    region: 'Buenos Aires',
    country: 'AR',
    postalCode: '1876',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Galer%C3%ADa+9+de+Julio+Local+5+Bernal+Centro+Buenos+Aires',
  whatsappMessage:
    '¡Hola! Quiero hacer una consulta sobre uñas y pestañas en Studiocrazy 💅✨',
  url: 'https://studiocrazy.com.ar',
  logo: '/logo.png',
  ogImage: '/logo.png',
} as const

export function getAddressLines(): string[] {
  return [brand.address.area, brand.address.street]
}

export function getFullAddress(): string {
  return `${brand.address.street}, ${brand.address.area}, ${brand.address.city}, ${brand.address.region}`
}

export function getWhatsAppUrl(message: string = brand.whatsappMessage): string {
  return `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(message)}`
}

export const seo = {
  title: 'Uñas y Pestañas en Bernal | Studiocrazy — Turnos Online',
  titleTemplate: '%s | Studiocrazy Bernal',
  description:
    'Uñas y pestañas en Bernal Centro: extensiones, volumen ruso, lifting, uñas esculpidas y nail art. Studiocrazy, Galería 9 de Julio Local 5. Reservá tu turno online.',
  keywords: [
    'uñas y pestañas bernal',
    'uñas y pestañas bernal centro',
    'extensiones de pestañas bernal',
    'volumen ruso bernal',
    'lifting de pestañas bernal',
    'uñas esculpidas bernal',
    'nail art bernal',
    'manicura semipermanente bernal',
    'salon de uñas bernal',
    'pestañas pelo por pelo bernal',
    'galeria 9 de julio bernal',
    'studiocrazy bernal',
    'turno pestañas bernal',
    'uñas quilmes',
    'pestañas quilmes',
  ],
  locale: 'es_AR',
  geo: {
    latitude: -34.7083,
    longitude: -58.2783,
  },
} as const

export const businessHours = [
  { day: 'Lunes', opens: '10:00', closes: '19:00' },
  { day: 'Martes', opens: '10:00', closes: '19:00' },
  { day: 'Miércoles', opens: '10:00', closes: '19:00' },
  { day: 'Jueves', opens: '10:00', closes: '19:00' },
  { day: 'Viernes', opens: '10:00', closes: '19:00' },
  { day: 'Sábado', opens: '10:00', closes: '16:00' },
  { day: 'Domingo', opens: null, closes: null },
] as const

export const faqItems = [
  {
    question: '¿Cuánto duran las extensiones de pestañas?',
    answer:
      'Las extensiones de pestañas duran entre 3 y 4 semanas con cuidado adecuado. Recomendamos un retoque cada 2-3 semanas para mantener el look perfecto.',
  },
  {
    question: '¿Cómo reservo un turno en Studiocrazy?',
    answer:
      'Podés reservar tu turno online desde nuestra web eligiendo el servicio, fecha y horario. También podés escribirnos por Instagram o WhatsApp para confirmar.',
  },
  {
    question: '¿Qué servicios ofrecen además de pestañas?',
    answer:
      'En Studiocrazy ofrecemos extensiones de pestañas (clásica, híbrida, volumen ruso, mega volumen), lifting de pestañas, uñas esculpidas, semipermanente, nail art y mantenimiento.',
  },
  {
    question: '¿Dónde está ubicado el estudio?',
    answer:
      'Estamos en Bernal Centro, Galería 9 de Julio – Local 5, Bernal, Buenos Aires. Pedí tu turno hoy por la web, WhatsApp o Instagram @crazy_lashestudio.',
  },
  {
    question: '¿Dónde hacer uñas y pestañas en Bernal?',
    answer:
      'Studiocrazy está en Bernal Centro, Galería 9 de Julio – Local 5. Hacemos extensiones de pestañas, volumen ruso, uñas esculpidas y nail art. Reservá turno online o por WhatsApp.',
  },
  {
    question: '¿Atienden clientas de Quilmes y alrededores?',
    answer:
      'Sí. Recibimos clientas de Bernal, Quilmes, Wilde y zona sur. El local queda en Bernal Centro, a minutos de la estación.',
  },
  {
    question: '¿Cuánto cuesta una extensión de pestañas en Bernal?',
    answer:
      'Los precios varían según la técnica: clásica desde $18.000, híbrida desde $22.000, volumen ruso desde $28.000. Consultá la sección de servicios para ver todos los valores.',
  },
] as const

export const testimonials = [
  {
    name: 'Camila R.',
    service: 'Volumen Ruso',
    text: 'Salí enamorada de mis pestañas. El ambiente del estudio es hermoso y me sentí cómoda desde el primer minuto. ¡Vuelvo siempre!',
    rating: 5,
  },
  {
    name: 'Luciana M.',
    service: 'Uñas Esculpidas',
    text: 'Las mejores uñas que me hice. Duran perfectas y el nail art quedó exactamente como lo quería. 100% recomendada.',
    rating: 5,
  },
  {
    name: 'Florencia S.',
    service: 'Extensiones Híbridas',
    text: 'Profesionalismo total. Me explicaron cada paso y el resultado es natural pero glam. Studiocrazy es otro nivel.',
    rating: 5,
  },
] as const

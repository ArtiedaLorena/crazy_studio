import { brand, businessHours, faqItems, seo } from './brand'
import { services } from '../data/services'

const DAY_MAP: Record<string, string> = {
  Lunes: 'Monday',
  Martes: 'Tuesday',
  Miércoles: 'Wednesday',
  Jueves: 'Thursday',
  Viernes: 'Friday',
  Sábado: 'Saturday',
  Domingo: 'Sunday',
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['BeautySalon', 'NailSalon'],
    '@id': `${brand.url}/#business`,
    name: `${brand.name} Uñas y Pestañas`,
    legalName: brand.name,
    alternateName: [
      'Studiocrazy Bernal',
      'Crazy Lash Studio',
      'Crazy Nail Bernal',
      brand.instagramHandle,
      brand.instagramNailsHandle,
    ],
    description: seo.description,
    url: brand.url,
    logo: {
      '@type': 'ImageObject',
      url: `${brand.url}${brand.logo}`,
    },
    image: `${brand.url}${brand.ogImage}`,
    telephone: brand.phone,
    email: brand.email,
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${brand.address.street}, ${brand.address.area}`,
      addressLocality: brand.address.city,
      addressRegion: brand.address.region,
      postalCode: brand.address.postalCode,
      addressCountry: brand.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seo.geo.latitude,
      longitude: seo.geo.longitude,
    },
    hasMap: brand.mapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Bernal' },
      { '@type': 'City', name: 'Quilmes' },
      { '@type': 'Place', name: 'Bernal Centro' },
      { '@type': 'Place', name: 'Wilde' },
      { '@type': 'AdministrativeArea', name: 'Partido de Quilmes' },
    ],
    knowsAbout: [
      'Extensiones de pestañas',
      'Volumen ruso',
      'Lifting de pestañas',
      'Uñas esculpidas',
      'Nail art',
      'Esmaltado semipermanente',
    ],
    sameAs: [brand.instagram, brand.instagramNails],
    openingHoursSpecification: businessHours
      .filter((h) => h.opens)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAY_MAP[h.day],
        opens: h.opens,
        closes: h.closes,
      })),
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${brand.url}/#reservar`,
      name: 'Reservar turno de uñas o pestañas en Bernal',
    },
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      url: `${brand.url}/#reservar`,
      priceCurrency: 'ARS',
      price: s.price,
      availability: 'https://schema.org/InStock',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: `${s.description} Servicio de ${s.category} en Bernal Centro.`,
        serviceType: s.category === 'pestañas' ? 'Eyelash extension' : 'Nail salon service',
        areaServed: 'Bernal, Buenos Aires',
        provider: { '@id': `${brand.url}/#business` },
      },
    })),
  }
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${brand.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${brand.url}/#website`,
    name: `${brand.name} | Uñas y Pestañas en Bernal`,
    url: brand.url,
    description: seo.description,
    inLanguage: 'es-AR',
    publisher: { '@id': `${brand.url}/#business` },
  }
}

export function getBreadcrumbSchema() {
  const items = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios de uñas y pestañas', path: '/#servicios' },
    { name: 'Reservar turno', path: '/#reservar' },
    { name: 'Contacto Bernal Centro', path: '/#contacto' },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${brand.url}${item.path === '/' ? '/' : item.path}`,
    })),
  }
}

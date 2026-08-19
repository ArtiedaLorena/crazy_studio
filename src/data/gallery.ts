import { brand } from '../config/brand'

export type GalleryCategory = 'pestañas' | 'uñas'

export interface GalleryItem {
  src: string
  alt: string
  category: GalleryCategory
  handle: string
}

export const instagramProfiles = [
  {
    id: 'pestañas' as const,
    label: 'Pestañas',
    handle: brand.instagramHandle,
    url: brand.instagram,
    embed: 'https://www.instagram.com/crazy_lashestudio/embed',
    description: 'Extensiones, volumen ruso, lifting y mega volumen.',
  },
  {
    id: 'uñas' as const,
    label: 'Uñas',
    handle: brand.instagramNailsHandle,
    url: brand.instagramNails,
    embed: 'https://www.instagram.com/crazy._nail/embed',
    description: 'Esculpidas, nail art, kapping y semipermanente.',
  },
] as const

/**
 * Fotos locales. Para agregar trabajos:
 * 1. Guardá las imágenes en public/gallery/lashes o public/gallery/nails
 * 2. Agregá una entrada acá
 */
export const galleryItems: GalleryItem[] = []

export interface Service {
  id: string
  name: string
  description: string
  duration: number
  price: number
  popular?: boolean
  category: 'pestañas' | 'uñas'
}

export interface BookingData {
  serviceId: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  notes: string
}

export type BookingStep = 'service' | 'date' | 'time' | 'details' | 'confirm'

export interface SavedBooking extends BookingData {
  id: string
  createdAt: string
}

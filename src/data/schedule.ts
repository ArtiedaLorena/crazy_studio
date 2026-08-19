import { addDays, format, isBefore, isSunday, parseISO, startOfDay } from 'date-fns'
import { es } from 'date-fns/locale'

export const BUSINESS_HOURS = {
  start: 10,
  end: 19,
  saturdayEnd: 16,
  slotInterval: 30,
  closedDays: [0], // Domingo
}

export function getAvailableDates(daysAhead = 30): Date[] {
  const today = startOfDay(new Date())
  const dates: Date[] = []

  for (let i = 1; i <= daysAhead; i++) {
    const date = addDays(today, i)
    if (!BUSINESS_HOURS.closedDays.includes(date.getDay())) {
      dates.push(date)
    }
  }

  return dates
}

export function getTimeSlots(durationMinutes: number, dateISO?: string): string[] {
  const slots: string[] = []
  const { start, slotInterval, saturdayEnd } = BUSINESS_HOURS
  const isSaturday = dateISO ? parseISO(dateISO).getDay() === 6 : false
  const end = isSaturday ? saturdayEnd : BUSINESS_HOURS.end
  for (let hour = start; hour < end; hour++) {
    for (let min = 0; min < 60; min += slotInterval) {
      const endMinutes = hour * 60 + min + durationMinutes
      const endHour = Math.floor(endMinutes / 60)
      const endMin = endMinutes % 60

      if (endHour > end || (endHour === end && endMin > 0)) continue

      const time = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`
      slots.push(time)
    }
  }

  // Simular algunos horarios ocupados de forma determinista
  const occupiedIndices = new Set([2, 5, 8, 11, 14, 17, 20])
  return slots.filter((_, i) => !occupiedIndices.has(i % 24))
}

export function isDateAvailable(date: Date): boolean {
  const today = startOfDay(new Date())
  return !isBefore(date, today) && !isSunday(date)
}

export function formatDateLabel(date: Date): string {
  return format(date, "EEEE d 'de' MMMM", { locale: es })
}

export function formatDateShort(date: Date): string {
  return format(date, 'd MMM', { locale: es })
}

export function formatDateISO(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}

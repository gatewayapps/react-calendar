import { addWeeks, endOfWeek, startOfDay, startOfMonth, startOfWeek } from 'date-fns'
import { DayOfWeek } from './DayOfWeek'

export function getCalendarStartDate(date: Date, weekStartsOn: DayOfWeek = DayOfWeek.Sunday): Date {
  return startOfWeek(startOfMonth(date), { weekStartsOn })
}

export function getCalendarEndDate(
  date: Date,
  numberOfWeeks: number,
  weekStartsOn: DayOfWeek = DayOfWeek.Sunday
): Date {
  const startDate = getCalendarStartDate(date, weekStartsOn)
  return startOfDay(endOfWeek(addWeeks(startDate, numberOfWeeks - 1), { weekStartsOn }))
}

import { addWeeks, endOfWeek, isSameDay, startOfDay, startOfMonth, startOfWeek } from 'date-fns'
import { DayOfWeek } from './DayOfWeek'
import { IEvent } from './event'
import { IEventSource } from './eventSource'
import { throttle } from './throttle'

export function getCalendarStartDate(
  date: Date,
  weekStartsOn: DayOfWeek = DayOfWeek.Sunday,
  numberOfWeeks: number
): Date {
  return startOfWeek(numberOfWeeks === 6 ? startOfMonth(date) : date, { weekStartsOn })
}

export function getCalendarEndDate(
  date: Date,
  numberOfWeeks: number,
  weekStartsOn: DayOfWeek = DayOfWeek.Sunday
): Date {
  const startDate = getCalendarStartDate(date, weekStartsOn, numberOfWeeks)
  return startOfDay(endOfWeek(addWeeks(startDate, numberOfWeeks - 1), { weekStartsOn }))
}

export function getEventsForDay(date: Date, events?: IEventSource[]): IEvent[] {
  return events
    ? events.flatMap(({ events }) => events).filter((event) => isSameDay(event.date, date))
    : []
}

export function setupScrollSync(element: HTMLDivElement, shouldScrollSync?: boolean) {
  const masterScrollEventHandler = (evt: Event) => {
    /* The acutal updating of the scroll position is throttle to prevent sluggish 
     scrolling behaviour when it is trying to rapidly update the scroll positions.
     Throttled to 24 milliseconds is roughly 42 frames per second. */
    const updateScrollPosition = throttle((scrollTop: number) => {
      const dayScrollers = document.querySelectorAll('.events-container')
      if (dayScrollers) {
        dayScrollers.forEach((dayScroller) => {
          dayScroller.scrollTop = scrollTop
        })
      }
    }, 24)

    const scrollTop = (evt.currentTarget as HTMLElement).scrollTop
    updateScrollPosition(scrollTop)
  }

  const defaultScrollHandler = (evt: Event) =>
    (element.scrollTop = (evt.currentTarget as HTMLElement).scrollTop)
  element.onscroll = shouldScrollSync ? masterScrollEventHandler : defaultScrollHandler
}

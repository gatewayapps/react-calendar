import { addWeeks, endOfWeek, startOfDay, startOfMonth, startOfWeek } from 'date-fns'
import { DayOfWeek } from './DayOfWeek'
import { IEvent } from './event'
import { IEventSource } from './eventSource'
import { throttle } from './throttle'
import { isSameDay } from 'date-fns'

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

export function getEventsForDay(date: Date, events?: IEventSource[]): IEvent[] {
  return events
    ? events.flatMap(({ events }) => events).filter((event) => isSameDay(event.date, date))
    : []
}

function masterScrollEventHandler(evt: Event) {
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

export function setupScrollSync(shouldScrollSync?: boolean) {
  const scrollWrappers = document.querySelectorAll('.events-container')

  if (scrollWrappers && scrollWrappers.length > 0) {
    scrollWrappers.forEach((container) => {
      const element = container as HTMLElement
      const defaultScrollHandler = (evt: Event) =>
        (element.scrollTop = (evt.currentTarget as HTMLElement).scrollTop)
      element.onscroll = shouldScrollSync ? masterScrollEventHandler : defaultScrollHandler
    })
  }
}
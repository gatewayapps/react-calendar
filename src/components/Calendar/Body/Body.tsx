import { Interval, eachDayOfInterval, format } from 'date-fns'
import * as React from 'react'
import {
  getCalendarEndDate,
  getCalendarStartDate,
  getEventsForDay
} from '../../../lib/calendarUtils'
import { DayOfWeek } from '../../../lib/DayOfWeek'
import Day from '../Day'
import { IEvent } from '../../../lib/event'
import { IEventSource } from '../../../lib/eventSource'
import { BodyContainer, WeekdayHeader } from './Body.styled'
import { isWithinInterval } from 'date-fns'

interface IBodyProps {
  currentMonth: Date
  events?: IEventSource[]
  getCalendarDates?: (values: { start: Date; end: Date }) => void
  shouldScrollSync?: boolean
  numberOfWeeks: number
  weekStartsOn: DayOfWeek
  dayHeaderComponent?: (props: { date: Date }) => JSX.Element
  eventComponent?: (props: { event: IEvent }) => JSX.Element
  validRange?: Interval
}

const Body: React.FunctionComponent<IBodyProps> = (props) => {
  const start = React.useMemo(() => getCalendarStartDate(props.currentMonth, props.weekStartsOn), [
    props.currentMonth,
    props.weekStartsOn
  ])
  const end = React.useMemo(
    () => getCalendarEndDate(props.currentMonth, props.numberOfWeeks, props.weekStartsOn),
    [props.currentMonth, props.numberOfWeeks, props.weekStartsOn]
  )
  const allDays = React.useMemo(() => eachDayOfInterval({ start, end }), [start, end])

  const daysWithinValidRange = React.useMemo(() => {
    if (!props.validRange || allDays.length <= 0) {
      return true
    }

    const { start, end } = props.validRange
    return allDays.every((day) => isWithinInterval(day, { start, end }))
  }, [])

  React.useEffect(() => {
    if (props.getCalendarDates) {
      props.getCalendarDates({ end, start })
    }
  }, [props.getCalendarDates, start, end])

  if (!daysWithinValidRange) {
    return null
  }

  return (
    <BodyContainer numberOfWeeks={props.numberOfWeeks}>
      {allDays
        .slice(0, 7)
        .map((date) => format(date, 'EEEE'))
        .map((weekday, index) => (
          <WeekdayHeader key={weekday} row={1} column={index + 1}>
            {weekday}
          </WeekdayHeader>
        ))}
      {allDays.map((date, index) => {
        const row = Math.floor(index / 7) + 2
        const column = (index % 7) + 1
        return (
          <Day
            key={date.toISOString()}
            currentMonth={props.currentMonth}
            date={date}
            events={getEventsForDay(date, props.events)}
            row={row}
            shouldScrollSync={props.shouldScrollSync}
            column={column}
            dayHeaderComponent={props.dayHeaderComponent}
            eventComponent={props.eventComponent}
          />
        )
      })}
    </BodyContainer>
  )
}

export default Body

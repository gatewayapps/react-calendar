import * as React from 'react'
import { BodyContainer, WeekdayHeader } from './Body.styled'
import { Interval, eachDayOfInterval, format, isWithinInterval } from 'date-fns'
import Day from '../Day'
import { DayOfWeek } from '../../../lib/DayOfWeek'
import { IEvent } from '../../../lib/event'
import { IEventSource } from '../../../lib/eventSource'
import { getEventsForDay } from '../../../lib/calendarUtils'

interface IBodyProps {
  currentSpan: Date
  start: Date
  end: Date
  events?: IEventSource[]
  getCalendarDates?: (values: { start: Date; end: Date }) => void
  shouldScrollSync?: boolean
  numberOfWeeks: number
  weekStartsOn: DayOfWeek
  dayHeaderComponent?: (props: { date: Date }) => JSX.Element
  eventComponent?: (props: { event: IEvent }) => JSX.Element
  validRange?: Interval
}

const Body: React.FunctionComponent<IBodyProps> = ({ start, end, ...props }) => {
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
            currentMonth={props.currentSpan}
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

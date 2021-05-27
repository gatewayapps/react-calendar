import { eachDay, format } from 'date-fns'
import * as React from 'react'
import {
  getCalendarEndDate,
  getCalendarStartDate,
  getEventsForDay
} from '../../../lib/calendarUtils'
import { DayOfWeek } from '../../../lib/DayOfWeek'
import Day from '../Day'
import { IEventSource } from '../../../lib/eventSource'
import { BodyContainer, WeekdayHeader } from './Body.styled'

interface IBodyProps {
  currentMonth: Date
  events?: IEventSource[]
  getCalendarDates?: (values: { start: Date; end: Date }) => void
  shouldScrollSync?: boolean
  numberOfWeeks: number
  weekStartsOn: DayOfWeek
  dayHeaderComponent?: React.ReactNode
}

const Body: React.FunctionComponent<IBodyProps> = (props) => {
  const startDate = React.useMemo(
    () => getCalendarStartDate(props.currentMonth, props.weekStartsOn),
    [props.currentMonth, props.weekStartsOn]
  )
  const endDate = React.useMemo(
    () => getCalendarEndDate(props.currentMonth, props.numberOfWeeks, props.weekStartsOn),
    [props.currentMonth, props.numberOfWeeks, props.weekStartsOn]
  )
  const allDays = React.useMemo(() => eachDay(startDate, endDate), [startDate, endDate])

  React.useEffect(() => {
    if (props.getCalendarDates) {
      props.getCalendarDates({ end: endDate, start: startDate })
    }
  }, [props.getCalendarDates, startDate, endDate])

  return (
    <BodyContainer numberOfWeeks={props.numberOfWeeks}>
      {allDays
        .slice(0, 7)
        .map((date) => format(date, 'dddd'))
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
          />
        )
      })}
    </BodyContainer>
  )
}

export default Body

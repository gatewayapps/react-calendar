import { eachDay, format } from 'date-fns'
import * as React from 'react'
import {
  getCalendarEndDate,
  getCalendarStartDate,
  getEventsForDay,
  setupScrollSync
} from '../../../lib/calendarUtils'
import { DayOfWeek } from '../../../lib/DayOfWeek'
import Day from '../Day'
import { IEventSource } from '../../../lib/eventSource'
import { BodyContainer, WeekdayHeader } from './Body.styled'

interface IBodyProps {
  currentMonth: Date
  events?: IEventSource[]
  shouldScrollSync?: boolean
  numberOfWeeks: number
  weekStartsOn: DayOfWeek
}

const Body: React.FunctionComponent<IBodyProps> = (props) => {
  const startDate = getCalendarStartDate(props.currentMonth, props.weekStartsOn)
  const endDate = getCalendarEndDate(props.currentMonth, props.numberOfWeeks, props.weekStartsOn)
  const allDays = eachDay(startDate, endDate)

  React.useEffect(() => {
    setupScrollSync(props.shouldScrollSync)
  }, [props.shouldScrollSync])

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
            column={column}
          />
        )
      })}
    </BodyContainer>
  )
}

export default Body

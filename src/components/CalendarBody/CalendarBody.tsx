import { eachDay, format } from 'date-fns'
import * as React from 'react'
import { getCalendarEndDate, getCalendarStartDate } from '../../lib/calendarUtils'
import { DayOfWeek } from '../../lib/DayOfWeek'
import CalendarDay from '../CalendarDay'
import { BodyContainer, WeekdayHeader } from './CalendarBody.styled'

interface ICalendarBodyProps {
  currentMonth: Date
  numberOfWeeks: number
  weekStartsOn: DayOfWeek
}

const CalendarBody: React.FunctionComponent<ICalendarBodyProps> = (props) => {
  const startDate = getCalendarStartDate(props.currentMonth, props.weekStartsOn)
  const endDate = getCalendarEndDate(props.currentMonth, props.numberOfWeeks, props.weekStartsOn)
  const allDays = eachDay(startDate, endDate)
  return (
    <BodyContainer numberOfWeeks={props.numberOfWeeks}>
      {allDays
        .slice(0, 7)
        .map((date) => format(date, 'dddd'))
        .map((weekday) => (
          <WeekdayHeader key={weekday}>{weekday}</WeekdayHeader>
        ))}
      {allDays.map((date) => (
        <CalendarDay key={date.toISOString()} currentMonth={props.currentMonth} date={date} />
      ))}
    </BodyContainer>
  )
}

export default CalendarBody

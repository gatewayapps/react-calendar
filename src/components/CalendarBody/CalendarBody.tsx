import { eachDay } from 'date-fns'
import * as React from 'react'
import { getCalendarEndDate, getCalendarStartDate } from '../../lib/calendarUtils'
import CalendarDay from '../CalendarDay'
import { BodyContainer } from './CalendarBody.styled'

interface ICalendarBodyProps {
  currentMonth: Date
  numberOfWeeks: number
}

const CalendarBody: React.FunctionComponent<ICalendarBodyProps> = (props) => {
  const startDate = getCalendarStartDate(props.currentMonth)
  const endDate = getCalendarEndDate(props.currentMonth, props.numberOfWeeks)
  return (
    <BodyContainer numberOfWeeks={props.numberOfWeeks}>
      {eachDay(startDate, endDate).map((date) => (
        <CalendarDay key={date.toISOString()} currentMonth={props.currentMonth} date={date} />
      ))}
    </BodyContainer>
  )
}

export default CalendarBody

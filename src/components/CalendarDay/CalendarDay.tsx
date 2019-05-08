import { isSameMonth, isToday } from 'date-fns'
import * as React from 'react'
import { DayContainer, DayHeader, EventsContainer } from './CalendarDay.styled'

interface ICalendarDayProps {
  currentMonth: Date
  date: Date
}

const CalendarDay: React.FunctionComponent<ICalendarDayProps> = (props) => {
  return (
    <DayContainer
      isCurrentMonth={isSameMonth(props.currentMonth, props.date)}
      isToday={isToday(props.date)}>
      <DayHeader>{props.date.getDate()}</DayHeader>
      <EventsContainer />
    </DayContainer>
  )
}

export default CalendarDay

import { isSameMonth, isToday } from 'date-fns'
import * as React from 'react'
import { DayContainer, DayHeader, EventsContainer } from './CalendarDay.styled'

interface ICalendarDayProps {
  currentMonth: Date
  date: Date
  row: number
  column: number
}

const CalendarDay: React.FunctionComponent<ICalendarDayProps> = (props) => {
  return (
    <DayContainer
      isCurrentMonth={isSameMonth(props.currentMonth, props.date)}
      isToday={isToday(props.date)}
      row={props.row}
      column={props.column}>
      <DayHeader>{props.date.getDate()}</DayHeader>
      <EventsContainer />
    </DayContainer>
  )
}

export default CalendarDay

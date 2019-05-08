import { startOfMonth } from 'date-fns'
import React, { useState } from 'react'
import { DEFAULT_NUMBER_OF_WEEKS } from '../../constants'
import CalendarBody from '../CalendarBody'
import CalendarHeader from '../CalendarHeader'
import { CalendarContainer } from './Calendar.styled'

export interface ICalendarProps {
  selectedDate?: Date
}

const Calendar: React.FunctionComponent<ICalendarProps> = (props: ICalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(props.selectedDate || new Date())
  )
  return (
    <CalendarContainer>
      <CalendarHeader currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <CalendarBody currentMonth={currentMonth} numberOfWeeks={DEFAULT_NUMBER_OF_WEEKS} />
    </CalendarContainer>
  )
}

export default Calendar

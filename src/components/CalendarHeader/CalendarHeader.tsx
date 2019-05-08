import { addMonths, format, subMonths } from 'date-fns'
import * as React from 'react'
import { HeaderContainer, Title } from './CalendarHeader.styled'

interface ICalendarHeaderProps {
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
}

const CalendarHeader: React.FunctionComponent<ICalendarHeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <Title>{format(props.currentMonth, 'MMMM YYYY')}</Title>
      <div>
        <button onClick={() => props.setCurrentMonth(subMonths(props.currentMonth, 1))}>
          Prev
        </button>
        <button onClick={() => props.setCurrentMonth(addMonths(props.currentMonth, 1))}>
          Next
        </button>
      </div>
    </HeaderContainer>
  )
}

export default CalendarHeader

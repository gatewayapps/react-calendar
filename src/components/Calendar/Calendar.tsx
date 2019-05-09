import { startOfMonth } from 'date-fns'
import React, { useState } from 'react'
import { DEFAULT_NUMBER_OF_WEEKS, DEFAULT_WEEK_STARTS_ON } from '../../lib/constants'
import { DayOfWeek } from '../../lib/DayOfWeek'
import { ThemeProvider } from '../../styles/styled-components'
import { defaultTheme } from '../../styles/theme'
import Body from './Body'
import { CalendarContainer } from './Calendar.styled'
import Header from './Header'

export interface ICalendarProps {
  defaultDate?: Date
  weekStartsOn?: DayOfWeek
}

const Calendar: React.FunctionComponent<ICalendarProps> = (props: ICalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(props.defaultDate || new Date())
  )
  return (
    <ThemeProvider theme={defaultTheme}>
      <CalendarContainer>
        <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <Body
          currentMonth={currentMonth}
          numberOfWeeks={DEFAULT_NUMBER_OF_WEEKS}
          weekStartsOn={props.weekStartsOn || DEFAULT_WEEK_STARTS_ON}
        />
      </CalendarContainer>
    </ThemeProvider>
  )
}

export default Calendar

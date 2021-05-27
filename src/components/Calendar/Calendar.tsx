import { startOfMonth } from 'date-fns'
import React, { useState } from 'react'
import { DEFAULT_NUMBER_OF_WEEKS, DEFAULT_WEEK_STARTS_ON } from '../../lib/constants'
import { DayOfWeek } from '../../lib/DayOfWeek'
import { IEventSource } from '../../lib/eventSource'
import { ThemeProvider } from '../../styles/styled-components'
import { defaultTheme } from '../../styles/theme'
import Body from './Body'
import { CalendarContainer } from './Calendar.styled'
import Header from './Header'
import { IEvent } from '../../lib/event'

export interface ICalendarProps {
  defaultDate?: Date
  events?: IEventSource[]
  getCalendarDates?: (values: { start: Date; end: Date }) => void
  weekStartsOn?: DayOfWeek
  shouldScrollSync?: boolean
  shouldShowDatePicker?: boolean
  shouldShowTodayButton?: boolean
  dayHeaderComponent?: (props: { date: Date }) => JSX.Element
  eventComponent?: (props: { event: IEvent }) => JSX.Element
}

const Calendar: React.FunctionComponent<ICalendarProps> = (props) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(props.defaultDate || new Date())
  )
  return (
    <ThemeProvider theme={defaultTheme}>
      <CalendarContainer>
        <Header
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          shouldShowTodayButton={props.shouldShowTodayButton}
          shouldShowDatePicker={props.shouldShowDatePicker}
        />
        <Body
          currentMonth={currentMonth}
          events={props.events}
          getCalendarDates={props.getCalendarDates}
          numberOfWeeks={DEFAULT_NUMBER_OF_WEEKS}
          weekStartsOn={props.weekStartsOn || DEFAULT_WEEK_STARTS_ON}
          shouldScrollSync={props.shouldScrollSync}
          dayHeaderComponent={props.dayHeaderComponent}
          eventComponent={props.eventComponent}
        />
      </CalendarContainer>
    </ThemeProvider>
  )
}

export default Calendar

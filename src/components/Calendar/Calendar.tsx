import { startOfMonth } from 'date-fns'
import React, { useState } from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { CalendarContainer, CalendarBodyContainer } from './Calendar.styled'
import { DEFAULT_NUMBER_OF_WEEKS, DEFAULT_WEEK_STARTS_ON } from '../../lib/constants'
import { Interval, parseISO } from 'date-fns'
import {
  getCalendarEndDate,
  getCalendarStartDate,
} from '../../lib/calendarUtils'
import Body from './Body'
import { DayOfWeek } from '../../lib/DayOfWeek'
import Header from './Header'
import { IEvent } from '../../lib/event'
import { IEventSource } from '../../lib/eventSource'
import { ThemeProvider } from '../../styles/styled-components'
import { View } from '../../lib/view'
import { defaultTheme } from '../../styles/theme'

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
  views?: View[]
  validRange?: { start: Date | string; end: Date | string }
  loadingComponent?: JSX.Element
  weeks?: number
}

const Calendar: React.FunctionComponent<ICalendarProps> = (props) => {
  const [activeTab, setActiveTab] = React.useState<number>(0)
  const [numOfWeeks, setNumOfWeeks] = React.useState<number>(DEFAULT_NUMBER_OF_WEEKS)
  const [currentSpan, setCurrentSpan] = useState<Date>(
    startOfMonth(props.defaultDate ?? new Date())
  )

  const start = React.useMemo(() => getCalendarStartDate(currentSpan, props.weekStartsOn, numOfWeeks), [
    currentSpan,
    props.weekStartsOn,
    numOfWeeks
  ])

  const end = React.useMemo(
    () => getCalendarEndDate(currentSpan, numOfWeeks, props.weekStartsOn),
    [currentSpan, numOfWeeks, props.weekStartsOn]
  )

  const range: Interval | undefined = React.useMemo(() => {
    if (!props.validRange) {
      return undefined
    }

    const { start, end } = props.validRange
    return {
      start: typeof start === 'string' ? parseISO(start) : start,
      end: typeof end === 'string' ? parseISO(end) : end
    }
  }, [props.validRange])

  React.useEffect(() => {
    if(props.weeks && props.weeks > 0 && activeTab === 0) {
      setNumOfWeeks(props.weeks)
    }
  }, [props.weeks])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CalendarContainer>
        <Header
          currentSpan={currentSpan}
          numberOfWeeks={numOfWeeks}
          setCurrentSpan={setCurrentSpan}
          setActiveTab={setActiveTab}
          setNumOfWeeks={setNumOfWeeks}
          shouldShowTodayButton={props.shouldShowTodayButton}
          shouldShowDatePicker={props.shouldShowDatePicker}
          validRange={range}
          views={props.views}
        />
        <CalendarBodyContainer>
        {props.loadingComponent}
        {props.views ? (
          <>
            <TabContent activeTab={activeTab}>
              <TabPane tabId={0}>
                <Body
                  currentSpan={currentSpan}
                  start={start}
                  end={end}
                  events={props.events}
                  getCalendarDates={props.getCalendarDates}
                  numberOfWeeks={numOfWeeks}
                  weekStartsOn={props.weekStartsOn || DEFAULT_WEEK_STARTS_ON}
                  shouldScrollSync={props.shouldScrollSync}
                  dayHeaderComponent={props.dayHeaderComponent}
                  eventComponent={props.eventComponent}
                  validRange={range}
                />
              </TabPane>
              {props.views.map(({ component }, i) => (
                <TabPane key={i} tabId={i + 1}>
                  {component({ startDate: start, endDate: end, events: props.events, validRange: range })}
                </TabPane>
              ))}
            </TabContent>
          </>
        ) : (
          <Body
            currentSpan={currentSpan}
            start={start}
            end={end}
            events={props.events}
            getCalendarDates={props.getCalendarDates}
            numberOfWeeks={numOfWeeks}
            weekStartsOn={props.weekStartsOn || DEFAULT_WEEK_STARTS_ON}
            shouldScrollSync={props.shouldScrollSync}
            dayHeaderComponent={props.dayHeaderComponent}
            eventComponent={props.eventComponent}
            validRange={range}
          />
        )}
        </CalendarBodyContainer>
      </CalendarContainer>
    </ThemeProvider>
  )
}

export default Calendar

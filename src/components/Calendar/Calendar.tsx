import { startOfMonth } from 'date-fns'
import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { DEFAULT_NUMBER_OF_WEEKS, DEFAULT_WEEK_STARTS_ON } from '../../lib/constants'
import { DayOfWeek } from '../../lib/DayOfWeek'
import { IEventSource } from '../../lib/eventSource'
import { ThemeProvider } from '../../styles/styled-components'
import { defaultTheme } from '../../styles/theme'
import Body from './Body'
import { CalendarContainer } from './Calendar.styled'
import Header from './Header'
import { IEvent } from '../../lib/event'
import { Interval } from 'date-fns'
import { View } from '../../lib/view'

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
}

const Calendar: React.FunctionComponent<ICalendarProps> = (props) => {
  const [activeTab, setActiveTab] = React.useState<number>(1)
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(props.defaultDate || new Date())
  )

  const range: Interval | undefined = React.useMemo(() => {
    if (!props.validRange) {
      return undefined
    }

    const { start, end } = props.validRange
    return { start: new Date(start), end: new Date(end) }
  }, [props.validRange])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CalendarContainer>
        <Header
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          shouldShowTodayButton={props.shouldShowTodayButton}
          shouldShowDatePicker={props.shouldShowDatePicker}
          validRange={range}
        />
        {props.views && props.views.length > 0 ? (
          <>
            <Nav tabs>
              <NavItem>
                <NavLink
                  onClick={(): void => {
                    setActiveTab(1)
                  }}>
                  Standard View
                </NavLink>
              </NavItem>
              {props.views.map(({ name }, i) => {
                ;<NavItem>
                  <NavLink
                    onClick={(): void => {
                      setActiveTab(i + 1)
                    }}>
                    {name}
                  </NavLink>
                </NavItem>
              })}
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1}>
                <Body
                  currentMonth={currentMonth}
                  events={props.events}
                  getCalendarDates={props.getCalendarDates}
                  numberOfWeeks={DEFAULT_NUMBER_OF_WEEKS}
                  weekStartsOn={props.weekStartsOn || DEFAULT_WEEK_STARTS_ON}
                  shouldScrollSync={props.shouldScrollSync}
                  dayHeaderComponent={props.dayHeaderComponent}
                  eventComponent={props.eventComponent}
                  validRange={range}
                />
              </TabPane>
              {props.views.map(({ component }, i) => (
                <TabPane tabId={i + 1}>
                  {props.events && range ? component({ events: props.events, range }) : null}
                </TabPane>
              ))}
            </TabContent>
          </>
        ) : (
          <Body
            currentMonth={currentMonth}
            events={props.events}
            getCalendarDates={props.getCalendarDates}
            numberOfWeeks={DEFAULT_NUMBER_OF_WEEKS}
            weekStartsOn={props.weekStartsOn || DEFAULT_WEEK_STARTS_ON}
            shouldScrollSync={props.shouldScrollSync}
            dayHeaderComponent={props.dayHeaderComponent}
            eventComponent={props.eventComponent}
            validRange={range}
          />
        )}
      </CalendarContainer>
    </ThemeProvider>
  )
}

export default Calendar

import cn from 'classnames'
import { isSameMonth, isToday } from 'date-fns'
import * as React from 'react'
import { DayContainer, DayHeader, EventsContainer } from './Day.styled'
import Event from '../Event'
import { IEvent } from '../../../lib/event'
import { setupScrollSync } from '../../../lib/calendarUtils'

interface IDayProps {
  currentMonth: Date
  date: Date
  events: IEvent[]
  row: number
  column: number
  shouldScrollSync?: boolean
  dayHeaderComponent?: React.ReactNode
}

const CalendarDay: React.FunctionComponent<IDayProps> = ({ dayHeaderComponent, ...props }) => {
  const [eventContainerRef, setEventContainerRef] = React.useState<HTMLDivElement | null>(null)
  const dayClasses = cn({
    firstDayOfWeek: props.column === 1,
    lastDayOfWeek: props.column === 7
  })

  const updateScrollSync = React.useCallback(
    (element: HTMLDivElement) => {
      setupScrollSync(element, props.shouldScrollSync)
    },
    [props.shouldScrollSync]
  )

  React.useEffect(() => {
    if (eventContainerRef) {
      updateScrollSync(eventContainerRef)
    }
  }, [eventContainerRef, updateScrollSync])

  return (
    <DayContainer
      className={dayClasses}
      isCurrentMonth={isSameMonth(props.currentMonth, props.date)}
      isToday={isToday(props.date)}
      row={props.row}
      column={props.column}>
      <DayHeader>
        {props.date.getDate()}
        {dayHeaderComponent}
      </DayHeader>
      <EventsContainer ref={setEventContainerRef}>
        {props.events.map((event) => (
          <Event {...event} key={event.id} />
        ))}
      </EventsContainer>
    </DayContainer>
  )
}

export default CalendarDay

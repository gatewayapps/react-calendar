import cn from 'classnames'
import { isSameMonth, isToday } from 'date-fns'
import * as React from 'react'
import { DayContainer, DayHeader, EventsContainer } from './Day.styled'
import Event from '../Event'
import { IEvent } from '../../../lib/event'

interface IDayProps {
  currentMonth: Date
  date: Date
  events: IEvent[]
  row: number
  column: number
}

const CalendarDay: React.FunctionComponent<IDayProps> = (props) => {
  const dayClasses = cn({
    firstDayOfWeek: props.column === 1,
    lastDayOfWeek: props.column === 7
  })

  return (
    <DayContainer
      className={dayClasses}
      isCurrentMonth={isSameMonth(props.currentMonth, props.date)}
      isToday={isToday(props.date)}
      row={props.row}
      column={props.column}>
      <DayHeader>{props.date.getDate()}</DayHeader>
      <EventsContainer>
        {props.events.map((event) => (
          <Event {...event} key={event.id} />
        ))}
      </EventsContainer>
    </DayContainer>
  )
}

export default CalendarDay

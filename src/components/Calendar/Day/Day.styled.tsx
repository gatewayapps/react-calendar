import styled from '../../../styles/styled-components'

export interface IDayContainerProps {
  isCurrentMonth?: boolean
  isToday?: boolean
  row: number
  column: number
}

export const DayContainer = styled.div<IDayContainerProps>`
  background: ${(props) => {
    if (!props.isCurrentMonth) {
      return props.theme.calendarDay.otherMonthBackgroundColor
    } else if (props.isToday) {
      return props.theme.calendarDay.todayBackgroundColor
    } else {
      return props.theme.calendarDay.currentMonthBackgroundColor
    }
  }};
  border: 1px solid ${(props) => props.theme.calendarDay.borderColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  /* IE 11 Support */
  -ms-grid-row: ${(props) => props.row};
  -ms-grid-column: ${(props) => props.column};

  &:not(.firstDayOfWeek) {
    border-left-width: 0.5px;
  }

  &:not(.lastDayOfWeek) {
    border-right-width: 0.5px;
  }
`

export const DayHeader = styled.div`
  background-color: #eee;
  border-bottom: 1px solid ${(props) => props.theme.calendarDay.borderColor};
  font-size: 0.85em;
  font-weight: bold;
  padding: 0 0.5em;
`

export const EventsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`

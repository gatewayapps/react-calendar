import styled from 'styled-components'

export interface IDayContainerProps {
  isCurrentMonth?: boolean
  isToday?: boolean
  row: number
  column: number
}

export const DayContainer = styled.div<IDayContainerProps>`
  background: ${(props) =>
    props.isCurrentMonth ? (props.isToday ? 'lightGreen' : 'white') : '#eee'};
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  /* IE 11 Support */
  -ms-grid-row: ${(props) => props.row};
  -ms-grid-column: ${(props) => props.column};
`

export const DayHeader = styled.div`
  background-color: #eee;
  border-bottom: 1px solid black;
  font-size: 0.85em;
  font-weight: bold;
`

export const EventsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`

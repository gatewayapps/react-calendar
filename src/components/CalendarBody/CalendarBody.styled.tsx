import styled from '../../styles/styled-components'

export interface IBodyContainerProps {
  numberOfWeeks: number
}

export const BodyContainer = styled.div<IBodyContainerProps>`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto repeat(${(props) => props.numberOfWeeks}, 1fr);
  /* IE11 Support */
  display: -ms-grid;
  -ms-grid-columns: ${() => '1fr '.repeat(7).trim()};
  -ms-grid-rows: auto ${(props) => '1fr '.repeat(props.numberOfWeeks).trim()};
`

export interface IWeekdayHeaderProps {
  row: number
  column: number
}

export const WeekdayHeader = styled.div<IWeekdayHeaderProps>`
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.25em;
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  /* IE 11 Support */
  -ms-grid-row: ${(props) => props.row};
  -ms-grid-column: ${(props) => props.column};
`

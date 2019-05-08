import styled from 'styled-components'

export interface IBodyContainerProps {
  numberOfWeeks: number
}

export const BodyContainer = styled.div<IBodyContainerProps>`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: auto repeat(${(props) => props.numberOfWeeks}, 1fr);
`

export const WeekdayHeader = styled.div`
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.25em;
`

import styled from '../../styles/styled-components'

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .tab-content {
    display: flex;
    flex: 1;
  }

  .tab-pane {
    display: none;
    flex: 1;

    &.active {
      display: flex;
    }
  }
`

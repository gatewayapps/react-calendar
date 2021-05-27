import { addMonths, format, subMonths } from 'date-fns'
import * as React from 'react'
import { HeaderContainer, NavContainer, Title } from './Header.styled'
import { faChevronLeft, faChevronRight, faStopwatch } from '@fortawesome/pro-solid-svg-icons'
import DatePicker from '../DatePicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IHeaderProps {
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
  shouldShowDatePicker?: boolean
  shouldShowTodayButton?: boolean
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <div />
      <Title>{format(props.currentMonth, 'MMMM YYYY')}</Title>
      <NavContainer>
        {props.shouldShowTodayButton && (
          <button
            style={{ marginRight: '10px' }}
            className="nav-button"
            onClick={() => props.setCurrentMonth(new Date())}>
            <FontAwesomeIcon icon={faStopwatch} />
            <span>Today</span>
          </button>
        )}
        <button
          style={{ marginRight: '5px' }}
          className="nav-button"
          onClick={() => props.setCurrentMonth(subMonths(props.currentMonth, 1))}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {props.shouldShowDatePicker && (
          <DatePicker
            className="nav-button"
            dateFormat="mm/yy"
            view="month"
            yearRange="2015:2050"
            onChange={({ value }) => props.setCurrentMonth(value as Date)}
            yearNavigator
          />
        )}
        <button
          style={{ marginLeft: '5px' }}
          className="nav-button"
          onClick={() => props.setCurrentMonth(addMonths(props.currentMonth, 1))}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header

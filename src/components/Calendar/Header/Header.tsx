import { Interval, addMonths, format, isSameMonth, isWithinInterval, subMonths } from 'date-fns'
import * as React from 'react'
import { HeaderContainer, NavContainer, Title } from './Header.styled'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { faChevronLeft, faChevronRight, faStopwatch } from '@fortawesome/pro-solid-svg-icons'
import DatePicker from '../DatePicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { View } from '../../../lib/view'

interface IHeaderProps {
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
  setActiveTab: (tab: number) => void
  shouldShowTodayButton?: boolean
  shouldShowDatePicker?: boolean
  validRange?: Interval
  views?: View[]
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const validRange = React.useMemo(() => { if(!props.validRange) { return undefined }; return { start: new Date(props.validRange.start), end: new Date(props.validRange.end) } }, [props.validRange])
  console.log({ validRange })

  return (
    <HeaderContainer>
      {props.views ? <Nav tabs>
              <NavItem>
                <NavLink
                  onClick={(): void => {
                    props.setActiveTab(1)
                  }}>
                  Standard View
                </NavLink>
              </NavItem>
              {props.views.map(({ name }, i) => (
                <NavItem>
                  <NavLink
                    onClick={(): void => {
                      props.setActiveTab(i + 1)
                    }}>
                    {name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav> : <div />}
      <Title>{format(props.currentMonth, 'MMMM yyyy')}</Title>
      <NavContainer>
        {props.shouldShowTodayButton && (
          <button
            disabled={isSameMonth(props.currentMonth, new Date())}
            style={{ marginRight: '10px' }}
            className="nav-button"
            onClick={() => props.setCurrentMonth(new Date())}>
            <FontAwesomeIcon icon={faStopwatch} />
            <span>Today</span>
          </button>
        )}
        <button
          disabled={validRange ? !isWithinInterval(subMonths(props.currentMonth, 1), validRange) : false}
          style={{ marginRight: '5px' }}
          className="nav-button"
          onClick={() => props.setCurrentMonth(subMonths(props.currentMonth, 1))}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {props.shouldShowDatePicker && (
          <DatePicker
            onChange={(evt) => props.setCurrentMonth(evt as Date)}
            minDate={validRange?.start}
            maxDate={validRange?.end}
            showMonthYearPicker
            showYearDropdown
          />
        )}
        <button
          disabled={validRange ? !isWithinInterval(addMonths(props.currentMonth, 1), validRange) : false}
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

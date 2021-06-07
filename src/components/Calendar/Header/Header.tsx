import { Interval, addWeeks, addMonths, format, isSameMonth, isWithinInterval, subWeeks } from 'date-fns'
import * as React from 'react'
import { HeaderContainer, NavContainer, Title } from './Header.styled'
import { TabList, Tab } from 'react-tabs'
import { faChevronLeft, faChevronRight, faStopwatch } from '@fortawesome/pro-solid-svg-icons'
import { DEFAULT_NUMBER_OF_WEEKS } from '../../../lib/constants'
import DatePicker from '../DatePicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { View } from '../../../lib/view'
import subMonths from 'date-fns/subMonths'

interface IHeaderProps {
  currentSpan: Date
  numberOfWeeks: number
  setActiveTab: (index: number) => void
  setCurrentSpan: (date: Date) => void
  setNumOfWeeks: (weeks: number) => void
  shouldShowTodayButton?: boolean
  shouldShowDatePicker?: boolean
  validRange?: Interval
  views?: View[]
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const validRange = React.useMemo(() => { if(!props.validRange) { return undefined }; return { start: new Date(props.validRange.start), end: new Date(props.validRange.end) } }, [props.validRange])

  const navigatePrevspan = React.useMemo(() => {
    if(props.numberOfWeeks === 6) {
      return subMonths(props.currentSpan, 1)
    }
    
    return subWeeks(props.currentSpan, props.numberOfWeeks)
  },[props.currentSpan, props.numberOfWeeks])

  const navigateNextspan = React.useMemo(() => {
    if(props.numberOfWeeks === 6) {
      return addMonths(props.currentSpan, 1)
    }

    return addWeeks(props.currentSpan, props.numberOfWeeks)
  },[props.currentSpan, props.numberOfWeeks])

  return (
    <HeaderContainer>
      {props.views ? <TabList>
                <Tab
                  onClick={(): void => {
                    props.setActiveTab(0)
                    props.setNumOfWeeks(DEFAULT_NUMBER_OF_WEEKS)
                  }}>
                  Standard View
                </Tab>
              {props.views.map(({ name, weeks }, i) => (
                  <Tab
                    key={i}
                    onClick={(): void => {
                      props.setActiveTab(i + 1)
                      props.setNumOfWeeks(weeks ?? DEFAULT_NUMBER_OF_WEEKS)
                    }}>
                    {name}
                  </Tab>
              ))}
            </TabList> : <div />}
      <Title>{format(props.currentSpan, 'MMMM yyyy')}</Title>
      <NavContainer>
        {props.shouldShowTodayButton && (
          <button
            disabled={isSameMonth(props.currentSpan, new Date())}
            style={{ marginRight: '10px' }}
            className="nav-button"
            onClick={() => props.setCurrentSpan(new Date())}>
            <FontAwesomeIcon icon={faStopwatch} />
            <span>Today</span>
          </button>
        )}
        <button
          disabled={validRange ? !isWithinInterval(navigatePrevspan, validRange) : false}
          style={{ marginRight: '5px' }}
          className="nav-button"
          onClick={() => props.setCurrentSpan(navigatePrevspan)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {props.shouldShowDatePicker && (
          <DatePicker
            onChange={(evt) => props.setCurrentSpan(evt as Date)}
            minDate={validRange?.start}
            maxDate={validRange?.end}
            showMonthYearPicker
            showYearDropdown
          />
        )}
        <button
          disabled={validRange ? !isWithinInterval(navigateNextspan, validRange) : false}
          style={{ marginLeft: '5px' }}
          className="nav-button"
          onClick={() => props.setCurrentSpan(navigateNextspan)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header

import '@fortawesome/fontawesome-pro/js/all.min.js'
import * as React from 'react'
import {
  CalendarDatePicker,
  CalandarDatePickerButton,
  CalendarDatePickerWrapper
} from './DatePicker.styled'
import { Calendar } from '@bit/primefaces.primereact.calendar'
import { CalendarProps } from '@bit/primefaces.primereact.calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarEdit } from '@fortawesome/pro-solid-svg-icons'
import { onDatePickerOpen } from '../../../lib/calendarUtils'

const DatePicker: React.FunctionComponent<CalendarProps> = ({ className, ...props }) => {
  const calendarDatePickerRef = React.createRef<Calendar>()

  const openDatePicker = React.useCallback(
    (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onDatePickerOpen(evt, calendarDatePickerRef)
    },
    [calendarDatePickerRef]
  )

  return (
    <CalandarDatePickerButton
      className={`${className} date-picker-button`}
      onClick={openDatePicker}>
      <FontAwesomeIcon icon={faCalendarEdit} />
      <span>Select Date</span>
      <CalendarDatePickerWrapper>
        <CalendarDatePicker {...props} ref={calendarDatePickerRef} />
      </CalendarDatePickerWrapper>
    </CalandarDatePickerButton>
  )
}

export default DatePicker

import '@fortawesome/fontawesome-pro/js/all.min.js'
import * as React from 'react'
import { CalandarDatePickerButton, CalendarDatePickerWrapper } from './DatePicker.styled'
import { Calendar, CalendarProps } from 'primereact/calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarEdit } from '@fortawesome/pro-solid-svg-icons'

const DatePicker: React.FunctionComponent<CalendarProps> = ({ className, ...props }) => {
  const [calendarDatePickerRef, setCalendarDatePickerRef] = React.useState<Calendar | null>(null)

  const openDatePicker = React.useCallback(
    (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (calendarDatePickerRef) {
        const currentCalendarRef = calendarDatePickerRef as any
        currentCalendarRef.onInputFocus(evt)
      }
    },
    [calendarDatePickerRef]
  )

  return (
    <CalandarDatePickerButton className={className} onClick={openDatePicker}>
      <FontAwesomeIcon icon={faCalendarEdit} />
      <span>Select Date</span>
      <CalendarDatePickerWrapper>
        <Calendar {...props} ref={setCalendarDatePickerRef} />
      </CalendarDatePickerWrapper>
    </CalandarDatePickerButton>
  )
}

export default DatePicker

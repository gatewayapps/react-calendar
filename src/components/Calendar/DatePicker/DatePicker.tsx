import '@fortawesome/fontawesome-pro/js/all.min.js'
import * as React from 'react'
import { CalandarDatePickerButton, CalendarDatePickerWrapper } from './DatePicker.styled'
//import { Calendar } from '@bit/primefaces.primereact.calendar'
//import { CalendarProps } from '@bit/primefaces.primereact.calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarEdit } from '@fortawesome/pro-solid-svg-icons'

const DatePicker: React.FunctionComponent = (props) => {
  //const [calendarDatePickerRef, setCalendarDatePickerRef] = React.useState<Calendar | null>(null)

  // const openDatePicker = React.useCallback(
  //   (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     if (calendarDatePickerRef) {
  //       const currentCalendarRef = calendarDatePickerRef as any
  //       currentCalendarRef.onInputFocus(evt)
  //     }
  //   },
  //   [calendarDatePickerRef]
  // )

  return (
    <CalandarDatePickerButton>
      <FontAwesomeIcon icon={faCalendarEdit} />
      <span>Select Date</span>
      <CalendarDatePickerWrapper />
    </CalandarDatePickerButton>
  )
}

export default DatePicker

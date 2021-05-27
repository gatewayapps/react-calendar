import 'react-datepicker/dist/react-datepicker.css'
import * as React from 'react'
import Datepicker, { ReactDatePickerProps } from 'react-datepicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarEdit } from '@fortawesome/pro-solid-svg-icons'

const DatePicker: React.FunctionComponent<ReactDatePickerProps> = (props) => {
  return (
    <Datepicker
      {...props}
      popperPlacement="bottom-end"
      customInput={
        <button className="nav-button" style={{ margin: '0px 5px' }}>
          <FontAwesomeIcon icon={faCalendarEdit} />
          <span>Select Date</span>
        </button>
      }
    />
  )
}

export default DatePicker

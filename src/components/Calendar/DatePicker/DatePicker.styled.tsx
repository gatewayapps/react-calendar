//import { Calendar } from '@bit/primefaces.primereact.calendar'
import styled from '../../../styles/styled-components'

export const CalandarDatePickerButton = styled.button`
  display: inline-block;
  margin: 0px 5px;
  position: relative;
  width: 160px;
`

export const CalendarDatePickerWrapper = styled.div`
  bottom: -25px;
  max-width: 100%;
  position: absolute;
  left: -1px;
`

export const CalendarDatePicker = styled.div`
  display: none;

  input {
    border: 0px;
    height: 0px;
    padding: 0px;
  }

  &.p-inputwrapper-focus {
    display: block !important;
  }

  .p-datepicker {
    background-color: #ffffff;
    color: #666666;
    border: 1px solid #dadada;
    border-radius: 2px;
    min-width: auto;
    width: auto;
    padding: 0.857em;
    position: absolute;

    &:not(.p-datepicker-inline) {
      border: 1px solid #eaeaea;
      box-shadow: 0 0 6px 0 rgb(0 0 0 / 16%);
    }

    &.p-input-overlay-visible {
      display: block !important;
    }

    .p-datepicker-header {
      padding: 0.429em 0.857em 0.429em 0.857em;
      position: relative;
      background-color: #ffffff;
      color: #666666;
      border-radius: 0;
    }

    .p-monthpicker .p-monthpicker-month {
      width: 18.3%;
      display: inline-block;
      text-align: center;
      padding: 0.5em;
      cursor: pointer;
    }

    .p-link {
      text-align: left;
      background-color: transparent;
      background: transparent;
      margin: 0;
      padding: 0;
      border: 0;
      cursor: pointer;
    }

    .p-datepicker-prev,
    .p-datepicker-next {
      color: #a6a6a6;
      top: 5px;
      position: absolute;
      width: 1.8em;
      height: 1.8em;
      cursor: pointer;
      transition: color 0.2s, box-shadow 0.2s;

      span {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -0.5em;
        margin-left: -0.5em;
      }
    }

    .p-datepicker-prev:before,
    .p-datepicker-next:before {
      font-family: 'Font Awesome 5 Pro', 'Font Awesome 5 Free';
      font-weight: 900;
    }

    .p-datepicker-prev {
      left: 8px;
    }

    .p-datepicker-next {
      right: -8px;
    }

    .p-datepicker-prev:before {
      content: '\f053';
    }

    .p-datepicker-next:before {
      content: '\f054';
    }
  }
`

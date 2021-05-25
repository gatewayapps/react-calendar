export interface ICalendarTheme {
  backgroundColor: string
}

export interface ICalendarDayTheme {
  currentMonthBackgroundColor: string
  otherMonthBackgroundColor: string
  todayBackgroundColor: string
  borderColor: string
  headerBackgroundColor: string
}

export interface IEventTheme {
  backgroundColor: string
  borderColor: string
  color: string
}

export interface ITheme {
  calendar: ICalendarTheme
  calendarDay: ICalendarDayTheme
  event: IEventTheme
}

export const defaultTheme: ITheme = {
  calendar: {
    backgroundColor: '#fff'
  },
  calendarDay: {
    borderColor: '#000',
    currentMonthBackgroundColor: '#fff',
    headerBackgroundColor: '#eee',
    otherMonthBackgroundColor: '#eee',
    todayBackgroundColor: 'lightYellow'
  },
  event: {
    backgroundColor: '#ddd',
    borderColor: '#000',
    color: '#000'
  }
}

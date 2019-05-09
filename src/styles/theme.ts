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

export interface ITheme {
  calendar: ICalendarTheme
  calendarDay: ICalendarDayTheme
}

export const defaultTheme: ITheme = {
  calendar: {
    backgroundColor: '#fff'
  },
  calendarDay: {
    borderColor: 'black',
    currentMonthBackgroundColor: '#fff',
    headerBackgroundColor: '#eee',
    otherMonthBackgroundColor: '#eee',
    todayBackgroundColor: 'lightYellow'
  }
}

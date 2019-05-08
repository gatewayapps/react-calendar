import { getCalendarEndDate, getCalendarStartDate } from '../src/lib/calendarUtils'
import { DayOfWeek } from '../src/lib/DayOfWeek'

describe('getCalendarMonthStartDate', () => {
  it('Should return 2/24/2019 when date is 3/15/2019', () => {
    expect(getCalendarStartDate(new Date(2019, 2, 15))).toEqual(new Date(2019, 1, 24))
  })

  it('Should return 2/24/2019 when date is 3/1/2019', () => {
    expect(getCalendarStartDate(new Date(2019, 2, 1))).toEqual(new Date(2019, 1, 24))
  })

  it('Should return 2/24/2019 when date is 3/31/2019', () => {
    expect(getCalendarStartDate(new Date(2019, 2, 31))).toEqual(new Date(2019, 1, 24))
  })

  it('Should return 2/25/2019 when date is 3/15/2019 and week starts on Monday', () => {
    expect(getCalendarStartDate(new Date(2019, 2, 15), DayOfWeek.Monday)).toEqual(
      new Date(2019, 1, 25)
    )
  })

  it('Should return 2/25/2019 when date is 3/1/2019 and week starts on Monday', () => {
    expect(getCalendarStartDate(new Date(2019, 2, 1), DayOfWeek.Monday)).toEqual(
      new Date(2019, 1, 25)
    )
  })

  it('Should return 2/25/2019 when date is 3/31/2019 and week starts on Monday', () => {
    expect(getCalendarStartDate(new Date(2019, 2, 31), DayOfWeek.Monday)).toEqual(
      new Date(2019, 1, 25)
    )
  })
})

describe('getCalendarEndDate', () => {
  it('Should return 5/11/2019 when date is 4/15/2019 and number of weeks is 6', () => {
    expect(getCalendarEndDate(new Date(2019, 3, 15), 6)).toEqual(new Date(2019, 4, 11))
  })

  it('Should return 4/27/2019 when date is 4/15/2019 and number of weeks is 4', () => {
    expect(getCalendarEndDate(new Date(2019, 3, 15), 4)).toEqual(new Date(2019, 3, 27))
  })

  it('Should return 5/12/2019 when date is 4/15/2019 and number of weeks is 6 and week starts on Monday', () => {
    expect(getCalendarEndDate(new Date(2019, 3, 15), 6, DayOfWeek.Monday)).toEqual(
      new Date(2019, 4, 12)
    )
  })

  it('Should return 4/22/2019 when date is 4/15/2019 and number of weeks is 4 and week starts on Monday', () => {
    expect(getCalendarEndDate(new Date(2019, 3, 15), 4, DayOfWeek.Monday)).toEqual(
      new Date(2019, 3, 28)
    )
  })
})

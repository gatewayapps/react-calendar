"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calendarUtils_1 = require("../src/lib/calendarUtils");
const DayOfWeek_1 = require("../src/lib/DayOfWeek");
const Month_1 = require("../src/lib/Month");
describe('getCalendarMonthStartDate', () => {
    it('Should return 2/24/2019 when date is 3/15/2019', () => {
        expect(calendarUtils_1.getCalendarStartDate(new Date(2019, Month_1.Month.March, 15))).toEqual(new Date(2019, Month_1.Month.February, 24));
    });
    it('Should return 2/24/2019 when date is 3/1/2019', () => {
        expect(calendarUtils_1.getCalendarStartDate(new Date(2019, Month_1.Month.March, 1))).toEqual(new Date(2019, Month_1.Month.February, 24));
    });
    it('Should return 2/24/2019 when date is 3/31/2019', () => {
        expect(calendarUtils_1.getCalendarStartDate(new Date(2019, Month_1.Month.March, 31))).toEqual(new Date(2019, Month_1.Month.February, 24));
    });
    it('Should return 2/25/2019 when date is 3/15/2019 and week starts on Monday', () => {
        expect(calendarUtils_1.getCalendarStartDate(new Date(2019, Month_1.Month.March, 15), DayOfWeek_1.DayOfWeek.Monday)).toEqual(new Date(2019, Month_1.Month.February, 25));
    });
    it('Should return 2/25/2019 when date is 3/1/2019 and week starts on Monday', () => {
        expect(calendarUtils_1.getCalendarStartDate(new Date(2019, Month_1.Month.March, 1), DayOfWeek_1.DayOfWeek.Monday)).toEqual(new Date(2019, Month_1.Month.February, 25));
    });
    it('Should return 2/25/2019 when date is 3/31/2019 and week starts on Monday', () => {
        expect(calendarUtils_1.getCalendarStartDate(new Date(2019, Month_1.Month.March, 31), DayOfWeek_1.DayOfWeek.Monday)).toEqual(new Date(2019, Month_1.Month.February, 25));
    });
});
describe('getCalendarEndDate', () => {
    it('Should return 5/11/2019 when date is 4/15/2019 and number of weeks is 6', () => {
        expect(calendarUtils_1.getCalendarEndDate(new Date(2019, Month_1.Month.April, 15), 6)).toEqual(new Date(2019, 4, 11));
    });
    it('Should return 4/27/2019 when date is 4/15/2019 and number of weeks is 4', () => {
        expect(calendarUtils_1.getCalendarEndDate(new Date(2019, Month_1.Month.April, 15), 4)).toEqual(new Date(2019, Month_1.Month.April, 27));
    });
    it('Should return 5/12/2019 when date is 4/15/2019 and number of weeks is 6 and week starts on Monday', () => {
        expect(calendarUtils_1.getCalendarEndDate(new Date(2019, Month_1.Month.April, 15), 6, DayOfWeek_1.DayOfWeek.Monday)).toEqual(new Date(2019, Month_1.Month.May, 12));
    });
    it('Should return 4/22/2019 when date is 4/15/2019 and number of weeks is 4 and week starts on Monday', () => {
        expect(calendarUtils_1.getCalendarEndDate(new Date(2019, Month_1.Month.April, 15), 4, DayOfWeek_1.DayOfWeek.Monday)).toEqual(new Date(2019, Month_1.Month.April, 28));
    });
});
//# sourceMappingURL=calendarUtils.spec.js.map
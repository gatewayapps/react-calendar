"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScrollSync = exports.getEventsForDay = exports.getCalendarEndDate = exports.getCalendarStartDate = void 0;
const date_fns_1 = require("date-fns");
const DayOfWeek_1 = require("./DayOfWeek");
const throttle_1 = require("./throttle");
const date_fns_2 = require("date-fns");
function getCalendarStartDate(date, weekStartsOn = DayOfWeek_1.DayOfWeek.Sunday) {
    return date_fns_1.startOfWeek(date_fns_1.startOfMonth(date), { weekStartsOn });
}
exports.getCalendarStartDate = getCalendarStartDate;
function getCalendarEndDate(date, numberOfWeeks, weekStartsOn = DayOfWeek_1.DayOfWeek.Sunday) {
    const startDate = getCalendarStartDate(date, weekStartsOn);
    return date_fns_1.startOfDay(date_fns_1.endOfWeek(date_fns_1.addWeeks(startDate, numberOfWeeks - 1), { weekStartsOn }));
}
exports.getCalendarEndDate = getCalendarEndDate;
function getEventsForDay(date, events) {
    return events
        ? events.flatMap(({ events }) => events).filter((event) => date_fns_2.isSameDay(event.date, date))
        : [];
}
exports.getEventsForDay = getEventsForDay;
function masterScrollEventHandler(evt) {
    /* The acutal updating of the scroll position is throttle to prevent sluggish
       scrolling behaviour when it is trying to rapidly update the scroll positions.
       Throttled to 24 milliseconds is roughly 42 frames per second. */
    const updateScrollPosition = throttle_1.throttle((scrollTop) => {
        const dayScrollers = document.querySelectorAll('.events-container');
        if (dayScrollers) {
            dayScrollers.forEach((dayScroller) => {
                dayScroller.scrollTop = scrollTop;
            });
        }
    }, 24);
    const scrollTop = evt.currentTarget.scrollTop;
    updateScrollPosition(scrollTop);
}
function setupScrollSync(shouldScrollSync) {
    const scrollWrappers = document.querySelectorAll('.events-container');
    if (scrollWrappers && scrollWrappers.length > 0) {
        scrollWrappers.forEach((container) => {
            const element = container;
            const defaultScrollHandler = (evt) => (element.scrollTop = evt.currentTarget.scrollTop);
            element.onscroll = shouldScrollSync ? masterScrollEventHandler : defaultScrollHandler;
        });
    }
}
exports.setupScrollSync = setupScrollSync;
//# sourceMappingURL=calendarUtils.js.map
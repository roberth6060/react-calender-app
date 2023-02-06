import moment from "moment";

export const createMonthDates = (totalDays: number, month: moment.Moment) => {
  // Array to collect dates of previous month
  let MonthDates = [];
  for (let i = 0; i < totalDays; i++) {
    // Calculate moment based on start of previous month, plus day offset
    let prevMonthDay = month.clone().add(i, "days").format("YYYY-MM-DD");
    MonthDates.push(prevMonthDay);
  }
  return MonthDates;
};
/**
 * Function - to get remainder
 * @returns remainer
 */
const getRemainder = (x: number, y: number) => {
  if (Number.isInteger(y / x)) {
    return 0;
  }
  return 7 - (y % x);
};

/**
 * Function - to offset dates
 * @param curDate format YYYY-MM-DD
 * @param type previous, current, next month
 */
export const dateAdjustment = (curDate: string, type: string) => {
  let day = moment(curDate).startOf("month").format("dddd");

  let offset = 0;

  if (day === "Sunday") {
    offset = 0;
  }
  if (day === "Monday") {
    offset = 1;
  }
  if (day === "Tuesday") {
    offset = 2;
  }
  if (day === "Wednesday") {
    offset = 3;
  }
  if (day === "Thursday") {
    offset = 4;
  }
  if (day === "Friday") {
    offset = 5;
  }
  if (day === "Saturday") {
    offset = 6;
  }

  if (type.trim().toLowerCase() === "previous") {
    let prevMonth = moment(curDate).add(1, "month").startOf("month");
    let prevMonthDays = prevMonth.daysInMonth();
    const nextPrev = createMonthDates(prevMonthDays, prevMonth);
    nextPrev.splice(0, prevMonthDays - offset);
    return nextPrev;
  }

  if (type.trim().toLowerCase() === "current") {
    let curMonth = moment(curDate).startOf("month");
    let curMonthDays = curMonth.daysInMonth();
    return createMonthDates(curMonthDays, curMonth);
  }

  if (type.trim().toLowerCase() === "next") {
    const nextMonth = moment(curDate).add(1, "month").startOf("month");
    const nextMonthDays = nextMonth.daysInMonth();
    const days = moment(curDate).daysInMonth();
    const remainder = getRemainder(7, offset + days);
    const nextDays = createMonthDates(nextMonthDays, nextMonth);
    nextDays.splice(remainder);
    return nextDays;
  }
};

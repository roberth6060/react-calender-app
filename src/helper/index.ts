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

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import moment from "moment";
import { CalendarDates } from "./style/CalendarGrid-Style";
import CalendarDate from "../common/CalendarDate/CalendarDate";
import { createMonthDates } from "../../helper";

export const CalendarGrid = ()=> {
  
const { curDate} = useAppSelector((state)=> state.calendar);

let day = moment(curDate).startOf("month").format("dddd");

let offset = 0;
if (day === "Sunday") {
            offset =0;
          }
          if (day === "Monday") {
     
       offset =1;
          }
          if (day === "Tuesday") {
         
            offset =2;
          }
          if (day === "Wednesday") {
          
             offset =3;
          }
          if (day === "Thursday") {
            offset =4;
            
          }
          if (day === "Friday") {
           offset =5;
    
          }
          if (day === "Saturday") {
        offset =6;
          }

// Calc prev, current, next month days
let curMonth = moment(curDate).startOf('month');
let curMonthDays = curMonth.daysInMonth();
let prevMonth = moment(curDate).add(1, "month").startOf('month');
let prevMonthDays = prevMonth.daysInMonth();
let nextMonth = moment(curDate).add(1, "month").startOf('month');
let nextMonthDays = nextMonth.daysInMonth();



 const  days = moment(curDate).daysInMonth();
 
      const getRemainder= (x: number, y: number)=> {
          if (Number.isInteger(y / x)) {
            return 0;
          }
          return 7 - (y % x);
        }
let remainder = getRemainder(7, offset + days);

const prevDays = createMonthDates(prevMonthDays, prevMonth);
const nextDays = createMonthDates(nextMonthDays, nextMonth);
prevDays.splice(0, prevMonthDays-offset);
nextDays.splice(remainder);

return (
    <CalendarDates> 
        <CalendarDate days={prevDays} type="prev"/>
        <CalendarDate curDate={curDate} days={createMonthDates(curMonthDays, curMonth)} type="today"/>
        <CalendarDate days={nextDays} type="next"/>
    </CalendarDates>)
}
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import moment from "moment";
import { CalendarDates } from "./style/CalendarGrid-Style";
import CalendarDate from "../common/CalendarDate/CalendarDate";

export const CalendarGrid = ()=> {
    
    const { curDate} = useAppSelector((state)=> state.calendar);

    const curDays =  Array.from(Array(moment(curDate).daysInMonth()).keys());
     const prevDays =  Array.from(Array(moment(curDate).subtract(1, "month").daysInMonth()).keys());
      const nextDays =  Array.from(Array(moment(curDate).add(1, "month").daysInMonth()).keys());

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

          // Get moment at start date of previous month
var prevMonth = moment(curDate).startOf('month');
var prevMonthDays = prevMonth.daysInMonth();

// Array to collect dates of previous month
var prevMonthDates = [];

for (var i = 0; i < prevMonthDays; i++) {

  // Calculate moment based on start of previous month, plus day offset
  var prevMonthDay = prevMonth.clone().add(i, 'days').format("YYYY-MM-DD");
  
  prevMonthDates.push(prevMonthDay);
}



 const  days = moment(curDate).daysInMonth();
        //Returns the remainder of days / 7
      const getRemainder= (x: number, y: number)=> {
          if (Number.isInteger(y / x)) {
            return 0;
          }
          return 7 - (y % x);
        }
let remainder = getRemainder(7, offset + days);



  
  const prevdaysCount = moment(curDate).subtract(1, "month").daysInMonth();
  const nextsCount = moment(curDate).add(1, "month").daysInMonth();


prevDays.splice(0, prevdaysCount-offset);
nextDays.splice(remainder);


prevDays.reverse();

for (let  i =0; i < prevDays.length; i++) {
    console.log(prevDays)
   curDays.unshift(prevDays[i]);
}

console.log("nextDays", nextDays);

for (let  i =0; i < nextDays.length; i++) {
   curDays.push(nextDays[i]);
   
}
console.log("prev ",prevMonthDates);

return (
    <CalendarDates> 
        <CalendarDate days={prevMonthDates} type="today"/>
    </CalendarDates>)
}
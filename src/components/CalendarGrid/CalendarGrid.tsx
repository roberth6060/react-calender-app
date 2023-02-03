import { useAppDispatch, useAppSelector } from "../../store/hooks";
import moment from "moment";
import { CalendarDates, CalendarEvent, CalendarNumber } from "./style/CalendarGrid-Style";

export const CalendarGrid = ()=> {
    
    const { curDate, eventArray} = useAppSelector((state)=> state.calendar);

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



 const  days = moment(curDate).daysInMonth();
        //Returns the remainder of days / 7
      const getRemainder= (x: number, y: number)=> {
          if (Number.isInteger(y / x)) {
            return 0;
          }
          return 7 - (y % x);
        }
let remainder = getRemainder(7, offset + days);

  const year = moment(curDate).format("YYYY");

  const  month = moment(curDate).format("MM");


  
  const prevdaysCount = moment(curDate).subtract(1, "month").daysInMonth();
  const nextsCount = moment(curDate).add(1, "month").daysInMonth();

  console.log("x: ", prevdaysCount);

console.log("remainder", remainder);

console.log("offset: ", offset);
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
console.log(prevDays);
console.log(curDays);

return (<CalendarDates>

    {curDays.map((curDay,i)=> {             
        return( <div key={i}
		className="calendar-date today-date"
		data-day="${number} 2"
		data-date="${date} 03-2-2023"
		title="${date} 03-2-2023">
            
		    <CalendarNumber>{ curDay + 1}</CalendarNumber>
		    <CalendarEvent onClick={(e)=> {
                e.preventDefault();
                console.log(e.target);
            }}>event</CalendarEvent>
		</div>)
    })}
    </CalendarDates>)
}
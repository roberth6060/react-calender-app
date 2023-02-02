import { render } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import moment from "moment";
import { CalendarDates, CalendarEvent, CalendarNumber } from "./style/CalendarGrid-Style";

export const CalendarGrid = ()=> {
      const {curMonth, curDate} = useAppSelector((state)=> state.calendar);
   const curDays =  Array.from(Array(moment(curDate).daysInMonth()).keys());
   console.log(curDays)
  return (<CalendarDates>
    {curDays.map((curDay)=> {
        return( <button key={curDay}
		className="calendar-date ${type}-date"
		data-day="${number}"
		data-date="${date}"
		title="${date}">
		    <CalendarNumber>{curDay + 1}</CalendarNumber>
		    <CalendarEvent></CalendarEvent>
		</button>)
    })}
    </CalendarDates>)
}
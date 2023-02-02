import { render } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import moment from "moment";

export const CalendarGrid = ()=> {
      const {curMonth, curDate} = useAppSelector((state)=> state.calendar);
   const curDays =  Array.from(Array(moment(curDate).daysInMonth()).keys());
   console.log(curDays)
  return (<>
    {curDays.map((curDay)=> {
        return( <button key={curDay}
		className="calendar-date ${type}-date"
		data-day="${number}"
		data-date="${date}"
		title="${date}">
		    <span className="calendar-number">{curDay}</span>
		    <span className="calendar-events"></span>
		</button>)
    })}
    </>)
}
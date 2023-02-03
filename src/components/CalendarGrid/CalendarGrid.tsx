import { useAppDispatch, useAppSelector } from "../../store/hooks";
import moment from "moment";
import { CalendarDates, CalendarEvent, CalendarNumber } from "./style/CalendarGrid-Style";

export const CalendarGrid = ()=> {
    const {curMonth, curDate} = useAppSelector((state)=> state.calendar);
    const curDays =  Array.from(Array(moment(curDate).daysInMonth()).keys());
  const year = moment(curDate).format("YYYY");

  const  month = moment(curDate).format("MM");



return (<CalendarDates>
    {curDays.map((curDay)=> {
        return( <div key={curDay}
		className="calendar-date ${type}-date"
		data-day="${number}"
		data-date="${date}"
		title="${date}">
		    <CalendarNumber>{curDay + 1}</CalendarNumber>
		    <CalendarEvent></CalendarEvent>
		</div>)
    })}
    </CalendarDates>)
}
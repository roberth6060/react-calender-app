
import moment from "moment";
import EventItem from "../EventItem/EventItem";
import {  CalendarNumber } from "./style/CalendarDate-Style";

interface IDays {
    days: Array<string>,
    type: string,
    curDate?: string,
}
const CalendarDate = (props: IDays)=> {
    return(<>
        {props.days.map((curDay,i)=> {
        
        const day =  moment(curDay).format('D')         
        return( <div key={curDay}
		className={`calendar-date  ${props.type}-date`}
		data-day={day}
		data-date={curDay}
		title={curDay}>
		    <CalendarNumber colorText= {props.curDate===curDay?"white": "black"} bgColor= {props.curDate===curDay?"#6772e5": ""}>{day}</CalendarNumber>
		   <EventItem/>
		</div>)
    })}
    </>)
}

export default CalendarDate;
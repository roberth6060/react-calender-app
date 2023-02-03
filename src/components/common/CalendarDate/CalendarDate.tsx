
import moment from "moment";
import { CalendarEvent, CalendarNumber } from "./style/CalendarDate-Style";

interface IDays {
    days: Array<string>,
    type: string,
}
const CalendarDate = (props: IDays)=> {
    return(<>
        {props.days.map((curDay,i)=> {
        const day =  moment(curDay).format('D')         
        return( <div key={curDay}
		className={`calendar-date ${props.type}-date`}
		data-day={day}
		data-date={curDay}
		title={curDay}>
		    <CalendarNumber>{ day }</CalendarNumber>
		    <CalendarEvent onClick={(e)=> {
                e.preventDefault();
                console.log(e.target);
            }}>
                <span>Design Course</span>
             </CalendarEvent>
		</div>)
    })}
    </>)
}

export default CalendarDate;
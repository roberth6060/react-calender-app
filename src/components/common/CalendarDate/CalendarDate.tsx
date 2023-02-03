import React from "react";
import { CalendarEvent, CalendarNumber } from "./style/CalendarDate-Style";

interface IDays {
    days: Array<string>,
    type: string,
}
const CalendarDate = (props: IDays)=> {
    return(<>
        {props.days.map((curDay,i)=> {             
        return( <div key={i}
		className={`calendar-date ${props.type}-date`}
		data-day={i}
		data-date={curDay}
		title={curDay}>
		    <CalendarNumber>{ i + 1}</CalendarNumber>
		    <CalendarEvent onClick={(e)=> {
                e.preventDefault();
                console.log(e.target);
            }}>event</CalendarEvent>
		</div>)
    })}
    </>)
}

export default CalendarDate;
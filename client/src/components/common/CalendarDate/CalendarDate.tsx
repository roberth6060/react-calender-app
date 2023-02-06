
import moment from "moment";
import { useQuery } from "@apollo/client";
import EventItem from "../EventItem/EventItem";
import {  CalendarNumber } from "./style/CalendarDate-Style";

import { GET_EVENTS_LIST } from "../../../services/queries/get-events-list";
import { EventList_eventList, EventList } from "../../../services/queries/__generated__/EventList";



interface IDays {
    days: Array<string> | undefined,
    type: string,
    curDate?: string,
}

const CalendarDate = (props: IDays)=> {
  const { data} = useQuery<EventList>(GET_EVENTS_LIST, {
  onCompleted(data) {

  },
 });

    return(<>
        {props.days?.map((curDay)=> {
        const day =  moment(curDay).format('D');  
        return( <div onClick={(e)=>{

          console.log(e)
        }} key={curDay}
		className={`calendar-date  ${props.type}-date`}
		data-day={day}
		data-date={curDay}
		title={curDay}>
		   <CalendarNumber colorText= {props.curDate===curDay?"white": "black"} bgColor= {props.curDate===curDay?"#6772e5": ""}>{day}</CalendarNumber>
           {
          data&& data.eventList.map((event: EventList_eventList)=>{
            if(moment(curDay).format("YYYY-MM-DD") ===event.startDate)return <EventItem eventList={event}/> 
          })
           }
		</div>)
    })}
    </>)
}

export default CalendarDate;

import moment from "moment";
import EventItem from "../EventItem/EventItem";
import {  CalendarNumber } from "./style/CalendarDate-Style";
import { useQuery } from "@apollo/client";
import { GET_EVENTS_LIST } from "../../../services/queries/get-events-list";
import { EventList_eventList, EventList } from "../../../services/queries/__generated__/EventList";
import Spinner from "../Spinner/Spinner";



interface IDays {
    days: Array<string>,
    type: string,
    curDate?: string,
}

const CalendarDate = (props: IDays)=> {


  const { data} = useQuery<EventList>(GET_EVENTS_LIST, {
  onCompleted(data) {

  },
 });

    return(<>
        {props.days.map((curDay,i)=> {
        const day =  moment(curDay).format('D');  
        return( <div key={curDay}
		className={`calendar-date  ${props.type}-date`}
		data-day={day}
		data-date={curDay}
		title={curDay}>
		   <CalendarNumber colorText= {props.curDate===curDay?"white": "black"} bgColor= {props.curDate===curDay?"#6772e5": ""}>{day}</CalendarNumber>
           {
          // eslint-disable-next-line array-callback-return
          data&& data.eventList.map((event: EventList_eventList)=>{
            if(moment(curDay).format("YYYY-MM-DD") ===event.startDate)return <EventItem eventList={event}/> 
          })
           }
		</div>)
    })}
    </>)
}

export default CalendarDate;
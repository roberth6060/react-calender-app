
import { useNavigate } from "react-router-dom";
import {   EventList_eventList} from "../../../services/queries/__generated__/EventList";
import { CalendarEvent } from "./style/EventItem";

interface IEventList {
  eventList: EventList_eventList
}

const EventItem: React.FC<IEventList> = (props)=>{
  let navigate = useNavigate(); 

  const routeChange = (event: any) =>{ 
    let path = event.currentTarget.dataset.date; 
    navigate(path);
  }




const {id, startDate, title, startTime, endTime} = props.eventList
    return ( <CalendarEvent key={id} data-date={startDate} onClick={routeChange}>
                <span >
                {title}
                </span>
                <br/>
                <span >{`${startTime} - ${endTime}`}</span>
</CalendarEvent>)
}

export default EventItem;
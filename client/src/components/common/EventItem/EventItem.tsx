import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {   EventList_eventList} from "../../../services/queries/__generated__/EventList";
import { CalendarEvent } from "./style/EventItem";

interface IEventList {
  eventList: EventList_eventList
}

interface EventRouteParams  {
        date: string;
}

const EventItem: React.FC<IEventList> = (props)=>{

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }

const { date } = useParams <keyof EventRouteParams>() as EventRouteParams;
    console.log(date)

const {id, startDate, title, startTime, endTime} = props.eventList
    return ( <CalendarEvent key={id} className={startDate} onClick={routeChange}>
                <span >
                {title}
                </span>
                <br/>
                <span >{`${startTime} - ${endTime}`}</span>
</CalendarEvent>)
}

export default EventItem;
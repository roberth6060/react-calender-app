import {  EventList, EventList_eventList} from "../../../services/queries/__generated__/EventList";
import { CalendarEvent } from "./style/EventItem";

interface IEventList {
  eventList: EventList_eventList
}

const EventItem: React.FC<IEventList> = (props)=>{
const {id, title, startTime, endTime} = props.eventList
    return ( <CalendarEvent key={id}  onClick={(e)=> {
                e.preventDefault();
                console.log(e.target);
            }}>
                <span >
                {title}
                </span>
                <br/>
                <span >{`${startTime} - ${endTime}`}</span>
</CalendarEvent>)
}

export default EventItem;
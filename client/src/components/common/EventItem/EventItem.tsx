import { useNavigate } from "react-router-dom";
import { EventList_eventList } from "../../../services/queries/__generated__/EventList";
import { CalendarEvent, EventConent } from "./style/EventItem";

interface IEventList {
  eventList: EventList_eventList;
}

const EventItem: React.FC<IEventList> = (props) => {
  let navigate = useNavigate();

  const routeChange = (event: React.MouseEvent<HTMLElement>) => {
    let path = event.currentTarget.dataset.date as any;
    navigate(path);
  };

  const { id, startDate, title, startTime, endTime, backgroundColor } =
    props.eventList;
  return (
    <CalendarEvent
      key={id + startDate}
      bgColor={`${backgroundColor}`}
      data-date={startDate}
      onClick={routeChange}
    >
      <EventConent key={id + title}>{title}</EventConent>
      <EventConent
        key={id + startTime}
      >{`${startTime} - ${endTime}`}</EventConent>
    </CalendarEvent>
  );
};

export default EventItem;

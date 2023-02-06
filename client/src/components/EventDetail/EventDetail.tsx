import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { EventList } from "../../services/queries/__generated__/EventList";
import { GET_EVENTS_LIST } from "../../services/queries/get-events-list";
import {
  EventContent,
  EventDetailsContainer,
  ImageCalendar,
  NavLink,
} from "./style/EventDetailStyle";
import { CalendarSubTitle, CalendarTitle, Container } from "../../style";
import { EventRouteParams } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";

const EventDetail = () => {
  const { date } = useParams<keyof EventRouteParams>() as EventRouteParams;
  const { data } = useQuery<EventList>(GET_EVENTS_LIST);
  const filtered = data?.eventList.filter((event) => event.startDate === date);

  return (
    <Container>
      <EventDetailsContainer>
        <NavLink to="/">
          <FontAwesomeIcon icon={faCalendarXmark} />
        </NavLink>
        <CalendarTitle>Event Details</CalendarTitle>
        <ImageCalendar
          src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="calendar"
        />
        <EventContent>
          {filtered &&
            filtered.map((event) => {
              return (
                <>
                  <CalendarSubTitle>{event.title}</CalendarSubTitle>
                  <h3>Description:</h3>
                  <p>{event.description}</p>
                  <h3>Date:</h3>
                  <span>
                    {event.startDate} - {event.endDate}
                  </span>
                  <h3>Time:</h3>
                  <span>
                    {event.startTime} - {event.endTime}
                  </span>
                </>
              );
            })}
        </EventContent>
      </EventDetailsContainer>
    </Container>
  );
};

export default EventDetail;

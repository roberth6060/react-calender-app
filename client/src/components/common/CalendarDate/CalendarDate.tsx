import moment from "moment";
import { useQuery } from "@apollo/client";
import EventItem from "../EventItem/EventItem";
import { CalendarNumber } from "./style/CalendarDateStyle";
import { GET_EVENTS_LIST } from "../../../services/queries/get-events-list";
import {
  EventList_eventList,
  EventList,
} from "../../../services/queries/__generated__/EventList";
import { IDays } from "../../../types";

const CalendarDate = (props: IDays) => {
  const { data } = useQuery<EventList>(GET_EVENTS_LIST);

  return (
    <>
      {props.days?.map((curDay, i) => {
        const day = moment(curDay).format("D");
        return (
          <div
            key={day + i}
            className={`calendar-date  ${props.type}-date`}
            data-day={day}
            data-date={curDay}
            title={curDay}
          >
            <CalendarNumber
               key={day + i}
              colorText={props.curDate === curDay ? "white" : "black"}
              bgColor={props.curDate === curDay ? "#6772e5" : ""}
            >
              {day}
            </CalendarNumber>
            {
              data &&
                data.eventList.map((event: EventList_eventList) => {
                  if (moment(curDay).format("YYYY-MM-DD") === moment(event.startDate).format("YYYY-MM-DD") ){
                    return <EventItem  key={day + i} eventList={event} />;}
                    else {
                      return null;
                    }
                })
            }
          </div>
        );
      })}
    </>
  );
};

export default CalendarDate;

import { useQuery } from "@apollo/client";
import { GET_EVENTS_LIST } from "../../../services/queries/get-events-list";
import { getEventsList } from "../../../services/queries/__generated__/getEventsList";
import Spinner from "../Spinner/Spinner";
import { CalendarEvent } from "./style/EventItem";

const EventItem = ()=>{


    const { data, error, loading } = useQuery<getEventsList>(GET_EVENTS_LIST, {
  onCompleted(data) {
    console.log(data)
    //   setCollection(data.getCars);
    
  },
 });

   if(loading) return <Spinner/>
   if(error) return <p>Something went wrong</p>

    // const arr:getEventsList[] = [{
    //     id: "1",
    //     title: "Opening day",
    //     description: "Hello WOrld",
    //     createdAt: Date.now,
    //     updatedAt: Date.now,
    // }]
    

    return ( data? <CalendarEvent   onClick={(e)=> {
                e.preventDefault();
                console.log(e.target);
            }}>
               {data.eventList.map((a)=>{
                return(<>
                <span>
                    {a.title}
                </span>
                <br/>
                <span>{a.description}</span>
                </>)
               })}
             </CalendarEvent>: <span></span>)
}

export default EventItem;
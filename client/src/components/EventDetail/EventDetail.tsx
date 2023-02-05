
import { useParams } from "react-router-dom";

interface EventRouteParams  {
        date: string;
}
const EventDetail = ()=> {
   const { date } = useParams <keyof EventRouteParams>() as EventRouteParams;
    console.log(date)

    return (
    <>
    <h1>Event Details</h1>
    <h3>Go on a date</h3>
    <p>I want to got  the gym </p>
    </>
    )
}

export default EventDetail;
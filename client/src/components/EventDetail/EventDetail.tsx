import { useParams } from "react-router-dom";

type EventRouteParams = {
        date: string;
}

const EventDetail = ()=> {

const { date } = useParams <keyof EventRouteParams>() as EventRouteParams;
    console.log(date)
    return (
    <>
    <h1>Event Details</h1>
    </>
    )
}

export default EventDetail;
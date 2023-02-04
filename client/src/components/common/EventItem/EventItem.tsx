import { CalendarEvent } from "./style/EventItem";

const EventItem = ()=>{
    const arr = [{
        title: "Event Opening",
        time: "15:00 - 16:00"
    }]

    return (  <CalendarEvent   onClick={(e)=> {
                e.preventDefault();
                console.log(e.target);
            }}>
               {arr.map((a)=>{
                return(<>
                <span>
                    {a.title}
                </span>
                <br/>
                <span>{a.time}</span>
                </>)
               })}
             </CalendarEvent>)
}

export default EventItem;
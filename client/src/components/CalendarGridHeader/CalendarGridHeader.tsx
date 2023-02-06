import moment from "moment";
import { DaysContainer, DaysInWeek } from "./style/CalendarGridHeader-Style";

const CalendarGridHeader = ()=> {
  const days = new Array(...Array(7));
  
    return(<DaysContainer>
      {days.map((_, i)=> {
        return (<DaysInWeek key={i}>{moment().day(i).format('dddd')}</DaysInWeek>);
      })}
  
    </DaysContainer>)
}

export default CalendarGridHeader
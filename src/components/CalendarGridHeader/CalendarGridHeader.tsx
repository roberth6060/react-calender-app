import moment from "moment";
import { DaysContainer } from "./style/CalendarGridHeader-Style";

const CalendarGridHeader = ()=> {
  const days = new Array(...Array(7));


    return(<DaysContainer>
      {days.map((_, i)=> {
        return (<div key={i}>{moment().day(i).format('dddd')}</div>);
      })}
  
    </DaysContainer>)
}

export default CalendarGridHeader
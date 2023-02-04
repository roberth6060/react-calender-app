import { CalendarGrid } from "../CalendarGrid/CalendarGrid";
import CalendarGridHeader from "../CalendarGridHeader/CalendarGridHeader";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import { CalendarContainer } from "./style/Calender-style";

const Calendar = ()=> {
 
  return (
    <>
      <h1>Calendar for B2Match</h1>
      <CalendarHeader/>
      <CalendarContainer>
        <CalendarGridHeader/> 
        <CalendarGrid/> 
      </CalendarContainer>
    </>
 
  )
}
export default Calendar;

import { CalendarTitle, Container } from "../../style";
import { CalendarGrid } from "../CalendarGrid/CalendarGrid";
import CalendarGridHeader from "../CalendarGridHeader/CalendarGridHeader";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import { CalendarContainer } from "./style/CalenderStyle";

const Calendar = ()=> {
  return (
    <Container>
      <CalendarTitle>Calendar App</CalendarTitle>
      <CalendarHeader/>
      <CalendarContainer>
        <CalendarGridHeader/> 
        <CalendarGrid/> 
      </CalendarContainer>
    </Container>
 
  )
}
export default Calendar;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton, CalendarHead } from "./style/CalendarHeader-style";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { decrement, increment ,showtoday} from "../../store/features/CalendarSlice";
import { CalendarSubTitle } from "../../style";

const CalendarHeader = ()=>{
  const dispatch = useAppDispatch();
  const {curDate} = useAppSelector((state)=> state.calendar);
  const year = moment(curDate).format("YYYY");
  const  month = moment(curDate).format("MM");
  const  yearAndMonth = moment(month).format("MMMM") + " " + year;

    return (
    <CalendarHead>
      <CalendarSubTitle>{`${yearAndMonth}`}</CalendarSubTitle>
      <ArrowButton onClick={()=>dispatch(decrement())} type="submit">
      <FontAwesomeIcon icon={faAngleLeft} /> 
      </ArrowButton>
      <ArrowButton onClick={()=>dispatch(showtoday())} >Today</ArrowButton>
      <ArrowButton onClick={()=>dispatch(increment())}  type="submit"> <FontAwesomeIcon icon={faAngleRight} /></ArrowButton>
    </CalendarHead>)
}
export default CalendarHeader;
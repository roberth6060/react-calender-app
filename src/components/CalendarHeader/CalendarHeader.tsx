import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton } from "./style/CalendarHeader-style";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { decrement, increment } from "../../store/features/CalendarSlice";



const CalendarHeader = ()=>{
  const dispatch = useAppDispatch();
  const curMonth = useAppSelector((state)=> state.calendar.curMonth)
  // Variables: 
  const  year = moment(0).format("YYYY")
  const monthAndYear = moment(0).format("MMMM") + " " + year;

  // const [curMonth, setCurMonth] = useState(0);

    return (
    <>
      <h2>{monthAndYear}</h2>
      <ArrowButton onClick={()=>dispatch(decrement())} type="submit">
      <FontAwesomeIcon icon={faAngleLeft} /> 
      </ArrowButton>
      <ArrowButton onClick={()=>dispatch(increment())}  type="submit"> <FontAwesomeIcon icon={faAngleRight} /></ArrowButton>

      <h2>{curMonth}</h2>
    </>)
}
export default CalendarHeader;
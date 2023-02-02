import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton } from "./style/CalendarHeader-style";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { decrement, increment } from "../../store/features/CalendarSlice";



const CalendarHeader = ()=>{
  const dispatch = useAppDispatch();
  const {curMonth, curDate} = useAppSelector((state)=> state.calendar);

  // Variables: 
  const year = moment(curDate).format("YYYY");
  const  month = moment(curDate).format("MM");

    return (
    <>
      <h2>{moment(month).format("MMMM") + " " + year}</h2>
      <ArrowButton onClick={()=>dispatch(decrement())} type="submit">
      <FontAwesomeIcon icon={faAngleLeft} /> 
      </ArrowButton>
      <ArrowButton onClick={()=>dispatch(increment())}  type="submit"> <FontAwesomeIcon icon={faAngleRight} /></ArrowButton>

      <h2>{curMonth}</h2>
    </>)
}
export default CalendarHeader;
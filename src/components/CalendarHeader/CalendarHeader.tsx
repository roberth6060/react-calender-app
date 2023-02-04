import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPlus, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton, CalendarHead } from "./style/CalendarHeader-style";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { decrement, increment ,showtoday} from "../../store/features/CalendarSlice";
import useModal from "../common/Modal/useModal";
import Modal from "../common/Modal/Modal";
import EventForm from "../EventForm/EventForm";
import Calendar from "../Calendar/Calendar";

const CalendarHeader = ()=>{
  const dispatch = useAppDispatch();
  const {curDate} = useAppSelector((state)=> state.calendar);

  // Variables: 
  const year = moment(curDate).format("YYYY");
  const  month = moment(curDate).format("MM");

  const  yearAndMonth = moment(month).format("MMMM") + " " + year;

  const { isOpen, toggle } = useModal();

    return (
    <CalendarHead>
      <h2>{`${yearAndMonth}`}</h2>
     
      <ArrowButton onClick={()=>dispatch(decrement())} type="submit">
      <FontAwesomeIcon icon={faAngleLeft} /> 
      </ArrowButton>
      <ArrowButton onClick={()=>dispatch(showtoday())} >Today</ArrowButton>
      <ArrowButton onClick={()=>dispatch(increment())}  type="submit"> <FontAwesomeIcon icon={faAngleRight} /></ArrowButton>
      <ArrowButton onClick={toggle}><FontAwesomeIcon icon={faPlus} /></ArrowButton>
       <Modal isOpen={isOpen} toggle={toggle}><EventForm/></Modal>
    </CalendarHead>)
}
export default CalendarHeader;
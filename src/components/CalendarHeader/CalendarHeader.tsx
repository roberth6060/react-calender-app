import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton } from "./style/CalendarHeader-style";
import moment from "moment";

const CalendarHeader = ()=>{
  // Variables: 
  const  year = moment(0).format("YYYY")
  const monthAndYear = moment(0).format("MMMM") + " " + year;

  const [curMonth, setCurMonth] = useState(0);
  /**
   * Function - handle upating month on click
   */
  const handleLeftArrow = ()=> {
    setCurMonth(curMonth - 1)
    }
   const handleRigthArrow = ()=> {
    setCurMonth(curMonth + 1)
    }
    
    return (
    <>
      <h2>{monthAndYear}</h2>
      <ArrowButton onClick={handleLeftArrow} type="submit">
      <FontAwesomeIcon icon={faAngleLeft} /> 
      </ArrowButton>
      <ArrowButton onClick={handleRigthArrow}  type="submit"> <FontAwesomeIcon icon={faAngleRight} /></ArrowButton>
    </>)
}
export default CalendarHeader;
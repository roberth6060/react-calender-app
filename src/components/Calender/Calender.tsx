import moment from "moment";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton } from "./style/Calender-style";

const Calendar = ()=> {
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

  return (<>
    <ArrowButton onClick={handleLeftArrow} type="submit">
       <FontAwesomeIcon icon={faAngleLeft} /> 
    </ArrowButton>
    <ArrowButton onClick={handleRigthArrow}  type="submit"> <FontAwesomeIcon icon={faAngleRight} /></ArrowButton>
    
    <h1>Current Month: {curMonth}</h1>
  </>)
}
export default Calendar;
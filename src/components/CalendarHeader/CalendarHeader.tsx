import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton } from "./style/CalendarHeader-style";

const CalendarHeader = ()=>{
     /**
   * Function - handle upating month on click
   */
   const [curMonth, setCurMonth] = useState(0);
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
    </>)
}
export default CalendarHeader;
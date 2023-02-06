import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton, CalendarHead } from "./style/CalendarHeaderStyle";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  decrement,
  increment,
  showtoday,
} from "../../store/features/CalendarSlice";
import { CalendarSubTitle } from "../../style";

const CalendarHeader = () => {
  const dispatch = useAppDispatch();
  const { curDate } = useAppSelector((state) => state.calendar);
  const year = moment(curDate).format("YYYY");
  const month = moment(curDate).format("MM");
  const yearAndMonth = moment(month).format("MMMM") + " " + year;
  //Handle events
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleShowToday = () => {
    dispatch(showtoday());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <CalendarHead>
      <CalendarSubTitle>{`${yearAndMonth}`}</CalendarSubTitle>
      <ArrowButton onClick={handleDecrement} type="submit">
        <FontAwesomeIcon icon={faAngleLeft} />
      </ArrowButton>
      <ArrowButton onClick={handleShowToday}>Today</ArrowButton>
      <ArrowButton onClick={handleIncrement} type="submit">
        <FontAwesomeIcon icon={faAngleRight} />
      </ArrowButton>
    </CalendarHead>
  );
};
export default CalendarHeader;

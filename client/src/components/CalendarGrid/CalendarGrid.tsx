import {  useAppSelector } from "../../store/hooks";
import { CalendarDates } from "./style/CalendarGridStyle";
import CalendarDate from "../common/CalendarDate/CalendarDate";
import { dateAdjustment } from "../../helper";
import { TYPE_OF_MONTH } from "../../types";

export const CalendarGrid = ()=> {
const { curDate} = useAppSelector((state)=> state.calendar);

return (
    <CalendarDates> 
        <CalendarDate days={dateAdjustment(curDate, TYPE_OF_MONTH.PREVIOUSMONTH)} type={TYPE_OF_MONTH.PREVIOUSMONTH}/>
        <CalendarDate curDate={curDate} days={dateAdjustment(curDate, TYPE_OF_MONTH.CURRENTMONTH)} type={TYPE_OF_MONTH.CURRENTMONTH}/>
        <CalendarDate days={dateAdjustment(curDate, TYPE_OF_MONTH.NEXTMONTH)} type={TYPE_OF_MONTH.NEXTMONTH}/>
    </CalendarDates>)
}
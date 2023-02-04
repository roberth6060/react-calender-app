import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import moment from "moment";
import { getEventsList } from "../../services/queries/__generated__/getEventsList";

// Define a type for the slice state
export interface CalendarState {
  curDate: string;
  prevMonthDates: Array<string>;
  nextMonthDates: Array<string>;
  curMonthDates: Array<string>;
  eventArray: Array<number>;
  events: Array<getEventsList>;
}

// Define the initial state using that type
const initialState: CalendarState = {
  curDate: moment().format("YYYY-MM-DD"),
  prevMonthDates: [],
  nextMonthDates: [],
  curMonthDates: [],
  eventArray: [],
  events: [],
};

export const calendarSlice = createSlice({
  name: "month",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  //acctions that can mutate state
  reducers: {
    increment: (state) => {
      state.curDate = moment(state.curDate)
        .add(1, "month")
        .format("MMMM-DD-YYYY");
    },
    showtoday: (state) => {
      state.curDate = moment().format("YYYY-MM-DD");
    },
    decrement: (state) => {
      state.curDate = moment(state.curDate)
        .subtract(1, "month")
        .format("MMMM-DD-YYYY");
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    addEvent: (state, action: PayloadAction<getEventsList>) => {
      console.log(action.payload.eventList);
      state.events = [];
    },
  },
});

export const { increment, decrement, addEvent, showtoday } =
  calendarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.calendar;

export default calendarSlice.reducer;

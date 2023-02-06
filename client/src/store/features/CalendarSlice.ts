import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import moment from "moment";

// Define a type for the slice state
export interface CalendarState {
  curDate: string;
}

// Define the initial state using that type
const initialState: CalendarState = {
  curDate: moment().format("YYYY-MM-DD"),
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
  },
});

export const { increment, decrement, showtoday } = calendarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.calendar;

export default calendarSlice.reducer;

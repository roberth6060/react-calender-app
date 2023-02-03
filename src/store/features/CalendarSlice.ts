import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import moment from "moment";

// Define a type for the slice state
export interface CalendarState {
  curDate: string;
  curMonth: number;
  curYear: number;
}

const today = moment().format("YYYY-MM-DD");

// Define the initial state using that type
const initialState: CalendarState = {
  curDate: today,
  curMonth: 0,
  curYear: 0,
};

export const calendarSlice = createSlice({
  name: "month",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  //acctions that can mutate state
  reducers: {
    increment: (state) => {
      state.curMonth += 1;
      state.curDate = moment(state.curDate)
        .add(1, "month")
        .format("MMMM-DD-YYYY");
    },
    showtoday: (state) => {
      state.curDate = today;
    },
    decrement: (state) => {
      state.curMonth -= 1;
      state.curDate = moment(state.curDate)
        .subtract(1, "month")
        .format("MMMM-DD-YYYY");
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.curMonth = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, showtoday } =
  calendarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.calendar;

export default calendarSlice.reducer;

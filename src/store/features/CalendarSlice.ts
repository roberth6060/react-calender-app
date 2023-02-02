import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface CalendarState {
  curMonth: number;
  curYear: number;
}

const year = new Date().getFullYear;

// Define the initial state using that type
const initialState: CalendarState = {
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
    },
    decrement: (state) => {
      state.curMonth -= 1;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.curMonth = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  calendarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.calendar;

export default calendarSlice.reducer;

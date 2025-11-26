import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return {count: (state.count + 1)};
    },
    decrement: (state) => {
      state.count--;
    }
  }
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
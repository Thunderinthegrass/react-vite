import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  step: 1
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
    updateStep: (state, action) => {
      state.step = action.payload;
    }
  }
})

export const counterReducer = counterSlice.reducer;
export const {increment, decrement, updateStep} = counterSlice.actions;
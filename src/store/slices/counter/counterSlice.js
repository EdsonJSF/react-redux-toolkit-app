import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 99,
    message: "Hello World",
  },
  reducers: {
    addNumberAction(state, { payload }) {
      state.count = state.count + payload;
    },
    subNumberAction(state, { payload }) {
      state.count = state.count - payload;
    },
    changeMessageAction(state, { payload }) {
      state.message = payload;
    },
  },
});

export const { addNumberAction, subNumberAction, changeMessageAction } =
  counterSlice.actions;
export default counterSlice.reducer;

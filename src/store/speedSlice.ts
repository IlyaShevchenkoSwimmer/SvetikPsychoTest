import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface speedInitState {
  value: number;
}

const initialState: speedInitState = {
  value: 3,
};

const speedSlice = createSlice({
  name: "speed",
  initialState,
  reducers: {
    faster: (state) => {
      state.value = state.value + 1 > 10 ? 10 : state.value + 1;
    },
    slower: (state) => {
      state.value = state.value - 1 < 1 ? 1 : state.value - 1;
    },
  },
});

export const { faster, slower } = speedSlice.actions;

export const speedState = (state: RootState) => state.speed.value;

export default speedSlice.reducer;

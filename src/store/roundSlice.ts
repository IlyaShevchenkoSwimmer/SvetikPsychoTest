import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface roundInitState {
  value: number;
}

const initialState: roundInitState = {
  value: 1,
};

const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    nextRound: (state) => {
      state.value += 1;
    },
  },
});

export const { nextRound } = roundSlice.actions;

export const roundState = (state: RootState) => state.round.value;

export default roundSlice.reducer;

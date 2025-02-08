import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface Result {
  stage: number;
  round: number;
  speed: number;
  expectedAngle: number;
  realAngle: number;
  madeCircles: number;
}

interface Results {
  value: Result[];
}

const initialState: Results = {
  value: [],
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.value.push(action.payload.value);
    },
  },
});

export const { addResult } = resultsSlice.actions;

export const resultsState = (state: RootState) => state.results;

export default resultsSlice.reducer;

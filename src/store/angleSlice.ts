import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface angleInitState {
  value: number;
  circles: number;
}

const initialState: angleInitState = {
  value: 90,
  circles: 0,
};

const angleSlice = createSlice({
  name: "angle",
  initialState,
  reducers: {
    forward: (state) => {
      state.value = (state.value + 1) % 360;
      if (state.value === 90) {
        state.circles += 1;
      }
    },
    backward: (state) => {
      state.value = state.value - 1 < 0 ? 359 : state.value - 1;
    },
    setInit: (state) => {
      state.value = initialState.value;
      state.circles = initialState.circles;
    },
  },
});

export const { forward, backward, setInit } = angleSlice.actions;

export const angleState = (state: RootState) => state.angle.value;
export const circlesState = (state: RootState) => state.angle.circles;

export default angleSlice.reducer;

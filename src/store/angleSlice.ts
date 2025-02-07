import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface angleInitState {
  value: number;
}

const initialState: angleInitState = {
  value: 90,
};

const angleSlice = createSlice({
  name: "angle",
  initialState,
  reducers: {
    forward: (state) => {
      state.value = (state.value + 1) % 360;
    },
    backward: (state) => {
      state.value = state.value - 1 < 0 ? 359 : state.value - 1;
    },
    setInit: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { forward, backward, setInit } = angleSlice.actions;

export const angleState = (state: RootState) => state.angle.value;

export default angleSlice.reducer;

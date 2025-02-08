import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface angleClientInitState {
  value: number;
}

const initialState: angleClientInitState = {
  value: 0,
};

const angleClientSlice = createSlice({
  name: "angleClient",
  initialState,
  reducers: {
    forwardClient: (state) => {
      state.value = (state.value + 10) % 360;
      if (state.value === 240) {
        state.value = 310;
      }
    },
    backwardClient: (state) => {
      state.value = state.value - 10 < 0 ? 350 : state.value - 10;
      if (state.value === 300) {
        state.value = 230;
      }
    },
    setInitClient: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { forwardClient, backwardClient, setInitClient } =
  angleClientSlice.actions;

export const angleClientState = (state: RootState) => state.angleClient.value;

export default angleClientSlice.reducer;

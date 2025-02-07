import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface playInitState {
  value: boolean;
}

const initialState: playInitState = {
  value: false,
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    playing: (state) => {
      state.value = !state.value;
    },
  },
});

export const { playing } = playSlice.actions;

export const playState = (state: RootState) => state.play.value;

export default playSlice.reducer;

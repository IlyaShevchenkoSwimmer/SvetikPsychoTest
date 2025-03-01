import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface playInitState {
  value: boolean;
  success: boolean;
  failure: boolean;
}

const initialState: playInitState = {
  value: false,
  success: false,
  failure: false,
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    playing: (state) => {
      state.value = !state.value;
    },
    succeed: (state) => {
      state.success = true;
    },
    failed: (state) => {
      state.failure = true;
    },
    setInitSuccess: (state) => {
      state.success = false;
      state.failure = false;
    },
  },
});

export const { playing, succeed, failed, setInitSuccess } = playSlice.actions;

export const playState = (state: RootState) => state.play.value;

export default playSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface indexInitState {
  value: number;
}

const initialState: indexInitState = {
  value: 2,
};

const ballZIndexSlice = createSlice({
  name: "zIndex",
  initialState,
  reducers: {
    setTop: (state) => {
      state.value = 100;
    },
    setBottom: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setTop, setBottom } = ballZIndexSlice.actions;

export const ballZIndexState = (state: RootState) => state.zIndex.value;

export default ballZIndexSlice.reducer;

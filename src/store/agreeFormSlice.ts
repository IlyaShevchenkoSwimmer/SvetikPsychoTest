import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface agreeInitState {
  value: boolean;
}

const initialState: agreeInitState = {
  value: false,
};

const agreeFormSlice = createSlice({
  name: "agree",
  initialState,
  reducers: {
    agreed: (state) => {
      state.value = true;
    },
  },
});

export const { agreed } = agreeFormSlice.actions;

export const agreeFormState = (state: RootState) => state.agree.value;

export default agreeFormSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface roundInitState {
  value: number;
  modalPos: number;
  modalVis: "visible" | "hidden";
  modalOp: number;
}

const initialState: roundInitState = {
  value: 1,
  modalPos: -50,
  modalVis: "hidden",
  modalOp: 0,
};

const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    nextRound: (state) => {
      // if (state.value === 15) {
      //   state.modalVis = "visible";
      //   state.modalPos = 200;
      //   state.modalOp = 1;
      // }
      if (state.value < 15) {
        state.value += 1;
      }
    },
    setModal: (state) => {
      state.modalVis = "visible";
      state.modalPos = 200;
      state.modalOp = 1;
    },
  },
});

export const { nextRound, setModal } = roundSlice.actions;

export const roundState = (state: RootState) => state.round.value;
export const modalState = (state: RootState) => state.round;

export default roundSlice.reducer;

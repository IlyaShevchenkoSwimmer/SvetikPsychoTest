import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface userInfoInitState {
  name: string;
  lastname: string;
  birthdate: string;
}

const initialState: userInfoInitState = {
  name: "",
  lastname: "",
  birthdate: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.birthdate = action.payload.birthdate;
    },
  },
});

export const { addUser } = userInfoSlice.actions;

export const userInfoState = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import speedSlice from "./speedSlice";
import angleSlice from "./angleSlice";
import angleClientSlice from "./angleClientSlice";
import playSlice from "./playSlice";
import roundSlice from "./roundSlice";
import ballZIndexSlice from "./ballZIndexSlice";
import resultsSlice from "./resultsSlice";
import agreeFormSlice from "./agreeFormSlice";
import userInfoSlice from "./userInfoSlice";

const store = configureStore({
  reducer: {
    speed: speedSlice,
    angle: angleSlice,
    angleClient: angleClientSlice,
    play: playSlice,
    round: roundSlice,
    zIndex: ballZIndexSlice,
    results: resultsSlice,
    agree: agreeFormSlice,
    userInfo: userInfoSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

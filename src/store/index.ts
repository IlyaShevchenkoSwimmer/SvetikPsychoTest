import { configureStore } from "@reduxjs/toolkit";
import speedSlice from "./speedSlice";
import angleSlice from "./angleSlice";
import angleClientSlice from "./angleClientSlice";
import playSlice from "./playSlice";

const store = configureStore({
  reducer: {
    speed: speedSlice,
    angle: angleSlice,
    angleClient: angleClientSlice,
    play: playSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

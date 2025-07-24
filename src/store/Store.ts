import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "../reducers/UserSlice.ts";

const rootReducer = combineReducers({
  user: UserSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

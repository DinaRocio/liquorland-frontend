import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../features/session/sessionSlice"

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
});
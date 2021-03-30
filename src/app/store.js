import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "../features/drinks/drinksSlice";
import sessionReducer from "../features/session/sessionSlice";
import usersReducer from "../features/users/usersSlice"

export default configureStore({
  reducer: {
    drinks: drinksReducer,
    session: sessionReducer,
    users: usersReducer,
  },
});

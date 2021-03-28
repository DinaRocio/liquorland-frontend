import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "../features/drinks/drinksSlice";

const store = configureStore({
  reducer: {
    drinks: drinksReducer,
  },
});

export default store;

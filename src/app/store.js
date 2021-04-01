import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import drinksReducer from "../features/drinks/drinksSlice";
import sessionReducer from "../features/session/sessionSlice";
import usersReducer from "../features/users/usersSlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    drinks: drinksReducer,
    session: sessionReducer,
    users: usersReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

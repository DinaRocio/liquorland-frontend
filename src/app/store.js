import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import drinksReducer from "../features/drinks/drinksSlice";
import sessionReducer from "../features/session/sessionSlice";
import usersReducer from "../features/users/usersSlice";
import cartReducer from "../features/cart/cartSlice";
import brandsReducer from "../features/brands/brandsSlice";
import stylesReducer from "../features/styless/stylesSlice";
import reviewReducer from "../features/review/reviewSlice";
import favoriteReducer from "../features/favorites/favoriteSlice"

export default configureStore({
  reducer: {
    drinks: drinksReducer,
    session: sessionReducer,
    users: usersReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    brands: brandsReducer,
    styles: stylesReducer,
    review: reviewReducer,
  },
});

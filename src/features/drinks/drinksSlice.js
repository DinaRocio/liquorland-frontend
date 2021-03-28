import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DrinkServices } from "../../services/DrinkServices";

const fetchDrink = createAsyncThunk(
  "drinks/fetchDrink",
  new DrinkServices().show
);

const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    drinks: [],
    drink: {},
    status: {},
  },
  reducers: {},
  extraReducers: {
    [fetchDrink.pending]: (state, _) => {
      return { ...state, status: { ...state.status, show: "LOADING" } };
    },
    [fetchDrink.rejected]: (state, action) => {
      return { ...state, status: { ...state.status, show: "ERROR" } };
    },
    [fetchDrink.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        drink: payload,
        status: { ...state.status, show: "SUCCESS" },
      };
    },
  },
});

export default drinksSlice.reducer;

export { fetchDrink };

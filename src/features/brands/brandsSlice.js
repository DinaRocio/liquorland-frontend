import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
  const response = await fetch(`${BASE_URI}/api/brands`, {
    method: "GET",
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return { brands: data };
});

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: {
    [fetchBrands.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchBrands.fulfilled]: (state, action) => {
      state.status = "secceeded";
      state.items = action.payload.brands;
    },
    [fetchBrands.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default brandsSlice.reducer;

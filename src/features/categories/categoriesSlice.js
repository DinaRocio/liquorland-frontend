import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config"

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(`${BASE_URI}/api/categories`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }
    return { categories: data };
  }
);

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async (category) => {
    const response = await fetch(`${BASE_URI}/api/categories/${category}`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }
    return { category: data };
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    item: {},
    status: "idle",
    error: null,
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.categories;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchCategory.pending]: (state, _) => {
      state.status = "loading";
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.item = action.payload.category;
    },
    [fetchCategory.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default categoriesSlice.reducer;

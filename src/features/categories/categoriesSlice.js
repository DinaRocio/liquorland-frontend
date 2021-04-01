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
    statusIndex: "idle",
    statusShow: "idle",
    error: null,
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.statusIndex = "loading";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.statusIndex = "succeeded";
      state.items = action.payload.categories;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.statusIndex = "failed";
      state.error = action.error.message;
    },
    [fetchCategory.pending]: (state, _) => {
      state.statusShow = "loading";
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.statusShow = "succeeded";
      state.item = action.payload.category;
    },
    [fetchCategory.rejected]: (state, action) => {
      state.statusShow = "failed";
      state.error = action.error.message;
    },
  },
});

export default categoriesSlice.reducer;

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

export const fetchBestSelling = createAsyncThunk(
  "categories/fetchBestSelling",
  async () => {
    const response = await fetch(`${BASE_URI}/api/best-sellings?limit=3`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { bestSelling: data };
  }
);

export const fetchTopRecent = createAsyncThunk(
  "categories/fetchTopRecent",
  async () => {
    const response = await fetch(`${BASE_URI}/api/top-recent-drinks?limit=1`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { topRecent: data };
  }
);

export const fetchHighestRated = createAsyncThunk(
  "categories/fetchHighestRated",
  async () => {
    const response = await fetch(`${BASE_URI}/api/top-high-rated-drinks?limit=2`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { highestRated: data };
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    item: {},
    bestSellingItems: {},
    topRecentItems: {},
    highestRatedItems:{},
    statusIndex: "idle",
    statusShow: "idle",
    statusBestSelling:"idle",
    statusTopRecent:"idle",
    statushighestRated: "idle",
    error: null,
  },
  extraReducers: {
    [fetchCategories.pending]: (state, _) => {
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
    [fetchBestSelling.fulfilled]: (state, action) => {
      state.statusBestSelling = "succeded";
      state.bestSellingItems = action.payload.bestSelling;
    },
    [fetchTopRecent.fulfilled]: (state, action) => {
      state.statusTopRecent = "succeded";
      state.topRecentItems = action.payload.topRecent;
    },
    [fetchHighestRated.fulfilled]: (state, action) => {
      state.statusTopRecent = "succeded";
      state.highestRatedItems = action.payload.highestRated;
    },
  },
});

export default categoriesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FavoriteServices } from "../../services/FavoriteServices";

const favoriteService = new FavoriteServices();

const fetchIndexFavorites = createAsyncThunk(
  "favorite/fetchIndexFavorites",
  favoriteService.index
);
const fetchCreateFavorite = createAsyncThunk(
  "favorite/fetchCreateFavorite",
  favoriteService.create
);
const fetchDeleteFavorite = createAsyncThunk(
  "favorite/fetchDeleteFavorite",
  favoriteService.delete
);

const favoriteSlice = createSlice({
  name:"favorite",
  initialState: {
    list: [],
    status: {
      index: "idle",
      create: "idle",
      delete: "idle",
    },
    error: null,
  },
  extraReducers: {
    [fetchIndexFavorites.pending]: (state) => {
      state.status.index = "loading";
      state.error = null;
    },
    [fetchIndexFavorites.fulfilled]: (state, action) => {
      state.status.index = "success";
      state.list = action.payload;
    },
    [fetchIndexFavorites.rejected]: (state, action) => {
      state.status.index = "failed";
      state.error = JSON.parse(action.error.message);
    },
    [fetchCreateFavorite.fulfilled]: (state) => {
      state.status.create = "success";
      state.error = null;
    },
    [fetchCreateFavorite.rejected]: (state, action) => {
      state.status.create = "failed";
      state.error = JSON.parse(action.error.message);
    },
    [fetchDeleteFavorite.pending]: (state, _) => {
      state.status.delete = "loading";
      state.error = null;
    },
    [fetchDeleteFavorite.fulfilled]: (state, {payload}) => {
      state.status.delete = "success";
      state.error = null;
      state.list = state.list.filter((item) => item.id !== payload);
    },
    [fetchDeleteFavorite.rejected]: (state, action) => {
      state.status.delete = "failed";
      state.error = JSON.parse(action.error.message);
    },
  },
});

export const {removeFavoriteItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;

export {fetchIndexFavorites, fetchCreateFavorite, fetchDeleteFavorite};
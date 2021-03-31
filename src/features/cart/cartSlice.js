import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartServices } from "../../services/CartServices";

const fetchIndexCart = createAsyncThunk(
  "session/fetchIndexCart",
  new CartServices().index
);
const fetchCreateCart = createAsyncThunk(
  "session/fetchCreateCart",
  new CartServices().create
);
const fetchUpdateCart = createAsyncThunk(
  "session/fetchUpdateCart",
  new CartServices().update
);
const fetchDeleteCart = createAsyncThunk(
  "session/fetchDeleteCart",
  new CartServices().delete
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    status: {
      index: "idle",
      create: "idle",
      update: "idle",
      delete: "idle",
    },
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchIndexCart.pending]: (state) => {
      state.status.index = "LOADING";
      state.error = null;
    },
    [fetchIndexCart.fulfilled]: (state, action) => {
      state.status.index = "SUCCESS";
      state.list = action.payload;
    },
    [fetchIndexCart.rejected]: (state, action) => {
      state.status.index = "FAILED";
      state.error = JSON.parse(action.error.message);
    },

    [fetchCreateCart.fulfilled]: (state, action) => {
      state.status.create = "SUCCESS";
      state.list.push(action.payload);
      state.error = null;
    },
    [fetchCreateCart.rejected]: (state, action) => {
      state.status.create = "FAILED";
      state.error = JSON.parse(action.error.message);
    },

    [fetchUpdateCart.fulfilled]: (state, { payload }) => {
      state.status.update = "SUCCESS";
      state.list = state.list.map((item) =>
        item.id !== payload.id ? item : payload
      );
      state.error = null;
    },
    [fetchUpdateCart.rejected]: (state, action) => {
      state.status.update = "FAILED";
      state.error = JSON.parse(action.error.message);
    },

    [fetchDeleteCart.fulfilled]: (state, action) => {
      state.status.delete = "SUCCESS";
      state.error = null;
    },
    [fetchDeleteCart.rejected]: (state, action) => {
      state.status.delete = "FAILED";
      state.error = JSON.parse(action.error.message);
    },
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;

export { fetchIndexCart, fetchCreateCart, fetchUpdateCart, fetchDeleteCart };

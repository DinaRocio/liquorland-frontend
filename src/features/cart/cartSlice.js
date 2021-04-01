import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartServices } from "../../services/CartServices";

const cartService = new CartServices();

const fetchIndexCart = createAsyncThunk(
  "cart/fetchIndexCart",
  cartService.index
);
const fetchCreateCart = createAsyncThunk(
  "cart/fetchCreateCart",
  cartService.create
);
const fetchUpdateCart = createAsyncThunk(
  "cart/fetchUpdateCart",
  cartService.update
);
const fetchDeleteCart = createAsyncThunk(
  "cart/fetchDeleteCart",
  cartService.delete
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
  reducers: {
    updateCartStatus: (state, { payload: { status, value } }) => {
      state.status[status] = value;
    },
  },
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

    [fetchDeleteCart.pending]: (state, _) => {
      state.status.delete = "LOADING";
      state.error = null;
    },
    [fetchDeleteCart.fulfilled]: (state, { payload }) => {
      state.status.delete = "SUCCESS";
      state.error = null;
      state.list = state.list.filter((item) => item.id !== payload);
    },
    [fetchDeleteCart.rejected]: (state, action) => {
      state.status.delete = "FAILED";
      state.error = JSON.parse(action.error.message);
    },
  },
});

export const { removeCartItem, updateCartStatus } = cartSlice.actions;
export default cartSlice.reducer;

export { fetchIndexCart, fetchCreateCart, fetchUpdateCart, fetchDeleteCart };

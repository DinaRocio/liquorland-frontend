import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReviewServices } from "../../services/ReviewServices";

const fetchCreateReview = createAsyncThunk(
  "review/fetchCreateReview",
  new ReviewServices().create
);

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    status: "idle",
    item: null,
  },
  reducers: {
    resetReviewStatus: (state, _) => {
      return { ...state, status: "idle" };
    },
  },
  extraReducers: {
    [fetchCreateReview.pending]: (state, _) => {
      return { ...state, status: "LOADING" };
    },
    [fetchCreateReview.fulfilled]: (state, { payload }) => {
      return { ...state, status: "SUCCESS", item: payload };
    },
    [fetchCreateReview.rejected]: (state, _) => {
      return { ...state, status: "FAILED" };
    },
  },
});

export default reviewSlice.reducer;
export { fetchCreateReview };
export const { resetReviewStatus } = reviewSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchStyles = createAsyncThunk("styles/fetchStyles", async () => {
  const response = await fetch(`${BASE_URI}/api/styles`, {
    method: "GET",
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return { styles: data };
});

const stylesSlice = createSlice({
  name: "styles",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: {
    [fetchStyles.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchStyles.fulfilled]: (state, action) => {
      state.status = "secceeded";
      state.items = action.payload.styles;
    },
    [fetchStyles.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default stylesSlice.reducer;

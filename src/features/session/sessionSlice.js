import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchLogin = createAsyncThunk(
  "session/fetchLogin",
  async (credentials) => {
    const response = await fetch(`${BASE_URI}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors.message);
    }
    return { token: data.token };
  }
);

export const fetchLogout = createAsyncThunk(
  "session/fetchLogout",
  async (token) => {
    const response = await fetch(`${BASE_URI}/api/logout`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.errors.message);
    }
    return true;
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: sessionStorage.getItem("token"),
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      sessionStorage.setItem("token", state.token);
    },
    killToken: (state) => {
      sessionStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: {
    [fetchLogout.pending]: (state, action) => {
      sessionStorage.removeItem("token");
      state.error = null;
      state.token = null;
    },
    [fetchLogout.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.error = null;
      state.token = action.payload.token;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.error = action.error.message;
      state.token = null;
    },
  },
});

export const { killToken, setToken } = sessionSlice.actions;
export default sessionSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchSignup = createAsyncThunk(
  "session/fetchSignup",
  async (formData) => {
    const response = await fetch(`${BASE_URI}/api/signup`, {
      method: "POST",
      body: JSON.stringify({user: formData}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { token: data.token };
    
  }
);

export const fetchProfile = createAsyncThunk(
  "session/fetchProfile",
  async (token) => {
    const response = await fetch(`${BASE_URI}/api/signup`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors.message);
    }
    return { user: data };
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    profile: {},
    token: sessionStorage.getItem("token"),
    status: "idle",
    errors: {},
  },
  reducers: {
    killUsersToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: {
    [fetchProfile.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.profile = action.payload.user;
    },
    [fetchProfile.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = { user: action.error.message };
    },
    [fetchSignup.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSignup.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.token = action.payload.token;
    },
    [fetchSignup.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = JSON.parse(action.error.message);
    },
  },
});

export const {killUsersToken} = usersSlice.actions

export default usersSlice.reducer;

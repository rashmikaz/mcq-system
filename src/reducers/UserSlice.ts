import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../model/UserModel.ts";
import axios from "axios";

const initialState: UserModel[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000", // backend URL
});

export const saveUser = createAsyncThunk(
  "user/saveUser",
  async (user: UserModel, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/add", user);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to save user");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveUser.rejected, (state, action) => {
        console.error("Error saving user:", action.payload);
      });
  },
});

export default userSlice.reducer;

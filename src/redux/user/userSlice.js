import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { auth } from "../../services/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const newUserRegister = createAsyncThunk(
  "user/register",
  async (formData, thunkApi) => {
    try {
      const email = formData.email;
      const password = formData.password;
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (formData, thunkApi) => {
    try {
      const email = formData.email;
      const password = formData.password;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, thunkApi) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  user: {
    id: null,
    email: null,
    name: null,
  },

  token: null,
  isLoading: false,
  error: null,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,

  reducers: {
    setIsSignedInStatus(state, action) {
      state.isSignedIn = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder

      // ------------ Register User ----------------------
      .addCase(newUserRegister.fulfilled, (state) => {
        state.isLoading = false;
      })

      // ------------ Login User ----------------------
      .addCase(userLogin.fulfilled, (state) => {
        state.isLoading = false;
      })

      // ------------ Logout User ---------------------

      .addCase(userLogout.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(newUserRegister.pending, userLogin.pending, userLogout.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          newUserRegister.rejected,
          userLogin.rejected,
          userLogout.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const { setIsSignedInStatus } = userSlice.actions;
export const userReducer = userSlice.reducer;

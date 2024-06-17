import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const newUserRegister = createAsyncThunk(
  "user/register",
  async (formData, thunkApi) => {
    try {
      const email = formData.email;
      const password = formData.password;
      const auth = formData.auth;
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = {
        email: userData.user.email,
      };

      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (formData, thunkApi) => {
    try {
      //   const userData = await requestLogin(formData);
      //   return userData;
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
  isSignedUp: false,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,

  reducers: {
    setIsSignedUpStatus(state, action) {
      state.isSignedUp = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder

      // ------------ Register User ----------------------
      .addCase(newUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload.email;
        state.isSignedUp = true;
      })

      // ------------ Login User ----------------------
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })

      .addMatcher(
        isAnyOf(newUserRegister.pending, userLogin.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(newUserRegister.rejected, userLogin.rejected),
        (state) => {
          state.isLoading = false;
          state.error = null;
          state.isSignedIn = false;
        }
      ),
});

export const { setIsSignedUpStatus } = userSlice.actions;
export const userReducer = userSlice.reducer;

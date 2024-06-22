import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { auth, database } from "../../services/firebase/firebase";
import { get, ref } from "firebase/database";
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
      return;
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
      return;
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
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllTeachers = createAsyncThunk(
  "teachers/getAll",
  async (_, thunkApi) => {
    try {
      const teachersRef = ref(database, "/");
      const snapshot = await get(teachersRef);
      const teachersData = [];
      if (snapshot.exists()) {
        snapshot.forEach((teacherSnapshot) => {
          teachersData.push({
            ...teacherSnapshot.val(),
            id: teacherSnapshot.key,
          });
        });
        return teachersData;
      } else {
        return teachersData;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  user: {
    email: null,
    name: null,
  },

  teachers: {
    teachersArr: [],
    favorite: [],
  },

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

      // ------------ Thechers ------------------------

      .addCase(getAllTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers.teachersArr = action.payload;
      })

      .addMatcher(
        isAnyOf(
          newUserRegister.pending,
          userLogin.pending,
          userLogout.pending,
          getAllTeachers.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          newUserRegister.rejected,
          userLogin.rejected,
          userLogout.rejected,
          getAllTeachers.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const { setIsSignedInStatus } = userSlice.actions;
export const userReducer = userSlice.reducer;

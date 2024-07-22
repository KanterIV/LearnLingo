import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { auth, database } from "../../services/firebase/firebase";
import { get, ref } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  toastFulfilled,
  toastRejected,
} from "../../services/userNotifications";

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
      toastFulfilled("You have successfully logged out of your account !");
      return;
    } catch (error) {
      toastRejected("Something went wrong. Let's try again...");
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
  teachersArr: [],
  favorite: [],

  isSignedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,

  reducers: {
    setIsSignedInStatus(state, action) {
      state.isSignedIn = action.payload;
    },
    addFavoriteTeacher(state, action) {
      state.favorite.push(action.payload);
    },
    removeFavoriteTeacher(state, action) {
      state.favorite = state.favorite.filter(
        (teacher) => teacher.id !== action.payload
      );
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
        state.teachersArr = action.payload;
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
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const {
  setIsSignedInStatus,
  addFavoriteTeacher,
  removeFavoriteTeacher,
} = userSlice.actions;
export const userReducer = userSlice.reducer;

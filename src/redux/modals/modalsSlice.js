import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modals: {
    isRegisterModalOpen: false,
    isLoginModalOpen: false,
  },
};

const modalsSlice = createSlice({
  name: "modals",
  initialState: INITIAL_STATE,

  reducers: {
    setRegisterModal(state, action) {
      state.modals.isRegisterModalOpen = action.payload;
    },
    setLoginModal(state, action) {
      state.modals.isLoginModalOpen = action.payload;
    },
    closeAllModals(state) {
      state.modals.isRegisterModalOpen = false;
      state.modals.isLoginModalOpen = false;
    },
  },
});

export const { setLoginModal, setRegisterModal, closeAllModals } =
  modalsSlice.actions;

export const modalsReducer = modalsSlice.reducer;

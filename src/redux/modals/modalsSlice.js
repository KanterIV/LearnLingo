import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modals: {
    isRegisterModalOpen: false,
    isLoginModalOpen: false,
    isBookingModalOpen: false,
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
    setBookingModal(state, action) {
      state.modals.isBookingModalOpen = action.payload;
    },
    closeAllModals(state) {
      state.modals.isRegisterModalOpen = false;
      state.modals.isLoginModalOpen = false;
      state.modals.isBookingModalOpen = false;
    },
  },
});

export const {
  setLoginModal,
  setRegisterModal,
  setBookingModal,
  closeAllModals,
} = modalsSlice.actions;

export const modalsReducer = modalsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modals: {
    isNavbarMenuOpen: false,
    isRegisterModalOpen: false,
    isLoginModalOpen: false,
    bookingModal: {
      isBookingModalOpen: false,
      clickedTeachersCardId: null,
    },
  },
};

const modalsSlice = createSlice({
  name: "modals",
  initialState: INITIAL_STATE,

  reducers: {
    setNavbarMenu(state, action) {
      state.modals.isNavbarMenuOpen = action.payload;
    },
    setRegisterModal(state, action) {
      state.modals.isRegisterModalOpen = action.payload;
    },
    setLoginModal(state, action) {
      state.modals.isLoginModalOpen = action.payload;
    },
    setBookingModal(state, action) {
      state.modals.bookingModal.isBookingModalOpen = action.payload.status;
      state.modals.bookingModal.clickedTeachersCardId = action.payload.id;
    },
    closeAllModals(state) {
      state.modals.isNavbarMenuOpen = false;
      state.modals.isRegisterModalOpen = false;
      state.modals.isLoginModalOpen = false;
      state.modals.bookingModal.isBookingModalOpen = false;
      state.modals.bookingModal.clickedTeachersCardId = null;
    },
  },
});

export const {
  setNavbarMenu,
  setLoginModal,
  setRegisterModal,
  setBookingModal,
  closeAllModals,
} = modalsSlice.actions;

export const modalsReducer = modalsSlice.reducer;

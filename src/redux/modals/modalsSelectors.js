export const selectRegisterModal = (state) =>
  state.modals.modals.isRegisterModalOpen;

export const selectLoginModal = (state) => state.modals.modals.isLoginModalOpen;
export const selectBookingModal = (state) => state.modals.modals.bookingModal;

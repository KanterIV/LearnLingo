import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { LoginModal, RegisterModal } from "../../components";
import { useSelector } from "react-redux";
import {
  selectBookingModal,
  selectLoginModal,
  selectRegisterModal,
} from "../../redux/modals/modalsSelectors";
import { selectUserSingnedIn } from "../../redux/user/userSelectors";
import { Tooltip } from "react-tooltip";
import BookingModal from "../BookingModal/BookingModal";

const SharedLayout = () => {
  const isRegisterModalOpen = useSelector(selectRegisterModal);
  const isLoginModalOpen = useSelector(selectLoginModal);
  const isBookingModalOpen = useSelector(selectBookingModal);
  const authenticated = useSelector(selectUserSingnedIn);

  return (
    <>
      <Header />
      <main>
        <Outlet />
        {isRegisterModalOpen && <RegisterModal />}
        {isLoginModalOpen && <LoginModal />}
        {isBookingModalOpen && <BookingModal />}
        {!authenticated && (
          <Tooltip anchorSelect=".unlogged" openOnClick="true" place="top">
            This functionality is available only for authorized users, please
            log in.
          </Tooltip>
        )}
      </main>
    </>
  );
};

export default SharedLayout;

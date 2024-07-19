import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { LoginModal, RegisterModal } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBookingModal,
  selectLoginModal,
  selectNavbarMenu,
  selectRegisterModal,
} from "../../redux/modals/modalsSelectors";
import { selectUserSingnedIn } from "../../redux/user/userSelectors";
import BookingModal from "../BookingModal/BookingModal";
import { useMediaQuery } from "react-responsive";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { useMenuAnimation } from "../../services/animations";
import TooltipModal from "../Tooltip/TooltipModal";
import { useEffect } from "react";
import { setNavbarMenu } from "../../redux/modals/modalsSlice";

const SharedLayout = () => {
  const isNavbarMenuOpen = useSelector(selectNavbarMenu);
  const isRegisterModalOpen = useSelector(selectRegisterModal);
  const isLoginModalOpen = useSelector(selectLoginModal);
  const { isBookingModalOpen } = useSelector(selectBookingModal);
  const authenticated = useSelector(selectUserSingnedIn);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const dispatch = useDispatch();
  const scope = useMenuAnimation(isNavbarMenuOpen);

  useEffect(() => {
    if (!isMobile) {
      dispatch(setNavbarMenu(false));
    }
  }, [dispatch, isMobile]);

  return (
    <>
      <Header />
      <main ref={scope}>
        <Outlet />
        <NavbarMenu />
        {isRegisterModalOpen && <RegisterModal />}
        {isLoginModalOpen && <LoginModal />}
        {isBookingModalOpen && <BookingModal />}
        {!authenticated && <TooltipModal />}
      </main>
    </>
  );
};

export default SharedLayout;

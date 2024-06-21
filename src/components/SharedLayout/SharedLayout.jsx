import Header from "../Header/Header";
import { LoginModal, RegisterModal } from "../../components";
import {
  selectLoginModal,
  selectRegisterModal,
} from "../../redux/modals/modalsSelectors";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const isRegisterModalOpen = useSelector(selectRegisterModal);
  const isLoginModalOpen = useSelector(selectLoginModal);

  return (
    <>
      <Header />
      <main>
        <Outlet />
        {isRegisterModalOpen && <RegisterModal />}
        {isLoginModalOpen && <LoginModal />}
      </main>
    </>
  );
};

export default SharedLayout;

import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { LoginModal, RegisterModal } from "../../components";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <LoginModal />
        <RegisterModal />
      </main>
    </>
  );
};

export default SharedLayout;

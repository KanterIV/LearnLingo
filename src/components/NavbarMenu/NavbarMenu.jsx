import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNavbarMenu } from "../../redux/modals/modalsSelectors";
import {
  setLoginModal,
  setNavbarMenu,
  setRegisterModal,
} from "../../redux/modals/modalsSlice";
import { userLogout } from "../../redux/user/userSlice";
import { selectUserSingnedIn } from "../../redux/user/userSelectors";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { StyledNavbarMenu } from "./NavbarMene.styled";
import Button from "../Button/Button";

import LoginIcon from "../../assets/icons/login.svg?react";
import LogOutIcon from "../../assets/icons/logout.svg?react";

const NavbarMenu = () => {
  const isNavbarMenuOpen = useSelector(selectNavbarMenu);
  const authenticated = useSelector(selectUserSingnedIn);
  const modalElement = document.getElementsByClassName("navbar");
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleLinkClick = () => {
    dispatch(setNavbarMenu(false));
  };

  const onRegisterBtnClick = () => {
    dispatch(setRegisterModal(true));
  };

  const onLoginBtnClick = () => {
    dispatch(setLoginModal(true));
  };

  const onLogOutBtnClock = () => {
    dispatch(userLogout());
    dispatch(setNavbarMenu(false));
  };

  useEffect(() => {
    const options = {
      reserveScrollBarGap: true,
    };

    if (isNavbarMenuOpen) {
      disableBodyScroll(modalElement[[0]], options);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [modalElement, isNavbarMenuOpen]);

  return (
    <StyledNavbarMenu
      className={!isHomePage ? "navbar navbar-background" : " navbar"}
    >
      <ul className="navbar-list">
        <NavLink className="navbar-list-item" to="/" onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink
          className="navbar-list-item"
          to="/teachers"
          onClick={handleLinkClick}
        >
          Teachers
        </NavLink>
        {authenticated && (
          <NavLink
            className="navbar-list-item"
            to="/favorites"
            onClick={handleLinkClick}
          >
            Favorite
          </NavLink>
        )}
      </ul>

      <>
        {!authenticated ? (
          <div className="navbar-button-container">
            <Button
              styledClass="registerBtn navbar-register-btn"
              buttonType="button"
              onClickFunction={onRegisterBtnClick}
            >
              Registration
            </Button>
            <Button
              styledClass="login-logout-btn navbar-login-logout-btn"
              buttonType="button"
              onClickFunction={onLoginBtnClick}
            >
              <LoginIcon /> Log In
            </Button>
          </div>
        ) : (
          <Button
            styledClass="login-logout-btn navbar-login-logout-btn logaut-navbar-centering"
            buttonType="button"
            onClickFunction={onLogOutBtnClock}
          >
            <LogOutIcon /> Log Out
          </Button>
        )}
      </>
    </StyledNavbarMenu>
  );
};

export default NavbarMenu;

import { Link, NavLink } from "react-router-dom";
import { Button } from "../../components";
import {
  setLoginModal,
  setRegisterModal,
} from "../../redux/modals/modalsSlice";
import { selectUserSingnedIn } from "../../redux/user/userSelectors";
import { userLogout } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledHeader } from "./Header.styled";
import { useMediaQuery } from "react-responsive";

import AppLogo from "../../assets/icons/logo.svg?react";
import LoginIcon from "../../assets/icons/login.svg?react";
import LogOutIcon from "../../assets/icons/logout.svg?react";
import NavbarButton from "../NavbarButton/NavbarButton";

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserSingnedIn);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const onRegisterBtnClick = () => {
    dispatch(setRegisterModal(true));
  };

  const onLoginBtnClick = () => {
    dispatch(setLoginModal(true));
  };

  const onLogOutBtnClock = () => {
    dispatch(userLogout());
  };

  return (
    <StyledHeader>
      <div className="container header-container">
        <Link className="logo" to="/">
          <AppLogo className="logo-svg" />
          LearnLingo
        </Link>
        <nav className="header-nav">
          {isTablet && (
            <ul className="header-list">
              <li>
                <NavLink className="header-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="header-link" to="/teachers">
                  Teachers
                </NavLink>
              </li>
              {authenticated && (
                <li>
                  <NavLink className="header-link" to="/favorites">
                    Favorite
                  </NavLink>
                </li>
              )}
            </ul>
          )}
        </nav>

        {!authenticated && isTablet ? (
          <div className="header-buttons-container">
            <Button
              styledClass="login-logout-btn"
              buttonType="button"
              onClickFunction={onLoginBtnClick}
            >
              <LoginIcon /> Log In
            </Button>
            <Button
              styledClass="registerBtn"
              buttonType="button"
              onClickFunction={onRegisterBtnClick}
            >
              Registration
            </Button>
          </div>
        ) : (
          isTablet && (
            <Button
              styledClass="login-logout-btn logout-btn"
              buttonType="button"
              onClickFunction={onLogOutBtnClock}
            >
              <LogOutIcon /> Log Out
            </Button>
          )
        )}
        {isMobile && <NavbarButton />}
      </div>
    </StyledHeader>
  );
};

export default Header;

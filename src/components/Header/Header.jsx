import { Link, NavLink } from "react-router-dom";
import { Button } from "../../components";
import {
  setLoginModal,
  setRegisterModal,
} from "../../redux/modals/modalsSlice";
import { userLogout } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

import AppLogo from "../../assets/icons/logo.svg?react";
import LoginIcon from "../../assets/icons/login.svg?react";
import LogOutIcon from "../../assets/icons/logout.svg?react";

const Header = () => {
  const dispatch = useDispatch();

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
    <header>
      <nav className="header-nav">
        <Link className="logo" to="/">
          <AppLogo />
          LearnLingo
        </Link>
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
          <li>
            <NavLink className="header-link" to="/favorites">
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button
        styledClass="loginBtn"
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

      <Button
        styledClass="loginBtn"
        buttonType="button"
        onClickFunction={onLogOutBtnClock}
      >
        <LogOutIcon /> Log Out
      </Button>
    </header>
  );
};

export default Header;

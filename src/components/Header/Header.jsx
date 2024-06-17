import { Link, NavLink } from "react-router-dom";
import { Button } from "../../components";

import AppLogo from "../../assets/icons/logo.svg?react";
import LoginIcon from "../../assets/icons/login.svg?react";
import {
  setLoginModal,
  setRegisterModal,
} from "../../redux/modals/modalsSlice";
import { setIsSignedUpStatus } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const onRegisterBtnClick = () => {
    dispatch(setIsSignedUpStatus(false));
    dispatch(setRegisterModal(true));
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
        onClickFunction={setLoginModal}
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
    </header>
  );
};

export default Header;

import { Link, NavLink } from "react-router-dom";
import AppLogo from "../../assets/icons/logo.svg?react";
import LoginIcon from "../../assets/icons/login.svg?react";
import { Button } from "../../components";

const Header = () => {
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
      <Button styledClass="loginBtn" type="button">
        <LoginIcon /> Log In
      </Button>
      <Button styledClass="registerBtn" type="button">
        Registration
      </Button>
    </header>
  );
};

export default Header;

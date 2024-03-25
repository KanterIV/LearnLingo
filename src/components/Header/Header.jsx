import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
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
    </header>
  );
};

export default Header;

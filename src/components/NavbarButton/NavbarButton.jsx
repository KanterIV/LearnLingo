import { StyledNavbarButton } from "./NavbarButton.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectNavbarMenu } from "../../redux/modals/modalsSelectors";
import { setNavbarMenu } from "../../redux/modals/modalsSlice";

const NavbarButton = () => {
  const isNavbarMenuOpen = useSelector(selectNavbarMenu);
  const dispatch = useDispatch();

  const handleOnBtnClick = () => {
    dispatch(setNavbarMenu(!isNavbarMenuOpen));
  };

  return (
    <StyledNavbarButton type="button" onClick={handleOnBtnClick}>
      <span
        className={
          isNavbarMenuOpen ? `burger-bar clicked` : "burger-bar unclicked"
        }
      ></span>
      <span
        className={
          isNavbarMenuOpen ? `burger-bar clicked` : "burger-bar unclicked"
        }
      ></span>
      <span
        className={
          isNavbarMenuOpen ? `burger-bar clicked` : "burger-bar unclicked"
        }
      ></span>
    </StyledNavbarButton>
  );
};

export default NavbarButton;

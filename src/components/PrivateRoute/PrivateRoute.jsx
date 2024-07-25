import { useSelector } from "react-redux";
import { ROUTE_PATH } from "../../constans/routes";
import { selectUserSingnedIn } from "../../redux/user/userSelectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  children,
  authChecked,
  redirectTo = ROUTE_PATH.home,
}) => {
  const authenticated = useSelector(selectUserSingnedIn);

  if (!authChecked) {
    return;
  }

  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;

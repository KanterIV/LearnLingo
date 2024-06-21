import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./constans/routes";
import { Loader, SharedLayout } from "./components";
import { auth } from "./services/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setIsSignedInStatus } from "./redux/user/userSlice";
import { useDispatch } from "react-redux";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setIsSignedInStatus(true));
      } else {
        dispatch(setIsSignedInStatus(false));
      }
    });
    return () => {
      listen();
    };
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTE_PATH.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_PATH.teachers} element={<Teachers />} />
          <Route
            path={ROUTE_PATH.favorites}
            element={
              <PrivateRoute>
                <Favorite />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

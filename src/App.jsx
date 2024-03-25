import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./constans/routes";
import { Loader, SharedLayout } from "./components";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTE_PATH.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_PATH.teachers} element={<Teachers />} />
          <Route path={ROUTE_PATH.favorites} element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

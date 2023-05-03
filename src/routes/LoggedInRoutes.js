import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const Login = lazy(() => import("../pages/login"));
export default function LoggedInRoutes() {
  const { user } = useSelector((state) => ({ ...state }));
  return user ? (
    <Outlet />
  ) : (
    <Suspense>
      <Login />;
    </Suspense>
  );
}

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RestrictedRoutes = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>LOADING</div>;
  }
  return user && user.loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default RestrictedRoutes;

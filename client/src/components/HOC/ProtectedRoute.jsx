import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import clearTokenFromLocalStorage from "../../util/clearToken";

const ProtectedRoute = () => {
  
  useEffect(() => {
    clearTokenFromLocalStorage();
  }, []);

  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

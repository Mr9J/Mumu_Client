import authService from "@/services/auth.service";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      await authService.isAuth().then((res) => {
        if (res) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        setIsLoading(false);
      });
    };
    verifyAuth();
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedLayout;

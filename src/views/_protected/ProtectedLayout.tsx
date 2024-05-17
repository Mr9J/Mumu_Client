import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedLayout;

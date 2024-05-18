import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { IsLogIn } from "@/services/user.service";

const ProtectedLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      await IsLogIn()
        .then(() => {
          setIsAuthenticated(true);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    };

    if (localStorage.getItem("currentUser")) checkUser();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedLayout;

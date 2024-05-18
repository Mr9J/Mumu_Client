import { Outlet, Navigate } from "react-router-dom";
import authBG from "@/assets/_auth_img/hideo_kojima_sign.jpg";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      <div className="flex h-dvh">
        {isAuthenticated ? (
          <Navigate to="/log-out" />
        ) : (
          <>
            <div className="flex flex-1 items-center flex-col py-10 overflow-auto">
              <Outlet />
            </div>
            <img
              src={authBG}
              alt="authBG"
              className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
            />
          </>
        )}
      </div>
    </>
  );
};

export default AuthLayout;

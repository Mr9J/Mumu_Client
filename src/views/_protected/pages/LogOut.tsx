import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CurrentUser } from "@/types";

const LogOut = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<CurrentUser | null>(null);

  const logout = () => {
    LogOut();
    window.alert("登出成功，您將被導向至首頁...");
    navigate("/");
  };

  useEffect(() => {
    // const getUser = async () => {
    //   await authService.currentUser()?.then((res) => {
    //     setUser(res.data);
    //   });
    // };
    // getUser();
  }, [user]);

  return (
    <div>
      {user && (
        <div>
          <p>{user.id}</p>
          <p>{user.nickname}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <Button onClick={logout}>Log out</Button>
        </div>
      )}
    </div>
  );
};

export default LogOut;

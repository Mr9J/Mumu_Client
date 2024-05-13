import HeaderSection from "@/components/shared/HeaderSection";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <HeaderSection />
      <Outlet />
    </>
  );
};

export default RootLayout;

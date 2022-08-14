import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HeadFoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HeadFoot;

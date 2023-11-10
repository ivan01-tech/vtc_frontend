import { Outlet } from "react-router-dom";
import Naviagtion from "./Naviagtion";
import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      {/* headers */}
      <Naviagtion />
      {/* <MobileMenu /> */}

      <main className="main_content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

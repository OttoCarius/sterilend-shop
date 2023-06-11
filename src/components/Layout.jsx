import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
// import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
      {/* <div className="container">
        <Footer />
      </div> */}
    </>
  );
};

export default Layout;

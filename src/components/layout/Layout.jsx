import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

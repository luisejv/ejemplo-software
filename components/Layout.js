import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="contenido">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

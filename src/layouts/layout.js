import React from "react";
import Navbar from "../components/navbar/Navbar";

const Layout = ({children}) => 
  <div>
    <Navbar />
    {children}
  </div>;

export { Layout };


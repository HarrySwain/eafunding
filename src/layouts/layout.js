import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => 
  <div>
    <Navbar />
    <Outlet />
  </div>;

export { Layout };


import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <h1 className="text-green-800 text-4xl">Welcome to the Homepage</h1> */}
      <Outlet />
    </div>
  );
};

export default Layout;

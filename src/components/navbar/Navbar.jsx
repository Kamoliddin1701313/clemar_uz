import React from "react";
import Widget from "../widget/Widget";
import TopBar from "../topbar/TopBar";

const Navbar = () => {
  return (
    <div className="top-0 sticky z-10">
      <Widget />
      <TopBar />
    </div>
  );
};

export default Navbar;

import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <nav className="navbar row justify-content-center">
        <div className=" col-12 col-md-6 mt-2 mt-md-0 ">
          <Search />
        </div>
      </nav>
    </>
  );
};

export default Header;

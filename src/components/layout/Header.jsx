import React from "react";
import Search from "./Search";

const Header = ({ setKeyWord}) => {
  return (
    <>
      <nav className="navbar row justify-content-center">
        <div className=" col-12 col-md-6 mt-2 mt-md-0 ">
          <Search
            placeholder="Enter Product Name ..."
            handleChange={(e) => setKeyWord(e.target.value)}
          />
        </div>
      </nav>
    </>
  );
};

export default Header;

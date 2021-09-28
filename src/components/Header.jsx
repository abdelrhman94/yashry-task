import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar row justify-content-center">
        <div className=" col-12 col-md-6 mt-2 mt-md-0 ">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Enter Product Name ..."
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

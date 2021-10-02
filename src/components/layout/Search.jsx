import React from "react";

const Search = (props) => {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import { CATEGORY_URL } from "../../constants";

const Category = ({ setCategoryId }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(CATEGORY_URL);
        const listCategories = await response.json();
        setCategories(listCategories);
      } catch (error) {}
    };
    (async () => await fetchCategories())();
  }, []);

  return (
    <div className="mt-5 container">
      <h3 className="mb-3">Categories</h3>
      <div
        className="pl-0 d-flex justify-content-around"
        style={{ cursor: "pointer" }}
      >
        {categories.map((category) => (
          <div className="card mx-2 p-3 rounded">
            <span key={category.id} onClick={() => setCategoryId(category.id)}>
              {category.name}
              <img
                className="card-img-top mx-auto"
                src={category.image}
                alt=""
                srcset=""
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

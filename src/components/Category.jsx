import React, { useState, useEffect } from "react";
import { CATEGORY_URL } from "../constants";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(CATEGORY_URL);
        const listCategories = await response.json();
        setCategory(listCategories);
      } catch (error) {
        console.log(error);
      }
    };
    (async () => await fetchCategories())();
  }, []);

  return (
    <div className="mt-5">
      <h4 className="mb-3">Categories</h4>
      <ul className="pl-0 d-flex justify-content-around">
        {category.map((category) => (
          <div className="card mx-2 p-3 rounded">
            <li key={category.id}>
              {category.name}
              <img
                className="card-img-top mx-auto"
                src={category.image}
                alt=""
                srcset=""
              />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Category;

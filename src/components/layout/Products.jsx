/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Products = ({ keyWord, selectedProducts }) => {
  return (
    <div className="container container-fluid">
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          {selectedProducts &&
            selectedProducts
              .filter((product) => {
                if (keyWord === "") {
                  return true;
                } else {
                  return product.name
                    .toLowerCase()
                    .includes(keyWord.toLowerCase().trim());
                }
              })
              .map((product) => (
                <div
                  key={product.id}
                  className="col-sm-12 col-md-6 col-lg-3 my-3"
                >
                  <div className="card p-3 rounded">
                    <img
                      className="card-img-top mx-auto"
                      src={product.image}
                      alt=""
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">
                        <a key="1" href="#">
                          {product.name}
                        </a>
                      </h5>
                      <div className="ratings mt-auto">
                        <div className="rating-outer">
                          <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">{product.rating}</span>
                      </div>
                      <p className="card-text">
                        ${product.price} {product.currency}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};

export default Products;

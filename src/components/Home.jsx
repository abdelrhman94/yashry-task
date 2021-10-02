import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Category from "./layout/Category";
import Products from "./layout/Products";
import { API_URL } from "../constants";

const Home = () => {
  const [keyWord, setKeyWord] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    (async () => await fetchProducts())();
  });
  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const listProducts = await response.json();
      setProducts(listProducts);
      if (categoryId) {
        const selectedProducts = products.filter(
          (product) => product.id === categoryId
        );
        setSelectedProducts(selectedProducts);
      } else {
        setSelectedProducts(listProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header setKeyWord={setKeyWord} />
      <Category setCategoryId={setCategoryId} />
      <Products keyWord={keyWord} selectedProducts={selectedProducts} />
    </>
  );
};

export default Home;

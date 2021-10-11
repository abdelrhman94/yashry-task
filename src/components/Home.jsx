import React, { useState, useEffect, useCallback } from "react";
import Header from "./layout/Header";
import Category from "./layout/Category";
import Products from "./layout/Products";
import { API_URL } from "../constants";
import Filters from "./layout/Filters";
import "./Home.css";

const Home = () => {
  const [keyWord, setKeyWord] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      const listProducts = await response.json();
      setProducts(listProducts);
      setSelectedProducts(listProducts);
    } catch (error) {}
  }, []);

  useEffect(() => {
    (async () => await fetchProducts())();
  }, [fetchProducts]);

  const filterProductByCategory = (categoryId) => {
    const filteredProducts = products.filter(
      (product) => product.categoryId === categoryId
    );
    setSelectedProducts(filteredProducts);
  };

  return (
    <>
      <Header setKeyWord={setKeyWord} />
      <Filters />
      <Category setCategoryId={filterProductByCategory} />
      <Products keyWord={keyWord} selectedProducts={selectedProducts} />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
function App() {
  const [keyWord, setKeyWord] = useState("");

  return (
    <>
      <Header setKeyWord={setKeyWord} />
      <Products keyWord={keyWord} />
    </>
  );
}

export default App;

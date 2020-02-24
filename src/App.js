import React from "react";
import "./App.css";
import ProductList from "./components/product-list";
import Chatbot from "./components/chatbot.js";

function App() {
  return (
    <div className="App">
      <ProductList />
      <Chatbot />
    </div>
  );
}

export default App;

import React from "react";
import Product from "./product";

const ProductList = () => {
  const shoeList = [
    "prada",
    "gucci",
    "louis-vuitton",
    "lacoste",
    "nike",
    "adidas"
  ];
  return (
    <div className="ProductList">
      {shoeList.map(shoe => (
        <Product name={shoe} />
      ))}
    </div>
  );
};

export default ProductList;

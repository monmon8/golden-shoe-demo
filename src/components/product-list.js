import React from "react";

const ProductList = () => {
  const shoeList = ["prada", "gucci", "Lv", "lacoste", "Nike"];
  return (
    <div className="ProductList">
      ProductList
      <ul>
        {shoeList.map(shoe => (
          <li>{shoe}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

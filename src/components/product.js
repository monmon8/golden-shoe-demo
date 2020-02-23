import React, { useState } from "react";

const Product = props => {
  const [stockLevel, setStockLevel] = useState(10);

  return (
    <div className="Product">
      <div
        className="Product-image"
        style={{
          backgroundImage: "url('" + `/${props.name}.png` + "')"
        }}
      ></div>
      <span style={{ marginRight: "10px" }}>{props.name}</span>

      {stockLevel > 0 ? (
        <span>
          <span style={{ marginRight: "10px" }}>{stockLevel}</span>
          <button onClick={() => setStockLevel(stockLevel - 1)}>Buy</button>
        </span>
      ) : (
        <span style={{ color: "red" }}>Out of stock</span>
      )}
    </div>
  );
};

export default Product;

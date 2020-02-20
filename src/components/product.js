import React from "react";

const Product = props => {
  return (
    <div className="Product">
      <div
        style={{
          backgroundImage: `url('/adidas.jpg')`
        }}
      >
        hugy
      </div>
      {props.name}
    </div>
  );
};

export default Product;

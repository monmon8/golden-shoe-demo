import React from "react";

const Checkout = () => {
  const shoeList = ["prada", "gucci", "Lv", "lacoste", "Nike"];
  return (
    <div>
      Checkout
      <ul>
        {shoeList.map(shoe => (
          <li>{shoe}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;

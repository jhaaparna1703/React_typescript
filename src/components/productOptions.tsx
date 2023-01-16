import React from "react";
import "./components.css";


export const ProductOptions = () => {
  return (
    <div className="products">
      <div>
        <img id="product-image" src="../assets/electronics.jpg" alt="electronics" />
      </div>

      <div>
        <img id="product-image"  src="../assets/fashion.jpg" alt="fashion" />
      </div>

      <div>
        <img id="product-image"  src="../assets/grocery.jpg" alt="grocery" />
      </div>

      <div>
        <img id="product-image"  src="../assets/mobiles.jpg" alt="mobiles" />
      </div>
    </div>
  );
};

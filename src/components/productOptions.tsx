import React from "react";
import "./components.css";

export const ProductOptions = () => {
  return (
    <div className="products">
      <div>
        <img
          id="product-image"
          src="../assets/electronics.jpg"
          alt="electronics"
        />
        <br />
        <h6 id="product-name">Electronics</h6>
      </div>

      <div>
        <img id="product-image" src="../assets/fashion.jpg" alt="fashion" />
        <br />
        <h6 id="product-name">Fashion</h6>
      </div>

      <div>
        <img id="product-image" src="../assets/grocery.jpg" alt="grocery" />
        <br />
        <h6 id="product-name">Grocery</h6>
      </div>

      <div>
        <img id="product-image" src="../assets/mobiles.jpg" alt="mobiles" />
        <br />
        <h6 id="product-name">Mobiles</h6>
      </div>
    </div>
  );
};

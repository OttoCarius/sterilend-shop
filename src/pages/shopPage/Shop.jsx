import React from "react";
import ShopComponent from "../../components/shopComponent/ShopComponent";
import "./shop.css";

const Shop = () => {
  return (
    <div className="container shop-container">
      <div className="shop__wrap">
        <ShopComponent />
      </div>
    </div>
  );
};

export default Shop;

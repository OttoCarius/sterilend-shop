import React from "react";
import "./newProducts.css";
import NewProdItem from "./newProdItem/NewProdItem";

const NewProducts = ({ data }) => {
  return (
    <div className="container">
      <div className="new__title--wrap">
        <h3 className="new__title">Новинки</h3>
      </div>
      <div className="new__prod--container">
        {data.map((item, id) => (
          <NewProdItem item={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;

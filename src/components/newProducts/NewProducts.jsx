import React from "react";
import "./newProducts.css";
import { Link } from "react-router-dom";
import NewProdItem from "./newProdItem/NewProdItem";
import { IoIosArrowForward } from "react-icons/io";

const NewProducts = ({ data }) => {
  return (
    <div className="container">
      <div className="new__prod--container">
        {data.map((item, id) => (
          <NewProdItem item={item} key={id} />
        ))}
      </div>
      <Link to={"/shop"} className="new__prod--link">
        <IoIosArrowForward className="new__link--icon" size={40} /> Перейти до
        каталогу
      </Link>
    </div>
  );
};

export default NewProducts;

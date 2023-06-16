import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import "./newProdItem.css";

const NewProdItem = ({ item }) => {
  return (
    <div className="container">
      <div className="new__prod--wrap">
        <p className="new__prod--price">{item.price} ₴</p>
        <Link to={"/shop/" + item.id}>
          <h4 className="new__prod--name">{item.productName}</h4>
        </Link>
        <p className="new__prod--desc">{item.shortDesc}</p>
        <p className="new__prod--status">{item.status}</p>
        <Link to={"/shop/" + item.id}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="new__img--wrap"
          >
            <motion.img
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              src={item.imgUrl}
              alt={item.productName}
              className="new__img"
            />
          </motion.div>
          <button to={"/shop/" + item.id} className="new__img--btn">
            <FaShoppingCart className="buy-icon" size={50} /> Купити
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewProdItem;

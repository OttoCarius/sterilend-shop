import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import "./shopComponentItem.css";

const ShopComponentItem = ({ item }) => {
  return (
    <div className="container">
      <div className="shop__prod--wrap">
        <p className="shop__prod--price">{item.price} ₴</p>
        <Link to={"/shop/" + item.id}>
          <h4 className="new__prod--name">{item.productName}</h4>
        </Link>
        <p className="shop__prod--desc">{item.shortDesc}</p>
        <p className="shop__prod--status">{item.status}</p>
        <Link to={"/shop/" + item.id}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="shop__img--wrap"
          >
            <motion.img
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              src={item.imgUrl}
              alt={item.productName}
              className="shop__img"
            />
          </motion.div>
          <button to={"/shop/" + item.id} className="shop__img--btn">
            <FaShoppingCart className="shop__buy-icon" size={50} /> Купити
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopComponentItem;

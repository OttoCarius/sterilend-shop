import React, { useState } from "react";
import "./productHero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CallMe from "../callMe/CallMe";

const ProductHero = ({ item }) => {
  const [callgActive, setCallActive] = useState(false);

  return (
    <div className="productHero__container">
      <div className="producthero__title--wrap">
        <span className="producthero__span">Революція</span>
        <h1 className="producthero__title">{item.revolut}</h1>
        <CallMe active={callgActive} setActive={setCallActive} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="productHero__details"
          onClick={() => setCallActive(true)}
        >
          Детальніше
        </motion.button>
      </div>
      <div className="producthero__img--wrap">
        <img
          src={item.imgUrl}
          alt={item.productName}
          className="producthero__img"
        />
      </div>
      <div className="producthero__info--wrap">
        <p className="producthero__oldPrice">{item.oldPrice} ₴</p>
        <p className="producthero__text">{item.price} ₴</p>
        <h3 className="producthero__name">{item.productName}</h3>
        <p className="producthero__class">{item.shortDesc}</p>
        <Link to={"/shop/" + item.id}>
          <motion.div
            whileHover={{ scale: 0.9 }}
            className="productHero__buy--border"
          >
            <motion.div
              whileHover={{ scale: 0.9 }}
              className="productHero__buy--border2"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="productHero__buy"
              >
                Купити
              </motion.button>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ProductHero;

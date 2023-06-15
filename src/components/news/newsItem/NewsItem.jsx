import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./news-item.css";

const NewsItem = ({ item }) => {
  return (
    <>
      <Link to={"/news/" + item.id}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="news__item--wrap"
        >
          <p className="news__item--date">{item.date}</p>
          <h4 className="news__item--title">{item.newTitle}</h4>
          <p className="news__item--text">{item.newText}</p>
          <img src={item.img} alt={item.newTitle} className="news__item--img" />
        </motion.div>
      </Link>
    </>
  );
};

export default NewsItem;

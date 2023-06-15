import React from "react";
import NewsItem from "./newsItem/NewsItem";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./news.css";

const News = ({ data }) => {
  return (
    <div className="news__wrapper--wrap">
      <div className="container news-wrapper">
        {data?.map((item, id) => (
          <NewsItem item={item} key={id} />
        ))}
      </div>
      <Link to={"/news"} className="news__link">
        <IoIosArrowForward className="new__link--icon" size={40} />
        Всі новини
      </Link>
    </div>
  );
};

export default News;

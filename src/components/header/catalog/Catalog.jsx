import React, { useState } from "react";
import servises from "../../../helpers/servises";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import "./catalog.css";

const Catalog = ({ active, setActive, item }) => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div
      className={active ? "catalog__wrap active" : "catalog__wrap"}
      onClick={() => setActive(false)}
    >
      <div className="cataloge" onClick={(e) => e.stopPropagation()}>
        <div className="catalog__links">
          <Link
            to={"/about"}
            onClick={() => setActive(false)}
            className="catalog__links--item"
          >
            Про нас
          </Link>
          <Link
            to={"/news"}
            onClick={() => setActive(false)}
            className="catalog__links--item"
          >
            Новини
          </Link>
          <Link
            to={"/contact"}
            onClick={() => setActive(false)}
            className="catalog__links--item"
          >
            Контакти
          </Link>
          <Link
            to={"/shop"}
            onClick={() => setActive(false)}
            className="catalog__links--item"
          >
            Каталог
          </Link>
        </div>
        <div className="catalog__content">
          {servises.map((servise, i) => (
            <div key={i}>
              {currentTab === `${servise.id}` && (
                <div className="catalog__title--wrapper">
                  <h3 className="title">{servise.group}</h3>
                  <div className="catalog__part-wrap">
                    <Link
                      className="part__title--link"
                      to={"/shop"}
                      onClick={() => setActive(false)}
                    >
                      <p className="part-title">{servise.part1}</p>
                    </Link>
                    <Link to={"/shop"} onClick={() => setActive(false)}>
                      <p className="part-title">{servise.part2}</p>
                    </Link>
                    <Link to={"/shop"} onClick={() => setActive(false)}>
                      <p className="part-title">{servise.part3}</p>
                    </Link>
                    <Link to={"/shop"} onClick={() => setActive(false)}>
                      <p className="part-title">{servise.part4}</p>
                    </Link>
                    <Link to={"/shop"} onClick={() => setActive(false)}>
                      <p className="part-title">{servise.part5}</p>
                    </Link>
                    <Link to={"/shop"} onClick={() => setActive(false)}>
                      <p className="part-title">{servise.part6}</p>
                    </Link>
                    <Link to={"/shop"} onClick={() => setActive(false)}>
                      <p className="part-title">{servise.part7}</p>
                    </Link>
                    <Link to={"/shop"} onClick={() => setActive(false)}>
                      <p className="part-title">{servise.part8}</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="catalog__tabs-wrap">
          <div className="catalog__tabs">
            {servises.map((servise, i) => (
              <img
                className="tabs-img "
                src={servise.img}
                alt="dsa"
                key={i}
                id={servise.id}
                img={servise.img}
                disabled={currentTab === `${servise.id}`}
                onClick={handleTabClick}
                style={{ background: `${servise.bg}` }}
              />
            ))}
          </div>

          <AiFillCloseCircle
            onClick={() => setActive(false)}
            size={40}
            className="close__catalog"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;

import React, { useState } from "react";
import servises from "../../../helpers/servises";
import "./catalog.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Catalog = ({ active, setActive }) => {
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
        <div className="catalog__content">
          {servises.map((servise, i) => (
            <div key={i}>
              {currentTab === `${servise.id}` && (
                <div className="catalog__title--wrapper">
                  <h3 className="title">{servise.group}</h3>
                  <div className="catalog__part-wrap">
                    <p className="part-title">{servise.part1}</p>
                    <p className="part-title">{servise.part2}</p>
                    <p className="part-title">{servise.part3}</p>
                    <p className="part-title">{servise.part4}</p>
                    <p className="part-title">{servise.part5}</p>
                    <p className="part-title">{servise.part6}</p>
                    <p className="part-title">{servise.part7}</p>
                    <p className="part-title">{servise.part8}</p>
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

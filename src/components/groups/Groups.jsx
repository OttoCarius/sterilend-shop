import React, { useState } from "react";
import servises from "../../helpers/servises";
import "./groups.css";
import { BsPlusCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Groups = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div>
      <h2 className="group-title">Групи товарів та послуг</h2>
      {servises.map((servise, i) => (
        <div key={i}>
          {currentTab === `${servise.id}` && (
            <div className="">
              <img src={servise.bImg} alt="" className="aa" />
            </div>
          )}
        </div>
      ))}
      <div className="tabs-container container">
        <div className="content">
          {servises.map((servise, i) => (
            <div key={i}>
              {currentTab === `${servise.id}` && (
                <div className="part-wrap">
                  <div className="db">
                    <p className="title">{servise.group}</p>
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
          <motion.button whileHover={{ scale: 1.1 }} className="content-btn">
            <BsPlusCircle size={40} color="white" className="plus-svg" />
            Детальніше
          </motion.button>
        </div>
        <div className="tabs-wrap">
          <div className="tabs">
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
        </div>
      </div>
    </div>
  );
};

export default Groups;

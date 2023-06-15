import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import "./call-me.css";

const CallMe = ({ active, setActive }) => {
  return (
    <div
      className={active ? "call__wrap active" : "call__wrap"}
      onClick={() => setActive(false)}
    >
      <div className="call" onClick={(e) => e.stopPropagation()}>
        <h4 className="call__title">Замовити дзвінок</h4>
        <div>
          <form className="call__form">
            <label htmlFor="name">
              Ваше Ім'я
              <input
                className="call__form--name"
                type="text"
                placeholder="Ваше Ім'я"
              />
            </label>
            <label htmlFor="">
              Номер телефона
              <input
                className="call__form--tel"
                placeholder="+38-() - - -"
                type="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
          </form>
        </div>
        <div>
          <button className="call__btn">
            <FaPhoneAlt size={40} className="call__btn--icon" />
            Замовити дзвінок
          </button>
        </div>
      </div>
      <AiFillCloseCircle
        onClick={() => setActive(false)}
        size={40}
        className="close__call"
      />
    </div>
  );
};

export default CallMe;

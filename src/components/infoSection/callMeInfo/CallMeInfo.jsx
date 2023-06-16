import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import "./callMeInfo.css";

const CallMeInfo = ({ active, setActive }) => {
  return (
    <div
      className={active ? "call__wrap active" : "call__wrap"}
      onClick={() => setActive(false)}
    >
      <div className="call" onClick={(e) => e.stopPropagation()}>
        <h4 className="call__title">Замовити дзвінок</h4>
        <div className="">
          <form className="call__form">
            <div className="call__form--wrap">
              <input
                className="call__form--name"
                type="text"
                placeholder="Ваше Ім'я"
                required
              />
              <input
                className="call__form--tel"
                placeholder="+38-() - - -"
                type="tel"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
            <button className="call__btn" type="submit">
              <FaPhoneAlt size={40} className="call__btn--icon" />
              Замовити дзвінок
            </button>
          </form>
        </div>
      </div>
      <AiFillCloseCircle
        onClick={() => setActive(false)}
        size={40}
        className="close__callme--info"
      />
    </div>
  );
};

export default CallMeInfo;

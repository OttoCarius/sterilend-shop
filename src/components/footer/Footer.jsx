import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import CallMeInfo from "../infoSection/callMeInfo/CallMeInfo";
import logo from "../../assets/logo/Group 24.png";
import "./footer.css";

const Footer = () => {
  const [callgActive, setCallActive] = useState(false);
  return (
    <section className="footer__section">
      <CallMeInfo active={callgActive} setActive={setCallActive} />
      <div className="container footer__container">
        <div className="logo__footer--wrapper">
          <img src={logo} alt="logo" />
          <h2>STERILAND</h2>
        </div>
        <div className="call__footer--wrap">
          <p>+38 095 344 22 11</p>
          <button
            className="info-section--button"
            onClick={() => setCallActive(true)}
          >
            <FaPhoneAlt size={40} className="info__section--icon" />
            Замовити дзвінок
          </button>
        </div>
        <div className="footer__adress--wrap">
          <p>
            Maidan Plaza <br /> Майдан Независимости, 2
          </p>
          <p>info@steriland.com</p>
        </div>
        <div className="footer__icons--wrap">
          <BsFacebook size={30} className="footer__icons" />
          <BsInstagram size={30} className="footer__icons" />
        </div>
      </div>
      <div className="footer__links--wrapper container">
        <Link>Доставка та самовивіз</Link>
        <Link>Про магазин</Link>
        <Link>Сертифікація</Link>
        <Link>Реквізити</Link>
        <Link>Повернення та гарантія</Link>
      </div>
      <div className="footer__links--wrapper2">
        <div className="container">
          <Link>© Steriland. Podlesnyi Andrew, 2023</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;

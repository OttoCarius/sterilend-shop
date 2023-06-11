import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo/Group 24.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <section className="header-bg">
      <div className="header  container">
        <div className="header__logo">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
          <p className="header__logo--title">Sterilend</p>
        </div>
        <div className="catalog">
          <h3 className="catalog__title">Каталог товару</h3>
          <div className="catalog__icon">
            <HiMenuAlt3 size={20} />
          </div>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                Про нас
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/news"}>
                Новини
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>
                Контакти
              </NavLink>
            </li>
          </ul>
          <div className="cart">
            <FaShoppingCart size={40} className="cart__icon" />
            <p className="items__length">4</p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;

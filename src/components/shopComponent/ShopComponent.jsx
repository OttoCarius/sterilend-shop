import React, { useState } from "react";
import products from "../../helpers/products.js";
import ShopComponentItem from "./shopComponentItem/ShopComponentItem";
import "./shop-component.css";

const itemPerRow = 20;

const ShopComponent = () => {
  const [next, setNext] = useState(itemPerRow);
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      const filteredProducts = products;
      setProductsData(filteredProducts);
    }

    if (filterValue === "medic") {
      const filteredProducts = products.filter(
        (item) => item.category === "medic"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "restaurant") {
      const filteredProducts = products.filter(
        (item) => item.category === "restaurant"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "beauty") {
      const filteredProducts = products.filter(
        (item) => item.category === "beauty"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "transport") {
      const filteredProducts = products.filter(
        (item) => item.category === "transport"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "social") {
      const filteredProducts = products.filter(
        (item) => item.category === "social"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "service") {
      const filteredProducts = products.filter(
        (item) => item.category === "service"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "all-brand") {
      const filteredProducts = products;
      setProductsData(filteredProducts);
    }
    if (filterValue === "SterilOx Medic Expert") {
      const filteredProducts = products.filter(
        (item) => item.productName === "SterilOx Medic Expert"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "SterilOx Restaurant Expert") {
      const filteredProducts = products.filter(
        (item) => item.productName === "SterilOx Restaurant Expert"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "SterilOx Beauty Expert") {
      const filteredProducts = products.filter(
        (item) => item.productName === "SterilOx Beauty Expert"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "SterilOx Transport Expert") {
      const filteredProducts = products.filter(
        (item) => item.productName === "SterilOx Transport Expert"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "SterilOx Social Expert") {
      const filteredProducts = products.filter(
        (item) => item.productName === "SterilOx Social Expert"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "SterilOx Service Expert") {
      const filteredProducts = products.filter(
        (item) => item.productName === "SterilOx Service Expert"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "SterilOx Salon Expert") {
      const filteredProducts = products.filter(
        (item) => item.productName === "SterilOx Salon Expert"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchProd = e.target.value;

    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchProd.toLowerCase())
    );
    setProductsData(searchProduct);
  };

  const handleMore = () => {
    setNext(next + itemPerRow);
  };

  return (
    <div className="filters__wrap--container">
      <div className="filters__wrap">
        <div className="category__select--wrap">
          <select onChange={handleFilter} className="category__select">
            <option value="sort-category">Фільтр по категоріям</option>
            <option value="all">Bci продукти</option>
            <option value="medic">Медицина</option>
            <option value="restaurant">Харчова торгівля</option>
            <option value="beauty">Індустрія краси</option>
            <option value="social">Сфера обслуговування</option>
            <option value="transport">Транспорт</option>
            <option value="service">Соціальна сфера та побут</option>
          </select>
        </div>
        <div className="brand__select--wrap">
          <select className="brand__select" onChange={handleFilter}>
            <option value="sort-brand">Фільтр по брендам</option>
            <option value="all-brand">Bci бренди</option>
            <option value="SterilOx Medic Expert">SterilOx Medic Expert</option>
            <option value="SterilOx Restaurant Expert">
              SterilOx Restaurant Expert
            </option>
            <option value="SterilOx Beauty Expert">
              SterilOx Beauty Expert
            </option>
            <option value="SterilOx Transport Expert">
              SterilOx Transport Expert
            </option>
            <option value="SterilOx Social Expert">
              SterilOx Social Expert
            </option>
            <option value="SterilOx Service Expert">
              SterilOx Service Expert
            </option>
            <option value="SterilOx Salon Expert">SterilOx Salon Expert</option>
          </select>
        </div>
        <div className="input__select--wrap">
          <input
            className="input__select"
            type="text"
            placeholder="Пошук товару"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="">
        {productsData.length === 0 ? (
          <div className="no-product--title">
            <h2>такого товару немає</h2>
          </div>
        ) : (
          <div className="shop__wrap">
            {productsData?.slice(0, next)?.map((item, id) => (
              <ShopComponentItem item={item} key={id} />
            ))}
          </div>
        )}
        {productsData.length === 0 ? (
          <button onClick={handleMore} className="more__btn--none">
            Більше товарів
          </button>
        ) : (
          <button onClick={handleMore} className="more__btn">
            Більше товарів
          </button>
        )}
      </div>
    </div>
  );
};

export default ShopComponent;

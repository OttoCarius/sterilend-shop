import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../utils/scrollToTop";
import Layout from "../components/Layout";
import Home from "../pages/homePage/Home";
import About from "../pages/aboutUs/AboutUs";
import Contact from "../pages/contactsPage/Contacts";
import Shop from "../pages/shopPage/Shop";
import ProductInfo from "../pages/productInfo/ProductInfo";
import Order from "../pages/orderPage/OrderPage";
import Thanks from "../pages/thanksPage/ThanksPage";
import News from "../pages/newsPage/News";
import NewsDetails from "../pages/newsDetails/SingleNews";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

const RoutesApp = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductInfo />} />
          <Route path="/order" element={<Order />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/notFoundPage" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesApp;

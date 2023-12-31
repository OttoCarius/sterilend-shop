import React, { useEffect, useState } from "react";
import products from "../../helpers/products";
import news from "../../helpers/news";
import Hero from "../../components/hero/Hero";
import Groups from "../../components/groups/Groups";
import NewProducts from "../../components/newProducts/NewProducts";
import Clock from "../../components/clock/Clock";
import InfoSection from "../../components/infoSection/InfoSection";
import News from "../../components/news/News";
import "./home.css";

const Home = () => {
  const [heroData, setHeroData] = useState([]);
  const [newProdData, setNewProdData] = useState([]);
  const [topProduct, setTopProduct] = useState([]);

  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    const filterHero = products.filter((item) => item.category === "hero");
    const filterNewProd = products.filter((item) => item.category === "new");
    const filterTopProd = products.filter((item) => item.category === "top");

    const filterTopNews = news.filter((item) => item.firstPage === "first");

    setHeroData(filterHero);
    setNewProdData(filterNewProd);
    setTopProduct(filterTopProd);

    setTopNews(filterTopNews);
  }, []);

  return (
    <div className="home__container">
      <Hero data={heroData} />
      <div className="group-wrap">
        <Groups />
      </div>
      <div className="new__title--wrap">
        <h3 className="new__title">Новинки</h3>
      </div>
      <NewProducts data={newProdData} />
      <Clock />
      <div className="new__title--wrap">
        <h3 className="new__title">Топ-товари</h3>
      </div>
      <NewProducts data={topProduct} />
      <InfoSection />
      <div className="news__title--wrap">
        <h3 className="new__title">Новини</h3>
      </div>
      <News data={topNews} />
    </div>
  );
};

export default Home;

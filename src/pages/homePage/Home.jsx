import React, { useEffect, useState } from "react";
import products from "../../helpers/products";
import Hero from "../../components/hero/Hero";
import "./home.css";

const Home = () => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const filterHero = products.filter((item) => item.category === "hero");

    setHeroData(filterHero);
  }, []);

  return (
    <div className="home__container">
      <Hero data={heroData} />
    </div>
  );
};

export default Home;

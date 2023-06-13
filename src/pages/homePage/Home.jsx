import React, { useEffect, useState } from "react";
import products from "../../helpers/products";
import Hero from "../../components/hero/Hero";
import "./home.css";
import Groups from "../../components/groups/Groups";
import NewProducts from "../../components/newProducts/NewProducts";

const Home = () => {
  const [heroData, setHeroData] = useState([]);
  const [newProdData, setNewProdData] = useState([]);

  useEffect(() => {
    const filterHero = products.filter((item) => item.category === "hero");
    const filterNewProd = products.filter((item) => item.category === "new");

    setHeroData(filterHero);
    setNewProdData(filterNewProd);
  }, []);

  return (
    <div className="home__container">
      <Hero data={heroData} />
      <div className="group-wrap">
        <Groups />
      </div>
      <div>
        <NewProducts data={newProdData} />
      </div>
    </div>
  );
};

export default Home;

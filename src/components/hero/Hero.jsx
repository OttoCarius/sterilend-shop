import React from "react";
import ProductHero from "../hero/productHero/ProductHero";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./hero.css";

const Hero = ({ data }) => {
  return (
    <div className="hero container">
      <Splide
        options={{
          perPage: 1,
          arrows: false,
          pagination: true,
          classes: {
            pagination: "splide__pagination ",
            page: "splide__pagination__page ",
          },
          drag: "free",
          rewind: true,
          gap: 300,
          width: 1400,
          breakpoints: {
            1120: { perPage: 1, width: 1100 },
            674: { perPage: 1, width: 600 },
            420: { perPage: 1, width: 400 },
          },
        }}
      >
        {data?.map((item) => (
          <SplideSlide key={item.id}>
            <ProductHero item={item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Hero;

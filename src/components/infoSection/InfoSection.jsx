import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./info-section.css";

const InfoSection = () => {
  return (
    <section className="info__section">
      <div className="info__section--wrap container">
        <div className="info__text--wrap">
          <h3>
            Ми готові запропонувати повний спектр індивідуальних рішень для
            проектів
          </h3>
          <h5>Про нас i нашу місію</h5>
          <div className="info__text--column">
            <p>
              Steriland - це електрохімічно активований водний розчин, це
              результат співвідношення електричних напруг, хімічних реакцій та
              взаємного перетворення хімічної та електричної.
            </p>
            <p>
              Steriland - це електрохімічно активований водний розчин, це
              результат співвідношення електричних напруг, хімічних реакцій та
              взаємного перетворення хімічної та електричної.
            </p>
          </div>
        </div>
        <div className="info-section--img"></div>
        <div className="info-section--img2">
          <h3>Отримати консультацію продавця</h3>
          <h4>+38 095 344 22 11</h4>
          <button>
            <FaPhoneAlt size={40} className="info__section--icon" />
            Замовити дзвінок
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

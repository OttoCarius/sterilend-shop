import React, { useState, useEffect } from "react";
import "./clock.css";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("July 9, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <section className="clock-section container">
      <div className="clock__title container">
        <h2>Обмежена пропозиція та знижки на товар</h2>
      </div>
      <div className="clock__wrap--container">
        <div className="clock__wrap--day2">
          <div className="clock__wrap--day">
            <h3>{days}</h3>
            <h4>Дні</h4>
          </div>
        </div>
        <span>:</span>
        <div className="clock__wrap--day2">
          <div className="clock__wrap--day">
            <h3>{hours}</h3>
            <h4>Годин</h4>
          </div>
        </div>
        <span>:</span>
        <div className="clock__wrap--day2">
          <div className="clock__wrap--day">
            <h3>{minutes}</h3>
            <h4>Хвилин</h4>
          </div>
        </div>
        <span>:</span>
        <div className="clock__wrap--day2">
          <div className="clock__wrap--day">
            <h3>{seconds}</h3>
            <h4>Секунд</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clock;

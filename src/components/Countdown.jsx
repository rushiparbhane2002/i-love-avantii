import React, { useEffect, useState } from "react";
import "../styles/Countdown.css";

const START_DATE = new Date("2025-04-28");

function Countdown() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const updateDays = () => {
      const today = new Date();
      const diff = today - START_DATE;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    };

    updateDays();

    const timer = setInterval(updateDays, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <h1>❤️ Days Since I First Saw You ❤️</h1>

      <h2>{days}</h2>

      <p>Every single day my heart still chooses you.</p>
    </section>
  );
}

export default Countdown;

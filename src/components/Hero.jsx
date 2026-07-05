import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

import hero from "../assets/images/love2.png";

const quotes = [
  "You are my favourite hello ❤️",

  "My heart smiles because of you 💖",

  "You became my happiest chapter 🌸",

  "Every moment with you feels magical ✨",

  "You are my today and every tomorrow ❤️",
];

function Hero() {
  const [index, setIndex] = useState(0);

  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);

        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="overlay"></div>

      <div className="hero-left">
        <h3>💖 For The Most Beautiful Girl 💖</h3>

        <h1>I LOVE YOU AVANTII ❤️</h1>

        <div className="quote-box">
          <p className={fade ? "show" : "hide"}>{quotes[index]}</p>
        </div>

        <p className="subtitle">
          Some people become memories.
          <br />
          You became my heartbeat.
        </p>

        <a href="#gallery">
          <button>Explore Memories ❤️</button>
        </a>
      </div>

      <div className="hero-right">
        <div className="circle"></div>

        <img src={hero} alt="Avantii" />
      </div>

      <span className="heart h1">❤️</span>

      <span className="heart h2">💕</span>

      <span className="heart h3">💖</span>

      <span className="heart h4">💗</span>
    </section>
  );
}

export default Hero;

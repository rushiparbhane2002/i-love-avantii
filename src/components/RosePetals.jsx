import React from "react";
import "../styles/RosePetals.css";

import petal1 from "../assets/petals/petal1.png";
import petal2 from "../assets/petals/petal2.png";
import petal3 from "../assets/petals/petal3.png";
import petal4 from "../assets/petals/petal4.png";
import petal5 from "../assets/petals/petal5.png";

const petals = [petal1, petal2, petal3, petal4, petal5];

function RosePetals() {
  return (
    <div className="petals-container">
      {[...Array(30)].map((_, i) => {
        const petal = petals[Math.floor(Math.random() * petals.length)];

        return (
          <img
            key={i}
            src={petal}
            alt=""
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              width: `${20 + Math.random() * 25}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}

export default RosePetals;

import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PhotoSlider from "./components/PhotoSlider";
import LoveReasons from "./components/LoveReasons";
import Timeline from "./components/Timeline";
import Letter from "./components/Letter";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
// import CursorGlow from "./components/CursorGlow";
import RosePetals from "./components/RosePetals";
// import Loader from "./components/Loader";

function App() {
  return (
    <>
      {/* <Loader /> */}

      <div className="App">
        {/* <CursorGlow /> */}
        <RosePetals />

        <Navbar />

        <Hero />

        <PhotoSlider />
        <LoveReasons />
        <Timeline />
        <Letter />
        <Countdown />
        <Footer />
      </div>
    </>
  );
}

export default App;

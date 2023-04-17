import React from "react";
import "./app.css";
import HeaderVideo from "./components/HeaderVideo";
import Hero from "./components/Hero";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SimpleSlider from "./components/SimpleSlider";
import Sustainability from "./components/Sustainability";
import HighQuality from "./components/HighQuality";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <HeaderVideo />
      <Hero />
      <SimpleSlider />
      <Sustainability />
      <HighQuality />
    </div>
  );
};

export default App;

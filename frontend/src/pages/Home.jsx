import React from "react";
import Carousel from "./Carousel.jsx";
import ThreeColumns from "./ThreeColumns.jsx";
import TwoColumns from "./TwoColumns.jsx";
const Home = () => {
  return (
    <div className="container-fluid">
      <Carousel />
      <ThreeColumns />
      <TwoColumns />
    </div>
  );
};

export default Home;

import React from "react";
import Data from "./Data";
import Slide from "./Slide";
import "./Home.css";

const Hero = () => {
  return (
    <>
      <Slide slides={Data} />
    </>
  );
};

export default Hero;

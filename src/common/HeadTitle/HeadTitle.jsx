import React from "react";
import { useLocation } from "react-router-dom";

const HeadTitle = () => {
  const location = useLocation();
  return (
    <>
      <section className="images-heading">
        <div className="container">
          <h1></h1>
          <button></button>
        </div>
      </section>
    </>
  );
};

export default HeadTitle;

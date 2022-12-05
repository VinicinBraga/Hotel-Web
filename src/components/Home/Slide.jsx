import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Data from "./Data";
import Form from "./Form";
import "../../images/slider1.jpg";

const Slide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i>
              <FaCaretLeft className="slide-icon" />
            </i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i>
              <FaCaretRight className="slide-icon" />
            </i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={slide}
            >
              {index === current && (
                <img
                  src={require(`../../images/${slide.image}.jpg`)}
                  alt={slide.id}
                  width="100%"
                />
              )}
            </div>
          );
        })}
      </section>
      <setion className="slide-form">
        <div className="container">
          <h2>Enjoy Your Holiday</h2>
          <span>Search and Book Hotels</span>
          <Form />
        </div>
      </setion>
    </>
  );
};

export default Slide;

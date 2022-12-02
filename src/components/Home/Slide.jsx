import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Data from "./Data";

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
              <FaCaretLeft />
            </i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i>
              <FaCaretRight />
            </i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={slide.id}
            >
              {index === current && (
                <img src={slide.image} alt={index} width="100%" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Slide;

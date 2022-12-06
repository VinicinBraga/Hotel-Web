import React from "react";
import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import aboutImage from "../../images/about-img-1.jpg";

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet
            consectetur piscing elit amet consectetur adipiscing elit sed et
            eletum nulla eu placerat felis etiam tincidunt orci lacus id varius
            dolor fermum sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet
            consectetur piscing elit amet consectetur adipiscing elit sed et
            eletum nulla eu placerat felis etiam tincidunt orci lacus id varius
            dolor fermum sit amet.
          </p>
          <button className="secondary-btn">
            Explore More
            <i>
              <FaLongArrowAltRight />
            </i>
          </button>
        </div>
        <div className="row image">
          <img src={aboutImage} alt="" />
          <div className="control-btn">
            <button className="prev">
              <i>
                <FaPlay />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;

import React from "react";
import AboutCard from "./AboutCard";
import "./About.css";
import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import aboutFeatureImage from "../../images/feature-img-1.jpg";
import HeadTitle from "../../common/HeadTitle/HeadTitle";

const About = () => {
  return (
    <>
      <HeadTitle />
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Features</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit amet
              consectetur piscing elit amet consectetur adipiscing elit sed et
              eletum nulla eu placerat felis etiam tincidunt orci lacus id
              varius dolor fermum sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit amet
              consectetur piscing elit amet consectetur adipiscing elit sed et
              eletum nulla eu placerat felis etiam tincidunt orci lacus id
              varius dolor fermum sit amet.
            </p>
            <button className="secondary-btn">
              Explore More
              <i>
                <FaLongArrowAltRight />
              </i>
            </button>
          </div>
          <div className="row image">
            <img src={aboutFeatureImage} alt="" />
            <div className="control-btn">
              <button className="prev">
                <i>
                  <FaPlay />
                </i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

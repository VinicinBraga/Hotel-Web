import React from "react";
import { FaImage } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={props.images} alt="" />
          <i>
            <FaImage />
          </i>
          <div className="title">
            <h3>{props.title}</h3>
          </div>
        </div>
      </div>
      <div className="popup">
        <div className="hide"></div>
        <div className="popup-content">
          <button>Close</button>
          <img src={props.images} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;

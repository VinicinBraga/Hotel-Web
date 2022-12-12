import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

const Card = ({ images, title }) => {
  const [popup, setPopup] = useState(false);
  const toggleModal = () => {
    setPopup(!popup);
  };
  return (
    <>
      <div className="items">
        <div className="img" onClick={toggleModal}>
          <img src={images} alt="" />
          <i>
            <FaImage />
          </i>
          <div className="title">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="title">
          <h3>{title}</h3>
        </div>
      </div>
      {popup && (
        <div className="popup">
          <div className="hide"></div>
          <div className="popup-content">
            <button onClick={toggleModal}>Close</button>
            <img src={images} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

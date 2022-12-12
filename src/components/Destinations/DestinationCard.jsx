import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const DestinationCard = ({
  item: { id, image, title, desc, sidepara, paraImage_one, paraImage_two },
}) => {
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={image} alt={title} />
          <Link to={`/singlepage/${id}`} className="blogItem-link">
            <i>
              <FaExternalLinkAlt />
            </i>
          </Link>
        </div>
        <div className="tile">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;

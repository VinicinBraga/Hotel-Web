import React from "react";
import DestinationCard from "./DestinationCard";
import DestinationData from "./DestinationData";

const DestinationItem = () => {
  const items = DestinationData;
  return (
    <>
      <section className="gallery desi mtop">
        <div className="container">
          <div className="content grid">
            {items.map((item) => {
              return <DestinationCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationItem;

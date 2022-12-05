import React from "react";

const Form = () => {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Search City" name="" id="" />
        <div className="flex_space">
          <input type="date" placeholder="Check In" />
          <input type="date" placeholder="Check Out" />
        </div>
        <div className="flex_space">
          <input type="number" placeholder="Adult(s)(+18)" />
          <input type="number" placeholder="Children(0 - 17)" />
        </div>
        <input type="number" placeholder="Rooms" />
        <input type="Submit" value="Search" className="submit" />
      </form>
    </>
  );
};

export default Form;

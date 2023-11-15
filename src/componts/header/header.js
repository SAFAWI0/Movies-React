import React from "react";
import "./header.css";
const MainHeader = () => {
  return (
    <div>
      <div className="header">
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <input className="input" type="text" placeholder="Search" />
          <button className="buttom">Go </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

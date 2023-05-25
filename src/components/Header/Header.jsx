import React from "react";
import "./Header.css";
import icon from "assets/Icon.png";
import person from "assets/Ellipse 3.png";
const Header = () => {
  return (
    <div className="header">
      <div>
        {" "}
        <img className="img-header" src={icon} alt="" />
        <input
          className="search-header"
          placeholder="Search Item, Collection and Account.."
        ></input>
      </div>
      <div className="both-circle">
        <div className="circle"></div>

        <img src={person} alt="" />
      </div>
    </div>
  );
};

export default Header;

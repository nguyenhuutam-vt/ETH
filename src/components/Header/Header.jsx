import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import icon from "assets/Icon.png";
import person from "assets/Ellipse 3.png";
const Header = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
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
        <div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={person}></img>
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>
              Nguyen Huu Tam
              <br />
              <span>Website Designer</span>
            </h3>
            <ul>
              <DropdownItem img={person} text={"Logout"} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function logout() {
  localStorage?.removeItem("actor");
  // window.location.reload();
  window.location.replace("/login");
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img></img>
      <a
        onClick={() => {
          logout();
        }}
      >
        {" "}
        {props.text}{" "}
      </a>
    </li>
  );
}

export default Header;

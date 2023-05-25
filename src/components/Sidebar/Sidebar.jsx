import React from "react";
import { SidebarData } from "./SidebarData";
import Frame from "../../assets/Frame.png";
import "./Sidebar.css";
import Ethereum from "../../assets/Ethereum (ETH).png";
import { Link, NavLink } from "react-router-dom";
import Fram14 from "../../assets/Frame 14.png";
import vector from "../../assets/Vector.png";
export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <div>
          <img src={Frame} alt="" />
        </div>
        <div className="NFT">
          <nav>
            <Link className="link" to="/home">
              MyNFT
            </Link>
          </nav>
          <div className="market">NFT Marketplace</div>
        </div>
      </div>
      <div className="">
        <ul>
          {SidebarData.map((val, key) => {
            return (
              <li className="side" key={key}>
                <div className="icon">{val.icon}</div>
                <NavLink to={`${val.link}`}>{val.title}</NavLink>

                <div>{val.toggle}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="balance">
        <div className="yourBalance">Your Balance</div>
        <div className="number">1,034.02</div>
        <div className="ETH">
          <div>
            <img src={Ethereum} alt="" />
          </div>
          <div className="eth1">ETH</div>
        </div>

        <button className="upBalance">
          {" "}
          <div className="fram14">
            {" "}
            <img src={Fram14} alt="" />
          </div>
          <div className="topup">Top Up Balance</div>
          <div className="vector">
            <img src={vector} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

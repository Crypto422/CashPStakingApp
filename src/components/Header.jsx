/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useContext } from "react";
import img_logo from "../assests/images/logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";


export default function Header() {
  const { connectWallet, network, disconnectWallet } = useContext(AppContext);

  const [headerClassView, setHeaderClass] = useState("");
  const [headerClassHide, setHeaderClass1] = useState("");
  const viewMenu = () => {
    setHeaderClass("header_responsive");
    setHeaderClass1("");
  };
  const hideMenu = () => {
    setHeaderClass1("header_responsive_hide");
    setHeaderClass("");
  };
  return (
    <>
      <div className="header container">
        <button onClick={viewMenu} className="header_menu_btn">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className={"header_left " + headerClassView + headerClassHide}>
          <button onClick={hideMenu} className="close_btn">
            X
          </button>
          <Link to="/">
            <h3 onClick={hideMenu}>HOME</h3>
          </Link>
          <a 
            target="_blank"
            href={`https://pulsex.com`}
          >
             <h3 onClick={hideMenu}>BUY</h3>
          </a>
          <Link to="/nftbank">
            <h3 onClick={hideMenu}>NFT&nbsp;BANK</h3>
          </Link>
          <Link to="/theatm">
            <h3 onClick={hideMenu}>AN ATM</h3>
          </Link>
          <Link to="/cashP">
            <h3 onClick={hideMenu}>CashPAD</h3>
          </Link>
          <div className="header_con_btn">
            <div
              className="responsive_a_grp"
              style={{ display: "inline-grid" }}
            >
              <Link to="/chart" onClick={hideMenu}>
                Chart
              </Link>
              <Link to="/" onClick={hideMenu}>
                WhitePaper{" "}
              </Link>
              <Link to="/" onClick={hideMenu}>
                Buy Casher{" "}
              </Link>
              <Link to="/" onClick={hideMenu}>
                Tutorial{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="header_center">
          <img className="img_logo" src={img_logo} alt="logo" />
        </div>
        <div className={"header_right "}>
          <Link to="/chart">
            <div className="header_chart">Chart</div>
          </Link>
          <select className="header_select">
            <option>More</option>
            <option>WhitePaper</option>
            <option>Buy Casher </option>
            <option>Tutorial</option>
          </select>
        </div>
        {
          network !== undefined ?
            <button
              className="theme_button"
              style={{ marginRight: "30px" }}
              onClick={disconnectWallet}
            >
              Disconnect
            </button>
            :
            <button
              className="theme_button"
              style={{ marginRight: "30px" }}
              onClick={connectWallet}
            >
              connectWallet
            </button>
        }
      </div>
    </>
  );
}

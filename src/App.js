import "./App.css";
import React, { useState } from "react";
import logo from "./Assets/logo.svg";
import nut from "./Assets/nut.svg";
import social1 from "./Assets/social1.svg";
import social2 from "./Assets/social2.svg";
import social3 from "./Assets/social3.svg";
import meta from "./Assets/meta.svg";
import connect from "./Assets/connect.svg";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`overlay ${open ? "display-flex" : ""}`}
      ></div>
      <div className={`pop-up ${open ? "display-flex" : ""}`}>
        <div className="pop">
          <img src={meta} alt="" />
          <h2>MetaMask</h2>
        </div>
        <div className="pop">
          <img src={connect} alt="" />
          <h2>Wallet Connect</h2>
        </div>
      </div>
      <div className="top-app">
        <img src={logo} alt="" />
        <p>
          The BNB Reward Pool with the tastiest daily return and lowest dev fee
        </p>
      </div>
      <div className="bottom-app">
        <div className="box">
          <div className="row">
            <p>Contract</p>
            <p>7.92 BNB</p>
          </div>
          <div className="row">
            <p>Wallet</p>
            <p>0.00 BNB</p>
          </div>
          <div className="row">
            <p>Your Nuts</p>
            <p>0 NUTS</p>
          </div>
          <input type="text" className="input" />
          <div className="btn-div">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="connect"
            >
              connect Wallet <img src={nut} alt="" />
            </button>
            <button className="yellow-btn">Hoard Nuts</button>
          </div>
          <div className="row">
            <p>Your Rewards</p>
            <p>0.000 BNB</p>
          </div>
          <div className="btn-div">
            <button className="compound">compound nuts</button>
            <button className="yellow-btn">Hoard Nuts</button>
          </div>
        </div>
        <div className="box">
          <h2>Nutrition Facts</h2>
          <div className="row">
            <p>Daily Return</p>
            <p>10%</p>
          </div>
          <div className="row">
            <p>APR</p>
            <p>3,650%</p>
          </div>
          <div className="row">
            <p>Treasury Fee</p>
            <p>10%</p>
          </div>
        </div>
        <div className="box">
          <h2>Referral Link</h2>
          <input type="text" className="input" />
          <p className="note">
            Earn 10% of the BNB used to hoard beans from anyone who uses your
            referral link
          </p>
        </div>
        <div className="social-div">
          <a href="#">
            <img src={social1} alt="" />
          </a>
          <a href="#">
            <img src={social2} alt="" />
          </a>
          <a href="#">
            <img src={social3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

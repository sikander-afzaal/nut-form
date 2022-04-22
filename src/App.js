import "./App.css";
import React, { useState } from "react";
import logo from "./Assets/logo.png";
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
        <div className="logo-div">
          <img src={logo} alt="" />
          <h1>GREEN GROWLER</h1>
        </div>
        <p>Get stinking rich Growing Green</p>
      </div>
      <div className="bottom-app">
        <div className="box">
          <div className="row">
            <p>Total Weight</p>
            <p>7.92 KG</p>
          </div>
          <div className="row">
            <p>Your Wallet</p>
            <p>0.00 BNB</p>
          </div>
          <div className="row">
            <p>Your Seeds</p>
            <p>0 SEEDS</p>
          </div>
          <input type="text" className="input" />
          <div className="btn-div">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="connect"
            >
              connect Wallet
            </button>
            <button className="yellow-btn">Plant Seeds</button>
          </div>

          <div className="btn-div">
            <button className="compound">Feed/Compound</button>
            <button className="yellow-btn">Sell Green</button>
          </div>
          <div className="row">
            <p>Profit Made</p>
            <p>0.000 BNB</p>
          </div>
        </div>

        <div className="box">
          <h2>Yeild/Consumables</h2>
          <div className="row">
            <p>Daily Profit</p>
            <p>10%</p>
          </div>
          <div className="row">
            <p>APR</p>
            <p>3650%</p>
          </div>
          <div className="row">
            <p>Pay Off Cops</p>
            <p>10%</p>
          </div>
        </div>
        <div className="box">
          <h2>Referral Link</h2>
          <input type="text" className="input" />
          <p className="note">
            Receive 10% Straight into your profits , From any customers Brought
            by your referral code
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

import "./Landing.css";
import React, { useState } from "react";
import logo from "../Assets/logo.png";
import social1 from "../Assets/social1.svg";
import social2 from "../Assets/social2.svg";
import social3 from "../Assets/social3.svg";

import Roadmap from "../Components/Roadmap";
import ConnectModal from "../Components/ConnectModal";
function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <div className="landing">
      <a href="#roadmap" className="link">
        Roadmap
      </a>
      {open && <ConnectModal setModal={setOpen} />}
      <div className="top-app">
        <img src={logo} alt="" />
        <p>Get stinking rich Growing Green</p>
      </div>
      <div className="bottom-app">
        <div className="box">
          <div className="row">
            <p>Total Weight</p>
            <p>0 KG</p>
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
          <h2>Yield/Consumables</h2>
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
        <div className="box last-box">
          <p className="note2">
            Please note: You can not unstake; only withdraw earnings.
          </p>
          <ul>
            <li>🍀 Tokenomics:</li>
            <li>🍀 Rewards can be re-invested & withdrawn daily.</li>
            <li>
              🍀 To ensure the max rewards (10% we suggest the following
              strategy:
            </li>
            <li>🍀 Plant Seeds (deposit bnb)</li>
            <li>🍀 Feed weed 6 days per week </li>
            <li>
              🍀 Sell weed 1 day per week ( But the choice is yours you can
              remove rewards daily )
            </li>
            <li>
              🍀 Every deposit/withdrawal has a base tax of 10% to ensure
              contract longevity, along with an insurance fee
            </li>
          </ul>
        </div>
        <Roadmap />
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

export default Landing;

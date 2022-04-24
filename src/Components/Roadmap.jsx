import React from "react";
import "./style.css";
import logo from "../Assets/logo.png";
import arrowDesk from "../Assets/arrow-desktop.png";
import arrowMob from "../Assets/arrow-mob.png";
import arrowMob2 from "../Assets/arrow2-mob.png";
import money from "../Assets/money.png";
function Roadmap() {
  return (
    <div className="roadmap">
      <div className="road-cont">
        <div className="top-roadmap">
          <img src={logo} alt="" />
          <h1>ROADMAP</h1>
        </div>
        <div className="bot-roadmap">
          <div className="phase-div phase1">
            <h1>Phase 1</h1>
            <ul>
              <li>SETUP TWITTER AND TELEGRAM </li>
              <li>HIT 50 MEMBERS ON TELEGRAM</li>
              <li>FINISH, TEST, DEPLOY DAPP</li>
              <li>REGISTER WITH DAPP RADAR</li>
            </ul>
          </div>
          <img src={arrowDesk} alt="" className="arrow-desktop arrow-1" />
          <img src={arrowMob} alt="" className="arrow-mob arrow-1-mob" />
          <div className="phase-div phase2">
            <h1>Phase 2</h1>
            <ul>
              <li>SMALL CALL GROUP MARKETING</li>
              <li>START NFT COLLECTION BUILD</li>
              <li>PARTNERSHIP ANNOUNCEMENT</li>
              <li>SNEAK PEAK AT "BUDZ" NFTS</li>
              <li>REVEAL UTILITY FOR "BUDZ" NFTS</li>
            </ul>
          </div>
          <img src={money} alt="" className="money" />
          <h1 className="defi">DEFI ECOSYSTEM</h1>
          <img src={arrowDesk} alt="" className="arrow-desktop arrow-2" />
          <img src={arrowMob2} alt="" className="arrow-mob arrow-2-mob" />
          <div className="phase-div phase4">
            <h1>Phase 4</h1>
            <ul>
              <li>LOTTERY ROLLOUT</li>
              <li>COMMUNITY VOTING POLL</li>
              <li>PHASE 5 OPTIONS</li>
            </ul>
          </div>
          <img src={arrowDesk} alt="" className="arrow-desktop arrow-3" />
          <img src={arrowMob} alt="" className="arrow-mob arrow-3-mob" />
          <div className="phase-div phase3">
            <h1>Phase 3</h1>
            <ul>
              <li>LAUNCH "BUDZ" NFT COLLECTION</li>
              <li>LOTTERY PLAN DETAILS</li>
              <li>CONTINUED METHODICAL MARKETING</li>
              <li>CONTRACT AUDIT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

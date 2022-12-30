import "./Sidebar.css";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <>
      {sideToggle && (
        <div
          onClick={() => setSideToggle(false)}
          className="overlay-side"
        ></div>
      )}
      {sideToggle ? (
        <AiOutlineClose
          onClick={() => setSideToggle(false)}
          className="toggle"
        />
      ) : (
        <AiOutlineMenu onClick={() => setSideToggle(true)} className="toggle" />
      )}
      <div className={`sidebar ${sideToggle ? "active-side" : ""}`}>
        <Link onClick={() => setSideToggle(false)} to="/">
          Homepage
        </Link>
        <Link onClick={() => setSideToggle(false)} to="/mint">
          Mint Budz
        </Link>
        <Link onClick={() => setSideToggle(false)} to="/my">
          My Budz
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

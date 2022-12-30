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
        <Link to="/">Homepage</Link>
        <Link to="/mint">Mint</Link>
        <Link to="/">Mint</Link>
      </div>
    </>
  );
};

export default Sidebar;
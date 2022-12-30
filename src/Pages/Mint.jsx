import "./Mint.css";
import logo from "../Assets/logo.png";
import { useState } from "react";

const Mint = () => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="mint">
      <img src={logo} />
      <div className="calc">
        <button
          onClick={() => {
            setAmount((prev) => {
              if (prev > 0) {
                return (prev -= 1);
              } else {
                return prev;
              }
            });
          }}
        >
          -
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            setAmount((prev) => {
              if (prev < 50) {
                return (prev += 1);
              } else {
                return prev;
              }
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Mint;

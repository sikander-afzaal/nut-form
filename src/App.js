import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Mint from "./Pages/Mint";
import Sidebar from "./Layout/Sidebar";
import Buds from "./Pages/Buds";
import ConnectModal from "./Components/ConnectModal";
function App() {
  const [connectModal, setConnectModal] = useState(false);
  return (
    <div className="App">
      {connectModal && <ConnectModal setModal={setConnectModal} />}
      <button className="connect-btn" onClick={() => setConnectModal(true)}>
        Connect Wallet
      </button>
      <Sidebar />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Mint />} path="/mint" />
        <Route element={<Buds />} path="/my" />
      </Routes>
    </div>
  );
}

export default App;

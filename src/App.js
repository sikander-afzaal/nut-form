import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Mint from "./Pages/Mint";
import Sidebar from "./Layout/Sidebar";
import Buds from "./Pages/Buds";
function App() {
  return (
    <div className="App">
      <button className="connect-btn">Connect Wallet</button>
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

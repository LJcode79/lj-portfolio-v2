import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import MilitarySim from "./Pages/ProjectBlogs/MilitarySim/MilitarySim";
import GuessBoo from "./Pages/ProjectBlogs/GuessBoo/GuessBoo";
import TurtleRange from "./Pages/ProjectBlogs/TurtleRange/TurtleRange";
import AdventureRealm from "./Pages/ProjectBlogs/AdventureRealm/AdventureRealm";
import SpaceBase from "./Pages/ProjectBlogs/SpaceBase/SpaceBase";
import President from "./Pages/ProjectBlogs/PresidentialSimulator/President";
import Blackjack from "./Pages/ProjectBlogs/Blackjack/Blackjack";
import Cubetube from "./Pages/ProjectBlogs/CubeTube/Cubetube";
import DoorDetector from "./Pages/ProjectBlogs/DoorDetector/DoorDetector";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/milSim" element={<MilitarySim />} />
        <Route path="/guessBoo" element={<GuessBoo />} />
        <Route path="/turtle" element={<TurtleRange />} />
        <Route path="/adventure" element={<AdventureRealm />} />
        <Route path="/spaceBase" element={<SpaceBase />} />
        <Route path="/president" element={<President />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/cubetube" element={<Cubetube />} />
        <Route path="/doorDetector" element={<DoorDetector/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

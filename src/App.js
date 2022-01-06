import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import NavigationBar from "./NavigationBar";
import TechStack from "./TechStack";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/experiences" element={<TechStack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

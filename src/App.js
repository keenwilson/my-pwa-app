import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
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
        <Route path="/projects" element={<TechStack title={"Projects"} />} />
        <Route path="/techstack" element={<TechStack title={"Tech Stack"} />} />
        <Route path="/contact" element={<Contact title={"Time to chat?"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

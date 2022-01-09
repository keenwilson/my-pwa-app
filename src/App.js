import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import NavigationBar from "./NavigationBar";
import Projects from "./Projects";
import TechStack from "./TechStack";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects title={"Projects"} />} />
        <Route
          path="/techstack"
          element={<TechStack title={"Tech Experiences"} />}
        />
        <Route
          path="/contact"
          element={<Contact title={"Time to Collaborate?"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

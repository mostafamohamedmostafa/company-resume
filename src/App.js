import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./Pages/HomePage";
import { Navigation } from "./Components/Navigation";
import { AboutUsPage } from "./Pages/AboutUsPage";
import { TeamPage } from "./Pages/TeamPage";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App container-fluid">
      <Navigation></Navigation>
      <Routes>
        <Route path="company-resume" element={<HomePage />} />
        <Route path="AboutPage" element={<AboutUsPage />} />
        <Route path="TeamPage" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;

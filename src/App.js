import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HomePage } from "./Pages/HomePage";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App container-fluid">
      <HomePage></HomePage>
    </div>
  );
}

export default App;

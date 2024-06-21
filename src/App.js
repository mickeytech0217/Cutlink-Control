import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <LandingPage />
    </div>
  );
}

export default App;

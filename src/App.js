import React from "react";
import Header from "./components/Header";
import DatingCards from "./components/DatingCards";
import "./App.css";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      < SwipeButtons/>
    </div>
  );
}

export default App;

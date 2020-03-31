import React from "react";
import "./App.css";
import Question from "../Question/Question";
import ProgressBar from "../ProgressBar/ProgressBar";

function App() {
  return (
    <div className="game-container">
      <ProgressBar/>
      <Question />
    </div>
  );
}

export default App;

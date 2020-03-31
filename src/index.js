import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { GameProvider } from "./Context/GameContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById("root")
);

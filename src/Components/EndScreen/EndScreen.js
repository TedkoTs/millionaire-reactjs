import React, { useContext } from "react";
import "./style.css";
import { GameContext } from "../../Context/GameContext";

const EndScreen = () => {
  const { progress } = useContext(GameContext);

  return (
    <div className="score-board">
      <div className="score">You scored {progress} / 15 answers!</div>
    </div>
  );
};

export default EndScreen;

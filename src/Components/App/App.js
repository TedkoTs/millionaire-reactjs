import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import Question from "../Question/Question";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Button } from "reactstrap";
import { GameContext } from "../../Context/GameContext";
import EndScreen from "../EndScreen/EndScreen";

function App() {
  const {
    SetProgress,
    SetNewGame,
    newGame,
    SetQuestions,
    isGameOver,
    SetIsGameOver
  } = useContext(GameContext);

  const [showEndComp, setShowEndComp] = useState(false);
  const [clickedStart, setClickedStart] = useState(true);
  const [clickedEnd, setClickedEnd] = useState(false);

  useEffect(() => {
    setClickedEnd(false);
    setClickedStart(true);
  }, [isGameOver]);

  const clickStartButton = e => {
    e.preventDefault();
    console.log("Start the game");
    SetIsGameOver(false);
    setClickedStart(true);
    setClickedEnd(false);
    setShowEndComp(false);
    SetNewGame(!newGame);
    SetProgress(0);
    SetQuestions([]);
  };

  const clickEndButton = e => {
    e.preventDefault();
    console.log("Get the money");
    setShowEndComp(true);
    setClickedEnd(true);
    SetIsGameOver(true);
    SetNewGame(!newGame);
    setClickedStart(false);
    SetQuestions([]);
  };

  return (
    <div className="game-container">
      <Button
        disabled={clickedStart}
        className="btn-start"
        color="primary"
        onClick={clickStartButton}
      >
        Start Game
      </Button>
      <Button
        disabled={clickedEnd}
        className="btn-end"
        color="success"
        onClick={clickEndButton}
      >
        End Game
      </Button>
      <ProgressBar />
      {(showEndComp || isGameOver) && <EndScreen />}
      {!isGameOver && <Question />}
    </div>
  );
}

export default App;

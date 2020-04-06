import React, { useContext } from "react";
import Answers from "../Answer/Answers";
import "./style.css";
import { GameContext } from "../../Context/GameContext";
import SpinnerComp from "../../Components/Spinner/Spinner";
import EndScreen from "../EndScreen/EndScreen";

const Question = () => {
  const { questions, progress } = useContext(GameContext);

  if (questions.length > 0 && progress <= 14) {
    return (
      <div className="question-container">
        <div className="question-text">{questions[progress].question}</div>
        <Answers />
      </div>
    );
  } else if (progress === 15) {
    return <EndScreen />;
  } else {
    return <SpinnerComp />;
  }
};

export default Question;

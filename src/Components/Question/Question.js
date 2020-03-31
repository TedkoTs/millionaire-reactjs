import React, { useContext } from "react";
import Answers from "../Answer/Answers";
import "./style.css";
import { GameContext } from "../../Context/GameContext";
import SpinnerComp from '../../Components/Spinner/Spinner';


const Question = () => {
  const { questions, progress } = useContext(GameContext);
  
  if (questions.length > 0) {
    return (
      <div className="question-container">
        <div className="question-text">{questions[progress].question}</div>
        <Answers />
      </div>
    );
  } else {
    return (
      <SpinnerComp />
    );
  }
};

export default Question;

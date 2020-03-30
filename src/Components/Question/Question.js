import React, { useContext } from "react";
import Answers from "../Answer/Answers";
import "./style.css";
import { GameContext } from "../../Context/GameContext";

const Question = () => {
  const { questions, progress } = useContext(GameContext);

  console.log(questions);
  console.log(progress);
  

  if (questions.length > 0) {
    return (
      <div className="question-container">
        <div className="question-text">{questions[progress].question}</div>
        <Answers />
      </div>
    );
  } else {
    return (
      <div className="question-container">
        <div className="question-text">Here will be the question, maybe?</div>
        <Answers />
      </div>
    );
  }
};

export default Question;

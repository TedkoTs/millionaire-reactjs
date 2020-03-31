import React, { useContext, useState } from "react";
import "./style.css";
import { GameContext } from "../../Context/GameContext";
import SpinnerComp from '../../Components/Spinner/Spinner';


const Answers = () => {
  const { questions, progress, checkAnswer } = useContext(GameContext);
  const [answer, setAnswer] = useState("");

  console.log(questions[progress].correctAnswer);
  

  if (questions.length > 0) {
    return (
      <div className="answers-container">
        {questions[progress].allAnswers.map((answer, index) => {
          return (
            <div
              className="single-answer"
              key={index}
              onClick={e => {
                setAnswer(e.target.innerText);
                checkAnswer(answer);
              }}
            >
              {answer}
            </div>
          );
        })}
      </div>
    );
  } else {
    return  <SpinnerComp />
  }
};

export default Answers;

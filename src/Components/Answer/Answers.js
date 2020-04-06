import React, { useContext } from "react";
import "./style.css";
import { GameContext } from "../../Context/GameContext";
import SpinnerComp from "../../Components/Spinner/Spinner";

const Answers = () => {
  const { questions, progress, checkAnswer } = useContext(GameContext);

  console.log(`The correct answer is ${questions[progress].correctAnswer}`);

  if (questions.length > 0) {
    return (
      <div className="answers-container">
        {questions[progress].allAnswers.map((answer, index) => {
          return (
            <div
              className="single-answer"
              key={index}
              onClick={e => {
                let clickedAnswer = e.target.innerText;
                checkAnswer(clickedAnswer);
              }}
            >
              {answer}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <SpinnerComp />;
  }
};

export default Answers;

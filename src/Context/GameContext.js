import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import * as urls from "../Api/api";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [questions, SetQuestions] = useState([]);
  const [progress, SetProgress] = useState(0);
  const [newGame, SetNewGame] = useState(false);
  const [isGameOver, SetIsGameOver] = useState(false);

  useEffect(() => {
    let questionsArray = [];

    axios
      .all([
        axios.get(urls.easyQuestions),
        axios.get(urls.medQuestions),
        axios.get(urls.hardQuestions)
      ])
      .then(receivedQuestions => {
        let questionsArrayEasy = receivedQuestions[0].data.results.map(
          receivedQuestion => {
            const formattedQuestion = {
              question: receivedQuestion.question,
              correctAnswer: receivedQuestion.correct_answer
            };
            const incorrectAnswers = [...receivedQuestion.incorrect_answers];
            let index = Math.floor(Math.random() * 3);
            incorrectAnswers.splice(index, 0, receivedQuestion.correct_answer);
            formattedQuestion.allAnswers = incorrectAnswers;

            return formattedQuestion;
          }
        );
        let questionsArrayMed = receivedQuestions[1].data.results.map(
          receivedQuestion => {
            const formattedQuestion = {
              question: receivedQuestion.question,
              correctAnswer: receivedQuestion.correct_answer
            };
            const incorrectAnswers = [...receivedQuestion.incorrect_answers];
            let index = Math.floor(Math.random() * 3);
            incorrectAnswers.splice(index, 0, receivedQuestion.correct_answer);
            formattedQuestion.allAnswers = incorrectAnswers;

            return formattedQuestion;
          }
        );
        let questionsArrayHard = receivedQuestions[2].data.results.map(
          receivedQuestion => {
            const formattedQuestion = {
              question: receivedQuestion.question,
              correctAnswer: receivedQuestion.correct_answer
            };
            const incorrectAnswers = [...receivedQuestion.incorrect_answers];
            let index = Math.floor(Math.random() * 3);
            incorrectAnswers.splice(index, 0, receivedQuestion.correct_answer);
            formattedQuestion.allAnswers = incorrectAnswers;

            return formattedQuestion;
          }
        );
        questionsArray = [
          ...questionsArrayEasy,
          ...questionsArrayMed,
          ...questionsArrayHard
        ];
        SetQuestions(questionsArray);
      })
      .catch(err => {
        console.log(err);
      });
  }, [newGame]);

  const checkAnswer = answer => {
    if (answer === questions[progress].correctAnswer) {
      SetProgress(progress + 1);
    } else {
      SetIsGameOver(true);
    }
  };

  return (
    <GameContext.Provider
      value={{
        questions,
        progress,
        SetProgress,
        checkAnswer,
        SetNewGame,
        SetQuestions,
        newGame,
        isGameOver,
        SetIsGameOver
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

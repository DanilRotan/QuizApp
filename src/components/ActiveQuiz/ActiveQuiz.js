import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "../AnswersList/AnswersList";

const ActiveQuiz = ({
  answers,
  question,
  quizLength,
  answerNumber,
  answerState,
  onAnswerClick,
}) => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{`${answerNumber}.`}</strong>&nbsp; {question}
      </span>

      <small>
        {answerNumber} из {quizLength}
      </small>
    </p>
    <AnswersList
      answers={answers}
      answerState={answerState}
      onAnswerClick={onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;

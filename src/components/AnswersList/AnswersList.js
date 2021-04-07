import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({ answers, answerState, onAnswerClick }) => (
  <ul className={classes.AnswersList}>
    {answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          answerState={answerState ? answerState[answer.id] : null}
          onAnswerClick={onAnswerClick}
        />
      );
    })}
  </ul>
);

export default AnswersList;

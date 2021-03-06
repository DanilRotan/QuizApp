import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import classes from "./QuizList.module.css";
import axios from "../../axios/axios-quiz";

export default class QuizList extends Component {
  state = {
    quizes: [],
    loading: true,
  };
  async componentDidMount() {
    try {
      const response = await axios.get("/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });

      this.setState({
        quizes,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderQuizes() {
    return this.state.quizes.map((quiz, index) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"./quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }
  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

import React from "react";
import classes from "./Backdrope.module.css";

const Backdrope = ({ onClick }) => (
  <div className={classes.Backdrope} onClick={onClick}></div>
);

export default Backdrope;

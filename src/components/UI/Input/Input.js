import React from "react";
import classes from "./Input.module.css";

const Input = ({
  inputType = "text",
  label,
  value,
  onChange,
  errorMassage,
  valid,
  touched,
  shouldValidate,
}) => {
  function isInvalid() {
    return !valid && shouldValidate && touched;
  }

  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;
  if (isInvalid()) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} value={value} onChange={onChange} />
      {isInvalid() ? <span>{errorMassage}</span> : null}
    </div>
  );
};

export default Input;

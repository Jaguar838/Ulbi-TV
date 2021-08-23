import React from "react";
import css from "./MyButton.module.css";
const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={css.MyBtn}>
      {children}
    </button>
  );
};

export default MyButton;

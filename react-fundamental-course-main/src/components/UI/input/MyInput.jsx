import React from "react";
import css from "./MyInput.module.css";

const MyInput = (props) => {
  return <input className={css.myInput} {...props} type="text" />;
};

export default MyInput;

// {/* НЕ Управляемый компонент */ }
// const MyInput = React.forwardRef((props, ref) => {
//   return <input ref={ref} className={css.myInput} {...props} type="text" />;
// });

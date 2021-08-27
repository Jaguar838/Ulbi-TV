import React from "react";
import css from "./MyModal.module.css";
const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [css.myModal];
  if (visible) {
    rootClasses.push(css.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={css.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;

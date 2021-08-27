import React from "react";
import css from "./styles/PostItem.module.css";
import MyButton from "./UI/button/MyButton";

const PostItem = ({ remove, id, title, body }) => {
  return (
    <div className={css.post}>
      <div className={css.post__content}>
        <strong>
          {id}. {title}
        </strong>
      </div>
      <div>{body}</div>
      <div className={css.post__btn}>
        <MyButton onClick={() => remove({ id, title, body })}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;

import React from "react";
import css from "./styles/PostItem.module.css";

const PostItem = ({ id, title, body }) => {
  return (
    <div className={css.post}>
      <div className={css.post__content}>
        <strong>
          {id}. {title}
        </strong>
      </div>
      <div>{body}</div>
      <div className={css.post__btn}>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;

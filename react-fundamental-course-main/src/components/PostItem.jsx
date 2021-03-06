import React from "react";
import css from "./styles/PostItem.module.css";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className={css.post}>
      <div className={css.post__content}>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={css.post__btn}>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;

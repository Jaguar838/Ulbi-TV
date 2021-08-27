import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, heading, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{heading}</h1>
      {posts.map(({ id, title, body }, index) => (
        <PostItem
          remove={remove}
          key={id}
          id={index + 1}
          title={title}
          body={body}
        />
      ))}
    </div>
  );
};

export default PostList;

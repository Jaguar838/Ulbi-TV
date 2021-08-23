import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, heading }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{heading}</h1>
      {posts.map(({ id, title, body }) => (
        <PostItem key={id} id={id} title={title} body={body} />
      ))}
    </div>
  );
};

export default PostList;

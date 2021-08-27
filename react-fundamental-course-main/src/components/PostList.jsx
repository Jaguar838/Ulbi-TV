import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, heading, remove }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>No posts found!</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{heading}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          key={post.id}
          number={index + 1}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
// {
//   sortedAndSearchedPosts.length !== 0 ? (
//
//   ) : (
//
//   );
// }

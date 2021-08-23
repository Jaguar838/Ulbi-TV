import React, { useState } from "react";
import PostList from "components/PostList";

import PostForm from "components/PostForm";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} heading="List posts JS" />
    </div>
  );
}



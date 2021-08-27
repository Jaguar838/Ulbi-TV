import React, { useState, useMemo } from "react";
import PostList from "components/PostList";

import PostForm from "components/PostForm";

import PostFilter from "components/PostFilter";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "1Description" },
    { id: 2, title: "Javascript 0", body: "2Description" },
    { id: 3, title: "Javascript 3", body: "0Description" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("getSortedPosts");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        heading="List posts JS"
      />
    </div>
  );
}

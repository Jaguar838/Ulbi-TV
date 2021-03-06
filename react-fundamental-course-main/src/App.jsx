import React, { useState } from "react";
import PostList from "components/PostList";

import PostForm from "components/PostForm";

import PostFilter from "components/PostFilter";
import MyModal from "components/UI/modal/MyModal";
import MyButton from "components/UI/button/MyButton";
import { usePosts } from "components/hooks/usePosts";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "1Description" },
    { id: 2, title: "Javascript 0", body: "2Description" },
    { id: 3, title: "Javascript 3", body: "0Description" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create User
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

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

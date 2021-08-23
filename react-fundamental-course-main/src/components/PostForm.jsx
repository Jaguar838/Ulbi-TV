import React, { useState } from "react";
import MyButton from "components/UI/button/MyButton";
import MyInput from "components/UI/input/MyInput";
const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.prevent.Default();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    console.log(newPost);

    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Name post"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Body"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;

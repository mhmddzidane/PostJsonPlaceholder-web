import React from "react";
import PostList from "../components/PostList";

const Post = () => {
  return (
    <div className="container ">
      <h1 className="mb-4 mt-4 text-center">List post</h1>
      <PostList />
    </div>
  );
};

export default Post;

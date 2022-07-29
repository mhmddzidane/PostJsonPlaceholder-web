import React from "react";
import PostList from "../components/PostList";
import { Card } from "react-bootstrap";

const Post = () => {
  return (
    <div className="container ">
      <h1 className="mb-4 mt-4 text-center">List post</h1>
      <Card className="mt-2 mb-4 bg-dark">
        <Card.Body>
          <PostList />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;

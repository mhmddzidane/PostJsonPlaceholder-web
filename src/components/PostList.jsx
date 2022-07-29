import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/global.css";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const PostList = () => {
  const [users, setUsers] = useState([]);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="text-center">
          {data?.map((post) => (
            <div
              style={{
                display: "inline-block",
              }}
              key={post.id}
            >
              <Card
                className="mb-4 ms-4 cardz"
                style={{ width: "20rem", height: "20rem" }}
              >
                <Link
                  to={`/detail/${post.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card.Body>
                    <Card.Title className="text-dark">
                      Title : {post.title}
                    </Card.Title>
                    {users.map((user) => {
                      if (post.userId === user.id) {
                        return (
                          <div key={user.id}>
                            <Card.Subtitle className="mb-2 text-muted">
                              Posted by : {user.name}
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-4 text-muted">
                              Company : {user.company?.name}
                            </Card.Subtitle>
                          </div>
                        );
                      }
                    })}
                    <Card.Text className="text-dark ">{post.body}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;

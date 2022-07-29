import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Comment from "./Comment";
import "../style/global.css";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const DetailPostList = () => {
  const [posts, setPosts] = useState([]);

  const params = useParams();
  const id = params.postid;

  useEffect(() => {
    getPost();
  }, []);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users`
  );

  const getPost = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="text-light fw-bolder">Title : {posts.title}</h2>
          {data?.map((user, index) => {
            if (posts.userId === user.id) {
              return (
                <div key={index}>
                  <h5 className="text-light fw-bold">
                    Posted by :{" "}
                    <Link to={`/user/${user.id}`} className="userLink ">
                      {user.name}
                    </Link>
                  </h5>
                </div>
              );
            }
          })}
          <h4 className="mb-5 text-light">{posts.body}</h4>
          <Comment />
        </div>
      )}
    </>
  );
};

export default DetailPostList;

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Comment from "../Comment";
import "../../style/global.css";
import Loading from "../Loading";
import { getUsers } from "../../action/getUsersAction";
import { getPostsDetail } from "../../action/getPostsAction";
import { useDispatch, useSelector } from "react-redux";

const DetailPostList = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.postid;

  const { getUserResult, getUserLoading, getUserError } = useSelector(
    (state) => state.UsersReducer
  );

  const { getPostDetailResult } = useSelector((state) => state.PostsReducer);

  useEffect(() => {
    dispatch(getPostsDetail(id));
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2 className="text-light fw-bolder">
          Title : {getPostDetailResult.title}
        </h2>
        {getUserResult ? (
          getUserResult.map((user, index) => {
            if (getPostDetailResult.userId === user.id) {
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
          })
        ) : getUserLoading ? (
          <Loading />
        ) : (
          <p>{getUserError ? getUserError : "error"}</p>
        )}
        <h4 className="mb-5 text-light">{getPostDetailResult.body}</h4>
        <Comment />
      </div>
    </>
  );
};

export default DetailPostList;

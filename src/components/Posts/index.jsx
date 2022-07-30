import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../action/getPostsAction";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { getUsers } from "../../action/getUsersAction";

const Posts = () => {
  const { getPostResult, getPostLoading, getPostError } = useSelector(
    (state) => state.PostsReducer
  );

  const { getUserResult } = useSelector((state) => state.UsersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className="text-center">
        {getPostResult ? (
          getPostResult.map((post) => {
            return (
              <div
                style={{
                  display: "inline-block",
                }}
                key={post.id}
              >
                <Card
                  className="mb-4 mx-2 cardz"
                  style={{ width: "20rem", height: "21rem" }}
                >
                  <Link
                    to={`/detail/${post.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Body>
                      <Card.Title className="text-dark fw-bold">
                        {post.title}
                      </Card.Title>
                      {getUserResult ? (
                        getUserResult.map((user) => {
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
                        })
                      ) : (
                        <p>error</p>
                      )}
                      <Card.Text className="text-dark ">{post.body}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            );
          })
        ) : getPostLoading ? (
          <Loading />
        ) : (
          <p>{getPostError ? getPostError : "error"}</p>
        )}
      </div>
    </>
  );
};

export default Posts;

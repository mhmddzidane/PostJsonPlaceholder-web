import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Comment = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const params = useParams();
  const id = params.postid;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h5 className="text-light">Comment</h5>
          {data.map((comment, index) => {
            if (id == comment.postId) {
              return (
                <div key={index} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-secondary">
                        {comment.email}
                      </Card.Title>
                      <Card.Subtitle> {comment.body}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })}
        </>
      )}
    </>
  );
};

export default Comment;

import { Card } from "react-bootstrap";
import DetailPostList from "../components/DetailPost";

const DetailPost = () => {
  return (
    <div className="container">
      <h1 className="mb-4 mt-4 text-center">Detail post</h1>
      <Card className="mt-2 mb-4 bg-dark">
        <Card.Body>
          <DetailPostList />
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailPost;

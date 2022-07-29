import { useParams } from "react-router-dom";
import Album from "./Album";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { Card } from "react-bootstrap";

const DetailUser = () => {
  const params = useParams();
  const id = params.userid;

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Card className="mt-2 mb-4 bg-dark">
            <Card.Body className="text-light">
              <h3>
                Name : <span className="text-warning">{data.name}</span>
              </h3>
              <h3>
                Email : <span className="text-warning">{data.email}</span>
              </h3>
              <h3>
                Address :{" "}
                <span className="text-warning">
                  {data.address?.suite}, {data.address?.street},{" "}
                  {data.address?.city}
                </span>
              </h3>
              <h3>
                Company :{" "}
                <span className="text-warning">{data.company?.name}</span>
              </h3>
            </Card.Body>
          </Card>
          <Album />
        </>
      )}
    </>
  );
};

export default DetailUser;

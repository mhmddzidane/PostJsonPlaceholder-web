import { useParams } from "react-router-dom";
import Album from "./Album";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

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
          <h3>
            Name : <span className="text-secondary">{data.name}</span>
          </h3>
          <h3>
            Email : <span className="text-secondary">{data.email}</span>
          </h3>
          <h3>
            Address :{" "}
            <span className="text-secondary">
              {data.address?.suite}, {data.address?.street},{" "}
              {data.address?.city}
            </span>
          </h3>
          <h3>
            Company :{" "}
            <span className="text-secondary">{data.company?.name}</span>
          </h3>
          <Album />
        </>
      )}
    </>
  );
};

export default DetailUser;

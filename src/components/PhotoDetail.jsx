import { useParams } from "react-router-dom";
import "../style/global.css";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const PhotoDetail = () => {
  const params = useParams();
  const id = params.photoid;

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="text-center mt-4">
          <h3>
            Title : <span className="text-secondary">{data.title}</span>
          </h3>
          <div className="mb-4 mt-4" style={{ cursor: "pointer" }}>
            <img src={data.url} alt="Foto" className="foto" />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoDetail;

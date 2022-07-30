import { useParams } from "react-router-dom";
import PhotoList from "../PhotoList";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";

const Album = () => {
  const params = useParams();
  const id = params.userid;

  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((album, index) => {
            if (id == album.userId) {
              return (
                <div key={index}>
                  <h4 className="mt-4 ">
                    <span className="fw-bold">Album Name : </span>
                    {album.title}
                  </h4>
                  <PhotoList albumId={album.id} />
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default Album;

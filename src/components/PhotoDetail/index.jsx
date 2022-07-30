import { useParams } from "react-router-dom";
import "../../style/global.css";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoDetail } from "../../action/getPhotoAction";
import { useEffect } from "react";

const PhotoDetail = () => {
  const params = useParams();
  const id = params.photoid;

  const { getPhotoDetailResult, getPhotoDetailLoading, getPhotoDetailError } =
    useSelector((state) => state.PhotosReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotoDetail(id));
  }, [dispatch]);

  return (
    <>
      {getPhotoDetailLoading ? (
        <Loading />
      ) : (
        <div className="text-center mt-4">
          <h3>
            Title :{" "}
            <span className="text-secondary">{getPhotoDetailResult.title}</span>
          </h3>
          <div className="mb-4 mt-4" style={{ cursor: "pointer" }}>
            <img
              src={getPhotoDetailResult.url}
              alt="Foto"
              className="foto"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoDetail;

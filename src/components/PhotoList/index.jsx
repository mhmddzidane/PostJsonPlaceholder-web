import { Link } from "react-router-dom";
import Slider from "react-slick";
import Loading from "../Loading";
import { getPhoto } from "../../action/getPhotoAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PhotoList = ({ albumId }) => {
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { getPhotoResult, getPhotoLoading, getPhotoError } = useSelector(
    (state) => state.PhotosReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoto());
  }, [dispatch]);

  return (
    <div>
      {getPhotoResult ? (
        <Slider {...settings}>
          {getPhotoResult.map((photo, index) => {
            if (photo.albumId == albumId) {
              return (
                <div key={index}>
                  <Link to={`/photo/${photo.id}`}>
                    <img src={photo.thumbnailUrl}></img>
                  </Link>
                </div>
              );
            }
          })}
        </Slider>
      ) : getPhotoLoading ? (
        <Loading />
      ) : (
        <p>{getPhotoError ? getPhotoError : "error"}</p>
      )}
    </div>
  );
};

export default PhotoList;

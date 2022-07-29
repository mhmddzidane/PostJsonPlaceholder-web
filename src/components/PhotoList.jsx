import { Link } from "react-router-dom";
import Slider from "react-slick";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

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

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {data.map((photo, index) => {
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
      )}
    </div>
  );
};

export default PhotoList;

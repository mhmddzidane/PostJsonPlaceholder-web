import { useParams } from "react-router-dom";
import Album from "../Album";
import Loading from "../Loading";
import { Card } from "react-bootstrap";
import { getUsersDetail } from "../../action/getUsersAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DetailUser = () => {
  const params = useParams();
  const id = params.userid;

  const { getUserDetailResult, getUserDetailLoading, getUserDetailError } =
    useSelector((state) => state.UsersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersDetail(id));
  }, [dispatch]);

  return (
    <>
      {getUserDetailLoading ? (
        <Loading />
      ) : (
        <>
          <Card className="mt-2 mb-4 bg-dark">
            <Card.Body className="text-light">
              <h3>
                Name :{" "}
                <span className="text-warning">{getUserDetailResult.name}</span>
              </h3>
              <h3>
                Email :{" "}
                <span className="text-warning">
                  {getUserDetailResult.email}
                </span>
              </h3>
              <h3>
                Address :{" "}
                <span className="text-warning">
                  {getUserDetailResult.address?.suite},{" "}
                  {getUserDetailResult.address?.street},{" "}
                  {getUserDetailResult.address?.city}
                </span>
              </h3>
              <h3>
                Company :{" "}
                <span className="text-warning">
                  {getUserDetailResult.company?.name}
                </span>
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

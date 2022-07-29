import React from "react";
import DetailUserList from "../components/DetailUserList";
import { Card } from "react-bootstrap";

const DetailUser = () => {
  return (
    <div className="container">
      <h1 className="mb-4 mt-4 text-center">Detail User</h1>

      <DetailUserList />
    </div>
  );
};

export default DetailUser;

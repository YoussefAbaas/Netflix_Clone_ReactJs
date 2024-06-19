import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Watch = () => {
  const navigate = useNavigate();
  return (
    <div className="watch">
      <div className="back" onClick={() => navigate("/home")}>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
};

export default Watch;

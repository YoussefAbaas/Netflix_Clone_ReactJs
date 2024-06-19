import React, { useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.w3schools.com/html/mov_bbb.mp4";
  const navigate = useNavigate();

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5RdSskriexHMwBNf7fjrb4tQZ4a2BDW6WA&s"
          alt=""
        />
      )}
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop controls />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow
                className="icon"
                onClick={() => {
                  navigate("/watch");
                }}
              />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium maxime suscipit aspernatur rem itaque.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;

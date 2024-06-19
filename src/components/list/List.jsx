import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listItem/ListItem";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
        <div className="container" ref={listRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <ListItem index={index} />
          ))}
        </div>
        {slideNumber > 0 && (
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
          />
        )}
      </div>
    </div>
  );
};

export default List;

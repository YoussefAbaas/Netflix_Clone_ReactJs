import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="action">action</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://resizing.flixster.com/P3ITKQPm33gw4K73O9DYCOfyZ4E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ1Zjg4NDFhLWMxY2EtNDU3NC04OTNmLTQ4MTJiMzc3Y2EwZC5qcGc="
        alt=""
      />
      <div className="info">
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, eligendi ad obcaecati perferendis consequatur qui
          cumque dolores rem sed facere voluptas ex soluta voluptatem mollitia
          reprehenderit provident recusandae necessitatibus fugiat.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

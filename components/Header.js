import React from "react";

export default function Header() {
  return (
    <div className="header_top">
      <div className="col-sm-3 logo">
        <a href="index.html">
          <img src={"/images/logo.png"} />
        </a>
      </div>
      <div className="col-sm-6 nav">
        <ul>
          <li>
            {" "}
            <span
              className="simptip-position-bottom simptip-movable"
              data-tooltip="comic"
            >
              <a href="movie.html"></a>
            </span>
          </li>
          <li>
            <span
              className="simptip-position-bottom simptip-movable"
              data-tooltip="movie"
            >
              <a href="movie.html"> </a>
            </span>
          </li>
          <li>
            <span
              className="simptip-position-bottom simptip-movable"
              data-tooltip="video"
            >
              <a href="movie.html"></a>
            </span>
          </li>
          <li>
            <span
              className="simptip-position-bottom simptip-movable"
              data-tooltip="game"
            >
              <a href="movie.html"></a>
            </span>
          </li>
          <li>
            <span
              className="simptip-position-bottom simptip-movable"
              data-tooltip="tv"
            >
              <a href="movie.html"></a>
            </span>
          </li>
          <li>
            <span
              className="simptip-position-bottom simptip-movable"
              data-tooltip="more"
            >
              <a href="movie.html"></a>
            </span>
          </li>
        </ul>
      </div>
      <div className="clearfix"> </div>
    </div>
  );
}

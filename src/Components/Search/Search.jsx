import React from "react";
import "./Search.scss";
import video from "../../assets/video3.mp4";
const Search = () => {
  return (
    <div className="search">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="text">
        <p> Hold on. We are building your Package. </p>
        <p>Visit us back soon.</p>
      </div>
    </div>
  );
};

export default Search;

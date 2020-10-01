import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Game() {
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_image"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5f903011869197.5629131312994.jpg"
      />
      </Link>
    </div>
  );
}

export default Game;

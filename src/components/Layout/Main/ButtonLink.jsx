import React from "react";
import { Link } from "react-router-dom";
// import { Animated } from "react-animated-css";
import './ButtonLink.css'

const ButtonLink = () => {
  return (
    <div>
      <Link to="/project" style={{textDecoration:'none'}}>
      <button className="button-53">My Project</button>
      </Link>
    </div>
  );
};

export default ButtonLink;

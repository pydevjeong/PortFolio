import React from "react";
import firstImg from "../../imgs/projectFirst.png";
import "./ProjectCommon.css";
import ReactPlayer from "react-player";
import firstVid from "../../videos/gym_maniac.mp4";
import Header from "../Layout/Header/Header";
const FirstProject = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <h1>Gym Maniac</h1>
      <div className="img_container">
        <img className="project_img" src={firstImg} alt="" />
      </div>
      <div className="project_explaination">
        <p>설명글</p>
        <p>사용한기술들, 기간, 깃허브</p>
        <div className="project_video">
          <ReactPlayer
            className="react-player"
            url={firstVid}
            autoplay={false}
            controls={true}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default FirstProject;
